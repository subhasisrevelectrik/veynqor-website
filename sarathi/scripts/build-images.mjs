#!/usr/bin/env node
// Build image assets for sarathi.veynqor.com.
// Source PNG must be at assets/src/BRC_Temple_1.png before running.
// Usage: node scripts/build-images.mjs
import sharp from 'sharp';
import { mkdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const SRC = join(root, 'assets', 'src', 'BRC_Temple_1.png');
const OUT = join(root, 'assets', 'img');

mkdirSync(OUT, { recursive: true });

function kb(path) {
  return (statSync(path).size / 1024).toFixed(1) + ' KB';
}

const meta = await sharp(SRC).metadata();
console.log(`Source: ${meta.width} × ${meta.height} (${meta.format})`);

// --- Full-width images: slot-a-{w}.{avif,webp} and slot-a-1200.jpg ---

for (const w of [1600, 800]) {
  const h = Math.round(meta.height * w / meta.width);

  // WebP
  const wpPath = join(OUT, `slot-a-${w}.webp`);
  await sharp(SRC)
    .resize(w)
    .webp({ quality: 80 })
    .withMetadata(false)
    .toFile(wpPath);
  console.log(`slot-a-${w}.webp  ${h}px tall  ${kb(wpPath)}`);

  // AVIF: step quality down from 65 until under 130 KB (enforced at 1600 only)
  const avifPath = join(OUT, `slot-a-${w}.avif`);
  let q = 65;
  for (;;) {
    await sharp(SRC)
      .resize(w)
      .avif({ quality: q, effort: 6 })
      .withMetadata(false)
      .toFile(avifPath);
    const size = statSync(avifPath).size;
    if (w === 1600 && size > 130 * 1024 && q > 50) {
      console.log(`  1600px AVIF q${q}: ${(size / 1024).toFixed(1)} KB — retrying at q${q - 5}`);
      q -= 5;
    } else {
      console.log(`slot-a-${w}.avif  q${q}  ${h}px tall  ${kb(avifPath)}`);
      if (w === 1600 && size > 130 * 1024) {
        console.warn(`  ⚠  Still above 130 KB at quality 50. Cannot go lower per spec — report to owner.`);
      }
      break;
    }
  }
}

// JPEG fallback at 1200px
const jpgH = Math.round(meta.height * 1200 / meta.width);
const jpgPath = join(OUT, 'slot-a-1200.jpg');
await sharp(SRC)
  .resize(1200)
  .jpeg({ quality: 82, progressive: true })
  .withMetadata(false)
  .toFile(jpgPath);
console.log(`slot-a-1200.jpg  1200 × ${jpgH}  ${kb(jpgPath)}`);

// --- OG image: 1200 × 630, centred crop ---
// The man and the temple are near centre; 'centre' position works for this photo.
const ogPath = join(OUT, 'og-image.jpg');
let ogQ = 80;
for (;;) {
  await sharp(SRC)
    .resize(1200, 630, { fit: 'cover', position: 'centre' })
    .jpeg({ quality: ogQ, progressive: true })
    .withMetadata(false)
    .toFile(ogPath);
  const size = statSync(ogPath).size;
  if (size > 200 * 1024 && ogQ > 50) {
    console.log(`  og-image q${ogQ}: ${(size / 1024).toFixed(1)} KB — retrying at q${ogQ - 5}`);
    ogQ -= 5;
  } else {
    console.log(`og-image.jpg  1200 × 630  ${kb(ogPath)}`);
    if (size > 200 * 1024) {
      console.warn(`  ⚠  OG image still above 200 KB at quality 50 — report to owner.`);
    }
    break;
  }
}

console.log('\nDone. Intrinsic dimensions for <img> tag: 1200 × ' + jpgH);
