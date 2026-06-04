import sharp from 'sharp';
import { execSync } from 'child_process';
import { createRequire } from 'module';
import path from 'path';
import fs from 'fs';

const require = createRequire(import.meta.url);
const ffmpegBin = require('ffmpeg-static');

const PUBLIC = path.resolve('public');

const images = [
  { src: 'equipo-juanca.jpg',        width: 460,  quality: 82 },
  { src: 'equipo-rebe.jpg',          width: 460,  quality: 82 },
  { src: 'hero-ma.jpg',              width: 1920, quality: 80 },
  { src: 'image-aloha-home.jpg',     width: 900,  quality: 82 },
  { src: 'image-aloha-property.jpg', width: 900,  quality: 82 },
];

console.log('\n=== Optimizando imágenes → WebP ===\n');

for (const { src, width, quality } of images) {
  const input  = path.join(PUBLIC, src);
  const output = path.join(PUBLIC, src.replace(/\.jpe?g$/i, '.webp'));

  const { size: before } = fs.statSync(input);
  await sharp(input)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(output);
  const { size: after } = fs.statSync(output);

  console.log(`${src}: ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB WebP (${Math.round((1-after/before)*100)}% ahorro)`);
}

console.log('\n=== Optimizando vídeo hero ===\n');

const videoIn  = path.join(PUBLIC, 'hero-madrid.mp4');
const videoOut = path.join(PUBLIC, 'hero-madrid-opt.mp4');
const webmOut  = path.join(PUBLIC, 'hero-madrid.webm');

const { size: vidBefore } = fs.statSync(videoIn);

// MP4 optimizado (H.264, CRF 28, resolución 1080p máx, sin audio, faststart para streaming)
execSync(
  `"${ffmpegBin}" -y -i "${videoIn}" -vf "scale='min(1920,iw)':-2" -c:v libx264 -crf 28 -preset slow -an -movflags +faststart "${videoOut}"`,
  { stdio: 'inherit' }
);

// WebM VP9 para navegadores modernos (archivo más pequeño)
execSync(
  `"${ffmpegBin}" -y -i "${videoIn}" -vf "scale='min(1280,iw)':-2" -c:v libvpx-vp9 -b:v 0 -crf 35 -an "${webmOut}"`,
  { stdio: 'inherit' }
);

const { size: mp4After }  = fs.statSync(videoOut);
const { size: webmAfter } = fs.statSync(webmOut);

console.log(`\nhero-madrid.mp4:  ${(vidBefore/1024/1024).toFixed(1)}MB → ${(mp4After/1024/1024).toFixed(1)}MB (${Math.round((1-mp4After/vidBefore)*100)}% ahorro)`);
console.log(`hero-madrid.webm: ${(webmAfter/1024/1024).toFixed(1)}MB (para navegadores modernos)`);

fs.renameSync(videoOut, videoIn);
console.log('\n✓ hero-madrid.mp4 reemplazado con versión optimizada');
console.log('✓ hero-madrid.webm creado\n');
