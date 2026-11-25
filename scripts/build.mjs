// Assembles dist/ for GitHub Pages. No bundler — the site is hand-written static
// HTML in site/ (synced from the design folder); public/ adds favicon, robots.txt and share cards.
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

// site/* -> dist/*   the new site (index, about/, portal-poem/, she-who-becomes/, writing/,
//                    assets/, img/, sitemap.xml, 404.html). Refresh it with scripts/sync-site.mjs.
fs.cpSync(path.join(root, 'site'), dist, { recursive: true });

// public/* -> dist/*   things that are not part of the site itself: favicon, robots.txt,
//                      share cards (go-cards/, she-who-becomes/og.jpg), legacy /images
fs.cpSync(path.join(root, 'public'), dist, { recursive: true });

// CNAME belongs at the top of the deploy
fs.copyFileSync(path.join(root, 'CNAME'), path.join(dist, 'CNAME'));

// ---- redirects: old pages -> new pages ------------------------------------
// GitHub Pages cannot redirect on the server, so each old path gets a stub page:
// instant meta refresh, a canonical pointing at the new page (that is what passes the
// search ranking over), and JS that keeps ?query and #hash. Never overwrites a real page.
const redirects = JSON.parse(fs.readFileSync(path.join(root, 'redirects.json'), 'utf8'));
delete redirects._readme;
const escA = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const bad = [];
for (const [from, to] of Object.entries(redirects)) {
  const file = path.join(dist, from, 'index.html');
  const target = path.join(dist, to, 'index.html');
  if (fs.existsSync(file)) bad.push(`${from} is a real page, not a redirect source`);
  if (!fs.existsSync(target)) bad.push(`${from} -> ${to}: target page does not exist`);
  if (bad.length) continue;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  // the stub borrows the new page's title and share card, so an old link pasted in
  // WhatsApp, Facebook or X still previews with a picture (those robots don't follow the refresh)
  const th = fs.readFileSync(target, 'utf8');
  const tTitle = (th.match(/<title>[^<]*<\/title>/) || ['<title>Nina Moore</title>'])[0];
  const tShare = (th.match(/<meta (?:property="og:[^"]+"|name="twitter:[^"]+") content="[^"]*">/g) || []).join('\n');
  fs.writeFileSync(file, `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
${tTitle}
${tShare}
<link rel="canonical" href="https://nina-moore.com${escA(to)}">
<meta http-equiv="refresh" content="0; url=${escA(to)}">
<script>location.replace(${JSON.stringify(to)} + location.search + location.hash);</script>
<style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#f4efe6;color:#1e1b16;font:18px/1.5 Georgia,serif}a{color:inherit}</style>
</head><body><p>This page has moved to <a href="${escA(to)}">nina-moore.com${escA(to)}</a>.</p></body></html>
`);
}
if (bad.length) { console.error('redirects.json:\n  ' + bad.join('\n  ')); process.exit(1); }
console.log(`redirects: ${Object.keys(redirects).length} stub pages`);

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
// Each short link carries its own share card (Open Graph), so pasting it in
// WhatsApp, Instagram DMs or Messages shows a picture and title. Set it per
// offer with "share": {title, description, image} in offers.json; without it
// the card falls back to the offer name and the site's default image.
// The redirect is JavaScript only, on purpose: link-preview robots don't run
// JS, so they stay and read the card; people are sent on at once.
const SITE = 'https://nina-moore.com';
for (const [id, o] of Object.entries(offers)) {
  const dir = path.join(dist, 'go', id);
  fs.mkdirSync(dir, { recursive: true });
  const s = o.share || {};
  const title = s.title || `${o.name} · Nina Moore`;
  const desc = s.description || `${o.name} — ${o.price}`;
  const imgPath = s.image || '/assets/og/home.jpg';
  if (!fs.existsSync(path.join(dist, imgPath))) {
    console.error(`share image missing for /go/${id}: ${imgPath}`);
    process.exit(1);
  }
  const img = SITE + imgPath;
  fs.writeFileSync(path.join(dir, 'index.html'), `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="robots" content="noindex">
<meta name="description" content="${esc(desc)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Nina Moore">
<meta property="og:url" content="${SITE}/go/${id}/">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${esc(img)}">
<meta property="og:image:secure_url" content="${esc(img)}">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${esc(img)}">
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
