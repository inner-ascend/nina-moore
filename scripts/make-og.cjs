// Generates the social-share (Open Graph) card: 1200x630 landscape.
// Crops one of Nina's photos to the 1.91:1 social ratio, optimized.
// Run: node scripts/make-og.cjs
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const W = 1200, H = 630;
const root = path.join(__dirname, '..');
const src = path.join(root, 'public/images/threshold-about.jpg'); // 2172x1448 landscape
const out = path.join(root, 'public/images/og-card.jpg');

async function main() {
  await sharp(src)
    .resize(W, H, { fit: 'cover', position: 'centre' })
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(out);

  const { size } = fs.statSync(out);
  console.log(`wrote ${out} ${W}x${H} ${(size / 1024).toFixed(0)}KB`);
}

main().catch((e) => { console.error(e); process.exit(1); });
