const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, 'src', 'data', 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

const imagesMap = {
  'angle': [
    '/ANGLES PICS/Alloy steel angle bar .png',
    '/ANGLES PICS/angles.jpg',
    '/ANGLES PICS/Carbon Steel Angle Bars .png',
    '/ANGLES PICS/channel.jpg',
    '/ANGLES PICS/Duplex Steel  Angle Bars .png',
    '/ANGLES PICS/Stainless Steel Angle Bars Gr 316.png',
    '/ANGLES PICS/Stainless Steel Angle Bars.png'
  ],
  'butt-weld-fittings': [
    '/BUTTWELD FITTINGS/buttweld fittingss.avif',
    '/BUTTWELD FITTINGS/CAPS.png',
    '/BUTTWELD FITTINGS/Carbon Steel Reducers.png',
    '/BUTTWELD FITTINGS/Carbon Steel teas.png',
    '/BUTTWELD FITTINGS/ChatGPT Image Feb 13, 2026, 06_38_15 PM.png',
    '/BUTTWELD FITTINGS/ChatGPT Image Feb 13, 2026, 06_38_48 PM.png',
    '/BUTTWELD FITTINGS/ChatGPT Image Feb 13, 2026, 06_42_03 PM.png',
    '/BUTTWELD FITTINGS/ChatGPT Image Feb 13, 2026, 06_42_32 PM.png',
    '/BUTTWELD FITTINGS/ChatGPT Image Feb 19, 2026, 04_12_03 PM.png',
    '/BUTTWELD FITTINGS/Elbows.png',
    '/BUTTWELD FITTINGS/Tees.png'
  ],
  'flanges': [
    '/FLANGES/1743147532250.png',
    '/FLANGES/Alloy Steel Flanges.png',
    '/FLANGES/ASTM A105 Carbon Steel Flanges.png',
    '/FLANGES/carbon-steel-A694-f52.jpg',
    '/FLANGES/cs flanges a694 f70.jpg',
    '/FLANGES/cs flanges\'.jpg',
    '/FLANGES/Cupper  Nickel Flanges.png',
    '/FLANGES/Duplex 2205 UNS S31803 Flanges.png',
    '/FLANGES/duplex-steel-flanges.jpg',
    '/FLANGES/flange packing 13-1806.jpg',
    '/FLANGES/Flange-Inside-Diameter-of-WNRF-flanges.jpg',
    '/FLANGES/Forged-Steel-Flange..jpg',
    '/FLANGES/industrial-flange-manufacturing-process-in-india.jpg',
    '/FLANGES/ss-304-flanges.jpg',
    '/FLANGES/ss-316-316l-flanges.jpg',
    '/FLANGES/Stainless Steel Flanges .png',
    '/FLANGES/Stainless Steel Flanges Gr.316.png',
    '/FLANGES/stainless-steel-slip-on-flanges.jpg',
    '/FLANGES/stainless-steel-spactical-blind-flanges.jpg'
  ],
  'forged-fittings': [
    '/FORGED FITTINGS  (1)/Carbon steel forged union.png',
    '/FORGED FITTINGS  (1)/Forged elbow fittings .png',
    '/FORGED FITTINGS  (1)/forged fiitngs pics.webp',
    '/FORGED FITTINGS  (1)/FORGED FITTINGS  (5).png',
    '/FORGED FITTINGS  (1)/Forged Fittings all.png',
    '/FORGED FITTINGS  (1)/Forged Nipples.png',
    '/FORGED FITTINGS  (1)/Forged Reducers .png',
    '/FORGED FITTINGS  (1)/Stainless steel coupliangs.png',
    '/FORGED FITTINGS  (1)/Stainless steel forged tee.png',
    '/FORGED FITTINGS  (1)/stainless-steel-forged-fittings.jpg'
  ],
  'pipes-and-tubes': [
    '/pipes/pipes/Aluminium pipes.png',
    '/pipes/pipes/API 5L PIPES.png',
    '/pipes/pipes/API-5L-X52-PSL2-Seamless-steel-pipe.jpg,,,,,,,,,,,,,.png',
    '/pipes/pipes/as pipe final.jpg',
    '/pipes/pipes/ASTM A335 P11.png',
    '/pipes/pipes/ASTTM A106 GR B CS PIPES.png',
    '/pipes/pipes/Carbon steel pipes and tubes.png',
    '/pipes/pipes/ChatGPT Image Feb 19, 2026, 12_25_06 PM.png',
    '/pipes/pipes/ChatGPT Image Jan 28, 2026, 04_00_13 PM.png',
    '/pipes/pipes/CS PIPES.jpg',
    '/pipes/pipes/CS SMLS PIPES.png',
    '/pipes/pipes/Inconel 625 pipes.png',
    '/pipes/pipes/Inconel Alloy pipes.png',
    '/pipes/pipes/Nickal Alloy heat exchanger tubes.png',
    '/pipes/pipes/ss 316 pipes.png',
    '/pipes/pipes/ss welded pipes.png',
    '/pipes/pipes/Super Duplex  U Tubes.png'
  ],
  'sheets-plates-coils': [
    '/SHEET PLATE COILS/316 SS PLATE.webp',
    '/SHEET PLATE COILS/316 TI SS PLATE.webp',
    '/SHEET PLATE COILS/347 SS PLATE.webp',
    '/SHEET PLATE COILS/A36 Carbon Steel Plate & Sheet .png',
    '/SHEET PLATE COILS/Aluminum coil Gr. 5083 &5052 .png',
    '/SHEET PLATE COILS/ALUMINYM COIL.jpg',
    '/SHEET PLATE COILS/Carbon & Mild Steel Coils .png',
    '/SHEET PLATE COILS/CS COIL.webp',
    '/SHEET PLATE COILS/Mirror Stainless Steel Plate .png',
    '/SHEET PLATE COILS/SS 316 COIL.webp',
    '/SHEET PLATE COILS/SS COIL.jpg',
    '/SHEET PLATE COILS/SS SHEET.webp',
    '/SHEET PLATE COILS/SS SHEET_LE_upscale_prime.jpg',
    '/SHEET PLATE COILS/Stainless Steel Chequered sheets.png',
    '/SHEET PLATE COILS/Stainless Steel Hot Rolled Coil .png',
    '/SHEET PLATE COILS/Stainless Steel Sheet Gr.304.png',
    '/SHEET PLATE COILS/Titanium steel plate GR1 GR2.png'
  ]
};

products.forEach(product => {
  if (imagesMap[product.id]) {
    product.images = imagesMap[product.id];
    product.image = imagesMap[product.id][0]; // Set the first image as the main image
  }
});

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('Updated products.json');
