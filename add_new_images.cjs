const fs = require('fs');
const path = require('path');

const dataFile = 'c:\\Users\\admin\\Desktop\\website\\src\\data\\products.json';
const publicDir = 'c:\\Users\\admin\\Desktop\\website\\public';

const products = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

function getImages(folder) {
    const dirPath = path.join(publicDir, folder);
    if (!fs.existsSync(dirPath)) return [];
    const files = fs.readdirSync(dirPath);
    return files.filter(f => f.match(/\.(png|jpg|jpeg|webp|avif)$/i)).map(f => '/' + folder + '/' + f);
}

const fastenersImages = getImages('FASTNERS');
const roundBarsImages = getImages('ROUND BARS');

let fasteners = products.find(p => p.id === 'fasteners');
if (fasteners && fastenersImages.length > 0) {
    fasteners.images = fastenersImages;
    fasteners.image = fastenersImages[0];
    console.log(`Added ${fastenersImages.length} images to fasteners`);
}

let roundBars = products.find(p => p.id === 'round-bars');
if (roundBars && roundBarsImages.length > 0) {
    roundBars.images = roundBarsImages;
    roundBars.image = roundBarsImages[0]; // Set first image as main image
    console.log(`Added ${roundBarsImages.length} images to round-bars`);
}

fs.writeFileSync(dataFile, JSON.stringify(products, null, 2), 'utf8');
console.log('Updated products.json successfully.');
