import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imagesDir = path.join(__dirname, '../public/images');
const optimizedDir = path.join(__dirname, '../public/images/optimized');

// Create optimized directory if it doesn't exist
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Image sizes for responsive images
const sizes = {
  mobile: 640,
  tablet: 1024,
  desktop: 1920
};

async function optimizeImage(filename) {
  const inputPath = path.join(imagesDir, filename);
  const ext = path.extname(filename);
  const baseName = path.basename(filename, ext);

  // Skip if not an image
  if (!['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'].includes(ext)) {
    return;
  }

  console.log(`Optimizing ${filename}...`);

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Generate WebP versions for different sizes
    for (const [sizeName, width] of Object.entries(sizes)) {
      if (metadata.width >= width) {
        // WebP version
        await image
          .clone()
          .resize(width, null, { withoutEnlargement: true })
          .webp({ quality: 85 })
          .toFile(path.join(optimizedDir, `${baseName}-${sizeName}.webp`));

        // JPG fallback
        await image
          .clone()
          .resize(width, null, { withoutEnlargement: true })
          .jpeg({ quality: 85, progressive: true })
          .toFile(path.join(optimizedDir, `${baseName}-${sizeName}.jpg`));
      }
    }

    // Also create a standard optimized version at original size (max 1920px)
    const maxWidth = Math.min(metadata.width, 1920);

    // WebP
    await image
      .clone()
      .resize(maxWidth, null, { withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(path.join(optimizedDir, `${baseName}.webp`));

    // JPG
    await image
      .clone()
      .resize(maxWidth, null, { withoutEnlargement: true })
      .jpeg({ quality: 85, progressive: true })
      .toFile(path.join(optimizedDir, `${baseName}.jpg`));

    console.log(`✓ ${filename} optimized successfully`);
  } catch (error) {
    console.error(`✗ Error optimizing ${filename}:`, error.message);
  }
}

async function optimizeAllImages() {
  console.log('Starting image optimization...\n');

  const files = fs.readdirSync(imagesDir);

  for (const file of files) {
    const filePath = path.join(imagesDir, file);
    const stat = fs.statSync(filePath);

    if (stat.isFile()) {
      await optimizeImage(file);
    }
  }

  console.log('\n✓ All images optimized!');
  console.log(`Optimized images are in: ${optimizedDir}`);
}

optimizeAllImages().catch(console.error);
