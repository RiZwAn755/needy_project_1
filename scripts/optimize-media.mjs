// Generates web-optimized images and videos from the originals.
// Run with: npm run optimize-media
//
// Images: resized WebP variants -> public/img/<name>-<width>.webp
// Videos: H.264 (CRF) + faststart + poster -> public/videos/
// Original videos live in media-src/videos so they are not deployed.

import sharp from 'sharp';
import ffmpegPath from 'ffmpeg-static';
import { execFileSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const pub = path.join(root, 'public');
const imgOut = path.join(pub, 'img');
const videoSrc = path.join(root, 'media-src', 'videos');
const videoOut = path.join(pub, 'videos');

const force = process.argv.includes('--force');
const kb = (f) => `${(fs.statSync(f).size / 1024).toFixed(0)} KB`;
const fresh = (out, src) => !force && fs.existsSync(out) && fs.statSync(out).mtimeMs >= fs.statSync(src).mtimeMs;

// [source file in public/, output base name, widths, quality]
const images = [
    ['doctor-real.png', 'doctor-real', [480, 800, 1200], 78],
    ['father.jpg', 'father', [225], 80],
    ['clinic-1.png', 'clinic-1', [400, 800], 72],
    ['clinic-2.png', 'clinic-2', [400, 800], 72],
    ['gallery-2.png', 'gallery-2', [400, 800], 72],
    ['medical-decor.png', 'medical-decor', [600], 60],
    ['vijayGoyal.jpeg', 'award-vijay-goyal', [480, 800], 72],
    ['WhatsApp Image 2026-01-25 at 20.43.55.jpeg', 'award-1', [480, 800], 72],
    ['WhatsApp Image 2026-01-25 at 20.43.56.jpeg', 'award-2', [480, 800], 72],
    ['WhatsApp Image 2026-01-25 at 20.43.58.jpeg', 'award-3', [480, 800], 72],
    ['WhatsApp Image 2026-01-25 at 20.44.00.jpeg', 'award-4', [480, 800], 72],
    ['WhatsApp Image 2026-01-25 at 20.44.01.jpeg', 'award-5', [480, 800], 72],
    ['WhatsApp Image 2026-01-25 at 20.44.02.jpeg', 'award-6', [480, 800], 72],
    ['WhatsApp Image 2026-01-25 at 20.44.04.jpeg', 'award-7', [480, 800], 72],
    ['WhatsApp Image 2026-01-25 at 20.44.06.jpeg', 'award-8', [480, 800], 72],
    ['WhatsApp Image 2026-01-25 at 20.44.12.jpeg', 'award-9', [480, 800], 72],
];

async function optimizeImages() {
    fs.mkdirSync(imgOut, { recursive: true });

    for (const [file, name, widths, quality] of images) {
        const src = path.join(pub, file);
        const { width: srcWidth } = await sharp(src).metadata();
        for (const w of widths) {
            const out = path.join(imgOut, `${name}-${w}.webp`);
            if (fresh(out, src)) continue;
            await sharp(src)
                .resize({ width: Math.min(w, srcWidth), withoutEnlargement: true })
                .webp({ quality, effort: 6 })
                .toFile(out);
            console.log(`img   ${path.basename(out)}  ${kb(out)}`);
        }
    }

    // Logo is shown at 40px; favicons need small PNGs.
    const logo = path.join(pub, 'logo.png');
    const icons = [
        [path.join(imgOut, 'logo-128.webp'), (s) => s.resize(128).webp({ quality: 85 })],
        [path.join(pub, 'favicon-48.png'), (s) => s.resize(48).png({ palette: true })],
        [path.join(pub, 'apple-touch-icon.png'), (s) => s.resize(180).png({ palette: true })],
    ];
    for (const [out, pipeline] of icons) {
        if (fresh(out, logo)) continue;
        await pipeline(sharp(logo)).toFile(out);
        console.log(`img   ${path.basename(out)}  ${kb(out)}`);
    }
}

async function optimizeVideos() {
    if (!fs.existsSync(videoSrc)) return;
    fs.mkdirSync(videoOut, { recursive: true });

    for (const file of fs.readdirSync(videoSrc).filter((f) => f.endsWith('.mp4'))) {
        const src = path.join(videoSrc, file);
        const out = path.join(videoOut, file);
        const poster = path.join(videoOut, file.replace('.mp4', '-poster.webp'));

        if (!fresh(out, src)) {
            execFileSync(ffmpegPath, [
                '-y', '-loglevel', 'error', '-i', src,
                '-vf', "scale='min(720,iw)':-2",
                '-c:v', 'libx264', '-preset', 'slow', '-crf', '28', '-profile:v', 'high', '-pix_fmt', 'yuv420p',
                '-c:a', 'aac', '-b:a', '64k', '-ac', '2',
                '-movflags', '+faststart',
                out,
            ]);
            console.log(`video ${file}  ${kb(src)} -> ${kb(out)}`);
        }

        if (!fresh(poster, src)) {
            const tmp = poster.replace('.webp', '.png');
            execFileSync(ffmpegPath, ['-y', '-loglevel', 'error', '-ss', '1', '-i', src, '-frames:v', '1', tmp]);
            const buf = fs.readFileSync(tmp);
            fs.unlinkSync(tmp);
            await sharp(buf).resize({ width: 480, withoutEnlargement: true }).webp({ quality: 70 }).toFile(poster);
            console.log(`img   ${path.basename(poster)}  ${kb(poster)}`);
        }
    }
}

await optimizeImages();
await optimizeVideos();
