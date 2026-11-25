// Share card for /go/free-monday: the site's She Who Becomes card (assets/og/she-who-becomes.jpg)
// with a "14 DAYS FREE" pill under the line. The Kajabi trial is 14 days.
// Run: node scripts/make-trial-og.cjs ["LABEL"]   (needs the Instrument Sans font installed for the exact look)
const sharp = require('sharp');
const path = require('path');
const root = path.join(__dirname, '..');
const src = path.join(root, 'site/assets/og/she-who-becomes.jpg');
const out = path.join(root, 'public/go-cards/free-monday.jpg');
const label = process.argv[2] || '14 DAYS FREE';
const w = 64 + label.length * 13;  // pill width follows the label
const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect x="64" y="548" width="${w}" height="44" rx="22" fill="#38445A"/>
  <text x="${64 + w / 2}" y="576" text-anchor="middle"
        font-family="Instrument Sans, Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="500"
        font-size="16" letter-spacing="2.6" fill="#EEECE6">${label}</text>
</svg>`;
sharp(src).composite([{ input: Buffer.from(svg) }])
  .jpeg({ quality: 88, mozjpeg: true }).toFile(out)
  .then(() => console.log('wrote', out));
