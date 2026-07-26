/**
 * optimize-images-inplace.js
 *
 * Resizes + compresses every image in a folder (recursively), OVERWRITING
 * the originals with smaller versions — same filename, same extension,
 * same folder. Nothing in your HTML/markdown needs to change.
 *
 * PNG stays PNG, JPG stays JPG — just resized down and recompressed.
 *
 * ⚠️ This overwrites your originals. Back up your images folder first
 *    (e.g. `cp -r images images-backup`) in case you want to re-run with
 *    different settings later.
 *
 * Usage:
 *   node optimize-images-inplace.js <images-dir>
 *
 * Example:
 *   node optimize-images-inplace.js ./images
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const INPUT_DIR = process.argv[2];

if (!INPUT_DIR) {
  console.error('Usage: node optimize-images-inplace.js <images-dir>');
  process.exit(1);
}

// Nothing on this site is displayed wider than ~680px, but this leaves
// headroom for retina screens and larger galleries. Lower it if you want
// smaller files and don't need images that big anywhere.
const MAX_WIDTH = 1800;
const JPEG_QUALITY = 82;
const PNG_QUALITY = 82; // sharp's png() quality applies to its internal compression effort

let totalBefore = 0;
let totalAfter = 0;
let count = 0;
let skipped = 0;

function collectFiles(dir) {
  const files = [];
  (function walk(d) {
    const entries = fs.readdirSync(d, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(d, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else {
        const ext = path.extname(entry.name).toLowerCase();
        if (['.png', '.jpg', '.jpeg'].includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  })(dir);
  return files;
}

async function processFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const beforeSize = fs.statSync(filePath).size;
  const relative = path.relative(INPUT_DIR, filePath);

  try {
    const buffer = await sharp(filePath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .toBuffer();

    let outBuffer;
    if (ext === '.png') {
      outBuffer = await sharp(buffer)
        .png({ quality: PNG_QUALITY, compressionLevel: 9 })
        .toBuffer();
    } else {
      outBuffer = await sharp(buffer)
        .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
        .toBuffer();
    }

    // Only overwrite if we actually made it smaller — never make a file bigger.
    if (outBuffer.length < beforeSize) {
      fs.writeFileSync(filePath, outBuffer);
      totalBefore += beforeSize;
      totalAfter += outBuffer.length;
      count++;
      const savedPct = (100 * (1 - outBuffer.length / beforeSize)).toFixed(0);
      console.log(
        `${relative}  ${(beforeSize / 1024).toFixed(0)}KB -> ${(outBuffer.length / 1024).toFixed(0)}KB (-${savedPct}%)`
      );
    } else {
      skipped++;
      console.log(`${relative}  already small, skipped`);
    }
  } catch (err) {
    console.error(`FAILED: ${relative} — ${err.message}`);
  }
}

async function run() {
  const files = collectFiles(INPUT_DIR);
  console.log(`Found ${files.length} images in ${INPUT_DIR}. Optimizing in place...\n`);

  for (const f of files) {
    await processFile(f);
  }

  console.log('\nDone.');
  console.log(`Files optimized: ${count}`);
  console.log(`Files skipped (already small): ${skipped}`);
  console.log(`Total before: ${(totalBefore / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total after:  ${(totalAfter / 1024 / 1024).toFixed(2)} MB`);
  if (totalBefore > 0) {
    console.log(`Overall reduction: ${(100 * (1 - totalAfter / totalBefore)).toFixed(0)}%`);
  }
}

run();
