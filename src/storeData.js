import pack1 from "/src/storeImages/pack1.webp";
import pack2 from "/src/storeImages/pack2.jpg.webp";
import pack3 from "/src/storeImages/pack3.jpg";
import pack4 from "/src/storeImages/pack4.jpg.webp";
import pack5 from "/src/storeImages/pack5.jpg.webp";
import pack6 from "/src/storeImages/pack6.jpg";
import pack7 from "/src/storeImages/pack7.jpg";
import pack8 from "/src/storeImages/pack8.png";
import pack9 from "/src/storeImages/pack9.jpg";
import pack10 from "/src/storeImages/pack10.jpg";

const generatePack = (id, packName, price, packImage) => ({ id, packName, price, packImage });

const packNames = [
  "Gen 1 pack", "Gen 2 pack", "Gen 3 pack", "Gen 4 pack", "Gen 5 pack",
  "Gen 6 pack", "Gen 7 pack", "Gen 8 pack", "Gen 9 pack", "Legendary pack"
];

const packImagePaths = [
  pack1, pack2, pack3, pack4, pack5, pack6, pack7, pack8, pack9, pack10
];

const basePrice = 75;
const legendaryPackPrice = 100;

export const packs = packNames.map((packName, index) => 
  generatePack(index + 1, packName, index === 9 ? legendaryPackPrice : basePrice, packImagePaths[index])
);



