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

function size(dir) {
  let bytes = 0;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    bytes += e.isDirectory() ? size(p) : fs.statSync(p).size;
  }
  return bytes;
}
console.log(`built dist/ — ${(size(dist) / 1e6).toFixed(1)} MB`);
