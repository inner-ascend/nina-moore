// Assembles dist/ for GitHub Pages. No bundler — the site is hand-written static
// HTML. Everything in public/ ships at the root (satellite pages, favicon,
// robots, sitemap); assets/ ships under /assets.
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

// public/* -> dist/*   (she-who-becomes/, sittings/, threshold/, topics/,
//                       links/, favicon.svg, robots.txt, sitemap.xml, images/)
fs.cpSync(path.join(root, 'public'), dist, { recursive: true });

// assets/* -> dist/assets/*  (fonts + the one-pager's images)
fs.cpSync(path.join(root, 'assets'), path.join(dist, 'assets'), { recursive: true });

// root files that belong at the top of the deploy
for (const f of ['index.html', '404.html', 'CNAME']) {
  fs.copyFileSync(path.join(root, f), path.join(dist, f));
}

// ---- offers: one list, every button ---------------------------------------
// Pages link to /go/<id>. Here every "/go/<id>" in the built HTML becomes the
// real destination from offers.json, so visitors go straight to checkout with
// no redirect hop. Each offer also gets dist/go/<id>/ — a short link
// (nina-moore.com/go/sitting) to paste in Instagram, DMs and emails.
// An unknown id fails the build, so a typo can never ship a dead button.
const offers = JSON.parse(fs.readFileSync(path.join(root, 'offers.json'), 'utf8'));
delete offers._readme;

const htmlFiles = (dir, acc = []) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (e.name !== 'original') htmlFiles(p, acc); }
    else if (e.name.endsWith('.html')) acc.push(p);
  }
  return acc;
};

const unknown = new Set();
for (const file of htmlFiles(dist)) {
  const html = fs.readFileSync(file, 'utf8');
  const out = html.replace(/(["'])\/go\/([a-z0-9-]+)\/?\1/g, (m, q, id) => {
    if (!offers[id]) { unknown.add(`${id} (in ${path.relative(dist, file)})`); return m; }
    return q + offers[id].url + q;
  });
  if (out !== html) fs.writeFileSync(file, out);
}
if (unknown.size) {
  console.error('unknown offer id — add it to offers.json:\n  ' + [...unknown].join('\n  '));
  process.exit(1);
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
for (const [id, o] of Object.entries(offers)) {
  const dir = path.join(dist, 'go', id);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(o.name)} · Nina Moore</title>
<meta name="robots" content="noindex">
<meta http-equiv="refresh" content="0;url=${esc(o.url)}">
<script>location.replace(${JSON.stringify(o.url)} + location.search);</script>
</head><body><p><a href="${esc(o.url)}">${esc(o.name)} — continue</a></p></body></html>
`);
}
console.log('offers: ' + Object.entries(offers).map(([id, o]) => `/go/${id} → ${o.price}`).join(' · '));

function size(dir) {
  let bytes = 0;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    bytes += e.isDirectory() ? size(p) : fs.statSync(p).size;
  }
  return bytes;
}
console.log(`built dist/ — ${(size(dist) / 1e6).toFixed(1)} MB`);
