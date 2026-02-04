import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');

// Get all image files
const imageExtensions = ['.png', '.jpg', '.jpeg'];
const files = fs.readdirSync(publicDir);

const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return imageExtensions.includes(ext);
});

console.log(`Found ${imageFiles.length} images to convert to WebP:\n`);

async function convertToWebP(inputPath, outputPath) {
    try {
        await sharp(inputPath)
            .webp({ quality: 80 }) // Good balance of quality and size
            .toFile(outputPath);

        const inputStats = fs.statSync(inputPath);
        const outputStats = fs.statSync(outputPath);
        const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

        console.log(`✅ ${path.basename(inputPath)}`);
        console.log(`   Original: ${(inputStats.size / 1024).toFixed(1)} KB`);
        console.log(`   WebP: ${(outputStats.size / 1024).toFixed(1)} KB`);
        console.log(`   Savings: ${savings}%\n`);

        return {
            original: inputStats.size,
            webp: outputStats.size
        };
    } catch (error) {
        console.error(`❌ Failed to convert ${path.basename(inputPath)}: ${error.message}\n`);
        return null;
    }
}

async function main() {
    let totalOriginal = 0;
    let totalWebP = 0;

    for (const file of imageFiles) {
        const inputPath = path.join(publicDir, file);
        const baseName = path.basename(file, path.extname(file));
        // Replace spaces with underscores for cleaner filenames
        const cleanBaseName = baseName.replace(/\s+/g, '_');
        const outputPath = path.join(publicDir, `${cleanBaseName}.webp`);

        const result = await convertToWebP(inputPath, outputPath);
        if (result) {
            totalOriginal += result.original;
            totalWebP += result.webp;
        }
    }

    console.log('='.repeat(50));
    console.log(`\nTotal Original Size: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Total WebP Size: ${(totalWebP / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Total Savings: ${((1 - totalWebP / totalOriginal) * 100).toFixed(1)}%`);
    console.log('\n✨ Conversion complete!');
    console.log('\nNote: Original files are preserved. Update your code to use .webp extensions.');
}

main().catch(console.error);
