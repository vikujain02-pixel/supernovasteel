const fs = require('fs');
const path = require('path');

const dataFile = 'c:\\Users\\admin\\Desktop\\website\\src\\data\\products.json';
const publicDir = 'c:\\Users\\admin\\Desktop\\website\\public';

const products = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

// Copy generated image
const sourceImage = 'C:\\Users\\admin\\.gemini\\antigravity\\brain\\833c44c9-fa7b-4df5-9b1f-9986cdd06e5a\\copper_sheet_1772351853274.png';
const targetImage = path.join(publicDir, 'SHEET PLATE COILS', 'Copper_Sheet.png');
if (fs.existsSync(sourceImage)) {
    fs.copyFileSync(sourceImage, targetImage);
    console.log("Copied Copper Sheet image.");
} else {
    console.log("Copper Sheet source image not found.");
}

// Helpful functions
function renameFile(oldPathRelative, newName) {
    if (!oldPathRelative) return null;
    let oldFullPath = path.join(publicDir, oldPathRelative);
    if (!fs.existsSync(oldFullPath)) {
        console.log("File not found for rename:", oldFullPath);
        return oldPathRelative;
    }
    let dir = path.dirname(oldFullPath);
    let ext = path.extname(oldFullPath);
    let newFullPath = path.join(dir, newName + ext);
    fs.renameSync(oldFullPath, newFullPath);
    let newRel = oldPathRelative.substring(0, oldPathRelative.lastIndexOf('/')) + '/' + newName + ext;
    console.log(`Renamed: ${oldPathRelative} -> ${newRel}`);
    return newRel;
}

// 1. Pipes and Tubes
let pipes = products.find(p => p.id === 'pipes-and-tubes');
if (pipes) {
    let toRemove = [3, 4, 7, 9, 10]; // 1-indexed
    let newImages = [];
    let origLength = pipes.images.length;
    for (let i = 0; i < origLength; i++) {
        let img = pipes.images[i];
        let removeIt = toRemove.includes(i + 1);

        let newImg = img;
        if (img.includes('Aluminium pipes')) newImg = renameFile(img, 'Aluminium Pipe & Tube') || img;
        else if (img.includes('API 5L PIPES')) newImg = renameFile(img, 'Carbon Steel API 5L Pipes') || img;
        else if (img.includes('ASTM A335 P11')) newImg = renameFile(img, 'Alloy Steel Pipes') || img;
        else if (img.includes('ASTTM A106 GR B CS PIPES')) newImg = renameFile(img, 'Carbon Steel Pipes') || img;
        else if (img.includes('Inconel 625 pipes')) newImg = renameFile(img, 'Inconel Alloy 625 Pipes') || img;
        else if (img.includes('Inconel Alloy pipes')) newImg = renameFile(img, 'Nickel Alloy pipes') || img;
        else if (img.includes('ss 316 pipes')) newImg = renameFile(img, 'Stainless Steel Pipes') || img;
        else if (img.includes('ss welded pipes')) newImg = renameFile(img, 'Stainless Steel Welded Pipes') || img;
        else if (img.includes('Carbon steel pipes and tubes')) newImg = renameFile(img, 'Stainless Steel Gr. 316 Pipes') || img;

        if (!removeIt) {
            newImages.push(newImg);
        }
    }
    pipes.images = newImages;
    // Main image
    if (pipes.image) {
        for (let current of newImages) {
            if (current.includes('Aluminium Pipe & Tube.png')) {
                pipes.image = current;
            }
        }
    }
}

// 2. Sheets Plates and Coils
let sheets = products.find(p => p.id === 'sheets-plates-coils');
if (sheets) {
    let toRemove = [2, 5, 6, 7, 12, 13, 15, 16]; // 1-indexed
    let newImages = [];
    let origLength = sheets.images.length;
    for (let i = 0; i < origLength; i++) {
        let img = sheets.images[i];
        let removeIt = toRemove.includes(i + 1);

        let newImg = img;
        if (img.includes('316 SS PLATE.webp')) newImg = renameFile(img, 'Stainless Steel Sheet Gr.316') || img;
        else if (img.includes('347 SS PLATE.webp')) newImg = renameFile(img, 'Stainless Steel Sheet Gr.347') || img;
        else if (img.includes('A36 Carbon Steel Plate & Sheet')) newImg = renameFile(img, 'Carbon Steel Plate Gr. A36') || img;
        else if (img.includes('CS COIL.webp')) newImg = renameFile(img, 'Carbon Steel Coils') || img;
        else if (img.includes('Mirror Stainless Steel Plate')) newImg = renameFile(img, 'Stainless Steel Sheet Gr.430') || img;
        else if (img.includes('SS 316 COIL.webp')) newImg = renameFile(img, 'Stainless Steel Coils Gr.316') || img;
        else if (img.includes('SS COIL.jpg')) newImg = renameFile(img, 'Stainless Steel Coils Gr. 201-202') || img;
        else if (img.includes('Stainless Steel Hot Rolled Coil')) newImg = renameFile(img, 'Stainless Steel HR Coils 304') || img;
        else if (img.includes('Stainless Steel Sheet Gr.304')) newImg = renameFile(img, 'Aluminium Plate & Sheet') || img;

        if (!removeIt) {
            newImages.push(newImg);
        }
    }
    // Add copper sheet
    newImages.push('/SHEET PLATE COILS/Copper_Sheet.png');
    sheets.images = newImages;
    // Update main image
    if (sheets.image && sheets.image.includes('316 SS PLATE.webp')) {
        sheets.image = '/SHEET PLATE COILS/Stainless Steel Sheet Gr.316.webp';
    }
}

// 3. Flanges
let flanges = products.find(p => p.id === 'flanges');
if (flanges) {
    let toRemove = [1, 4, 6, 9, 13, 16];
    let newImages = [];
    for (let i = 0; i < flanges.images.length; i++) {
        if (!toRemove.includes(i + 1)) {
            newImages.push(flanges.images[i]);
        }
    }
    flanges.images = newImages;
}

// 4. Butt Weld Fittings
let buttweld = products.find(p => p.id === 'butt-weld-fittings');
if (buttweld) {
    let toRemove = [1, 6];
    let newImages = [];
    for (let i = 0; i < buttweld.images.length; i++) {
        if (!toRemove.includes(i + 1)) {
            newImages.push(buttweld.images[i]);
        }
    }
    buttweld.images = newImages;
}

// 5. Forged Fittings
let forged = products.find(p => p.id === 'forged-fittings');
if (forged) {
    let toRemove = [5];
    let newImages = [];
    for (let i = 0; i < forged.images.length; i++) {
        if (!toRemove.includes(i + 1)) {
            newImages.push(forged.images[i]);
        }
    }
    forged.images = newImages;
}

fs.writeFileSync(dataFile, JSON.stringify(products, null, 2), 'utf8');
console.log('Update complete.');
