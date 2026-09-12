// Fails the build on dead links. Run after scripts/build.mjs, against dist/.
//
// Internal links are checked against the files actually in dist/, including
// #anchors. External links are fetched: a 404/410 is a hard failure, because
// that is exactly how the Kajabi pages that never existed presented. A 403 is
// NOT a failure — Cloudflare returns 403 to non-browser clients on the live
// checkout pages, so treating it as broken would fail the build on links that
// work fine for real buyers. Network errors are warnings, so CI does not go
// red because a third party had a bad minute.
//
// Run: node scripts/check-links.mjs
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');

// The archived React build under /original/ is a frozen snapshot, robots-
// disallowed and unlinked. Its internals are not ours to police.
const SKIP_DIRS = new Set(['original']);

const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36';

const TIMEOUT_MS = 15000;
const CONCURRENCY = 6;
// A host answering 403 is reachable; Cloudflare bot protection does this.
const TOLERATED = new Set([401, 403, 405, 429, 999]);

function htmlFiles(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if (SKIP_DIRS.has(e.name)) continue;
      htmlFiles(path.join(dir, e.name), acc);
    } else if (e.name.endsWith('.html')) {
      acc.push(path.join(dir, e.name));
    }
  }
  return acc;
}

const files = htmlFiles(dist);
if (!files.length) {
  console.error('no html in dist/ — run `npm run build` first');
  process.exit(1);
}

// url -> Set of source files
const internal = new Map();
const external = new Map();
const anchorsOf = new Map(); // dist-relative html path -> Set of ids

function idsIn(html) {
  const ids = new Set();
  for (const m of html.matchAll(/\sid=["']([^"']+)["']/g)) ids.add(m[1]);
  for (const m of html.matchAll(/\sname=["']([^"']+)["']/g)) ids.add(m[1]);
  return ids;
}

// Links we know are dead and cannot fix without a product decision. These are
// reported loudly on every run but do not fail the build, so a pending
// decision does not block every deploy. Delete the entry when it is fixed.
const KNOWN_BROKEN = new Map();

// URLs we cannot check from CI. Kajabi's checkout pages sit behind Cloudflare
// bot protection that varies the response by client: 200 in a real browser,
// 403 to curl from a laptop, and 404 to a datacenter IP like a GitHub runner.
// That 404 is indistinguishable from a genuinely missing page, so fetching
// them here would fail the build on links that work perfectly for buyers.
// They are skipped and listed on every run — verify them in a real browser.
const UNVERIFIABLE = [
  {
    pattern: /^https:\/\/shewhobecomes\.nina-moore\.com\/offers\/[^/]+\/checkout\/?$/,
    why: 'Kajabi checkout behind Cloudflare bot protection — returns 404 to CI, 200 in a browser',
  },
];

// rel values that never fetch a document, so a 404 on the bare origin is meaningless
const NON_FETCHING_REL = /\b(preconnect|dns-prefetch|preload|modulepreload)\b/i;

for (const f of files) {
  const html = fs.readFileSync(f, 'utf8');
  anchorsOf.set(path.relative(dist, f), idsIn(html));
  for (const m of html.matchAll(/<(a|link|img|script|source|iframe)\b([^>]*)>/gi)) {
    const [, tag, attrs] = m;
    if (tag.toLowerCase() === 'link' && NON_FETCHING_REL.test(attrs)) continue;
    const href = attrs.match(/\b(?:href|src)=["']([^"']+)["']/i);
    if (!href) continue;
    const raw = href[1].trim();
    if (!raw || /^(mailto:|tel:|javascript:|data:|#)/i.test(raw)) continue;
    // client-side template placeholders, not links (e.g. `${p.permalink}`)
    if (raw.includes('${') || raw.includes('{{')) continue;
    const bucket = /^https?:\/\//i.test(raw) ? external : internal;
    if (!bucket.has(raw)) bucket.set(raw, new Set());
    bucket.get(raw).add(path.relative(dist, f));
  }
}

const errors = [];
const warnings = [];
const known = [];
const unverifiable = [];

// ---- internal ---------------------------------------------------------
for (const [href, sources] of internal) {
  const [pathPart, anchor] = href.split('#');
  const clean = (pathPart || '').split('?')[0];
  for (const src of sources) {
    let target;
    if (!clean) {
      target = src; // pure "#anchor" on the same page
    } else if (clean.startsWith('/')) {
      target = clean.slice(1);
    } else {
      target = path.posix.join(path.posix.dirname(src), clean);
    }

    let resolved = target;
    const abs = path.join(dist, target);
    if (target === '' || target.endsWith('/')) {
      resolved = path.posix.join(target, 'index.html');
    } else if (fs.existsSync(abs) && fs.statSync(abs).isDirectory()) {
      resolved = path.posix.join(target, 'index.html');
    }

    if (!fs.existsSync(path.join(dist, resolved))) {
      errors.push(`${src}  ->  ${href}  (no such file in dist/)`);
      continue;
    }
    if (anchor) {
      const ids = anchorsOf.get(resolved);
      if (ids && !ids.has(anchor)) {
        errors.push(`${src}  ->  ${href}  (#${anchor} not found in ${resolved})`);
      }
    }
  }
}

// ---- external ---------------------------------------------------------
async function probe(url) {
  for (const method of ['HEAD', 'GET']) {
    try {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
      const res = await fetch(url, {
        method,
        redirect: 'follow',
        signal: ctrl.signal,
        headers: { 'user-agent': UA, accept: '*/*' },
      });
      clearTimeout(t);
      // Some hosts refuse HEAD; retry once with GET before believing it.
      if (method === 'HEAD' && (res.status === 405 || res.status === 501)) continue;
      return { status: res.status };
    } catch (e) {
      if (method === 'GET') return { error: e.name === 'AbortError' ? 'timeout' : e.message };
    }
  }
  return { error: 'unreachable' };
}

const urls = [...external.keys()];
let cursor = 0;
async function worker() {
  while (cursor < urls.length) {
    const url = urls[cursor++];
    const where = [...external.get(url)].slice(0, 3).join(', ');
    const skip = UNVERIFIABLE.find((u) => u.pattern.test(url));
    if (skip) {
      unverifiable.push(`${url}  [${where}]  — ${skip.why}`);
      continue;
    }
    const r = await probe(url);
    const dead = !r.error && (r.status === 404 || r.status === 410);
    if (dead && KNOWN_BROKEN.has(url)) {
      known.push(`${url}  [${where}]\n           ${KNOWN_BROKEN.get(url)}`);
    } else if (r.error) {
      warnings.push(`${url}  (${r.error})  [${where}]`);
    } else if (dead) {
      errors.push(`${where}  ->  ${url}  (HTTP ${r.status})`);
    } else if (r.status >= 400 && !TOLERATED.has(r.status)) {
      warnings.push(`${url}  (HTTP ${r.status})  [${where}]`);
    }
  }
}

await Promise.all(Array.from({ length: CONCURRENCY }, worker));

// ---- report -----------------------------------------------------------
console.log(
  `checked ${internal.size} internal and ${external.size} external links across ${files.length} pages`
);
for (const u of unverifiable) console.log(`  unchecked  ${u}`);
for (const w of warnings) console.log(`  warn   ${w}`);
for (const k of known) console.log(`  KNOWN BROKEN (not failing the build)\n           ${k}`);
if (errors.length) {
  console.error(`\n${errors.length} dead link${errors.length === 1 ? '' : 's'}:`);
  for (const e of errors) console.error(`  BROKEN ${e}`);
  process.exit(1);
}
console.log('no dead links');
