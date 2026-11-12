// Share card for /go/free-monday: the She Who Becomes card with the price
// pill swapped for "7 DAYS FREE". Run: node scripts/make-trial-og.cjs
const sharp = require('sharp');
const path = require('path');
const root = path.join(__dirname, '..');
const src = path.join(root, 'public/she-who-becomes/og.jpg');
const out = path.join(root, 'public/go-cards/free-monday.jpg');
const label = process.argv[2] || '7 DAYS FREE';
const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect x="498" y="470" width="236" height="58" fill="#e4dfcc"/>
  <rect x="504" y="477" width="222" height="44" rx="22" fill="#9c2c28"/>
  <text x="615" y="506" text-anchor="middle" font-family="Menlo, SF Mono, monospace"
        font-size="17" letter-spacing="3" fill="#f3ece0">${label}</text>
</svg>`;
sharp(src).composite([{ input: Buffer.from(svg) }])
  .jpeg({ quality: 88, mozjpeg: true }).toFile(out)
  .then(() => console.log('wrote', out));
