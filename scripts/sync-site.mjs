// Copies the new Nina Moore site (built in the business folder) into site/.
// Usage: node scripts/sync-site.mjs [source-dir]   (defaults to SITE_SRC or the orbit design folder)
// - leaves out working files (screens, source, tools, SYSTEM.md, LAUNCH.md, MANIFEST.md)
// - the design folder ships noindex while in preview; this strips it from every page except 404.html.
//   (the proper switch is PREVIEW = False in tools/meta.py there; this is the safety net)
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const src = path.resolve(process.argv[2] || process.env.SITE_SRC ||
  path.join(process.env.HOME, 'orbit/designs/nina-studio/2026-11-17-site'));
const out = path.join(root, 'site');
const SKIP = new Set(['screens', 'source', 'tools', 'SYSTEM.md', 'LAUNCH.md', 'MANIFEST.md', '.DS_Store']);

if (!fs.existsSync(path.join(src, 'index.html'))) { console.error('no index.html in ' + src); process.exit(1); }
fs.rmSync(out, { recursive: true, force: true });
fs.cpSync(src, out, { recursive: true, filter: (p) => !SKIP.has(path.basename(p)) });

let stripped = 0;
const walk = (d) => { for (const e of fs.readdirSync(d, { withFileTypes: true })) {
  const p = path.join(d, e.name);
  if (e.isDirectory()) { walk(p); continue; }
  if (!e.name.endsWith('.html') || p === path.join(out, '404.html')) continue;
  const h = fs.readFileSync(p, 'utf8');
  const n = h.replace(/[ \t]*<meta name="robots" content="noindex[^"]*">\n?/g, '');
  if (n !== h) { fs.writeFileSync(p, n); stripped++; }
}};
walk(out);
console.log(`site/ synced from ${src} — noindex stripped on ${stripped} pages`);
