import pack1 from "/src/assets/storeImages/pack1.webp";
import pack2 from "/src/assets/storeImages/pack2.jpg.webp";
import pack3 from "/src/assets/storeImages/pack3.jpg";
import pack4 from "/src/assets/storeImages/pack4.jpg.webp";
import pack5 from "/src/assets/storeImages/pack5.jpg.webp";
import pack6 from "/src/assets/storeImages/pack6.jpg";
import pack7 from "/src/assets/storeImages/pack7.jpg";
import pack8 from "/src/assets/storeImages/pack8.png";
import pack9 from "/src/assets/storeImages/pack9.jpg";
import pack10 from "/src/assets/storeImages/pack10.jpg";

/* Function to generate a pack object */
const generatePack = (id, packName, price, packImage) => ({ id, packName, price, packImage });

/* Array of pack names */
const packNames = [
  "Gen 1 pack", "Gen 2 pack", "Gen 3 pack", "Gen 4 pack", "Gen 5 pack",
  "Gen 6 pack", "Gen 7 pack", "Gen 8 pack", "Gen 9 pack", "Legendary pack"
];

/* Array of pack image paths */
const packImagePaths = [
  pack1, pack2, pack3, pack4, pack5, pack6, pack7, pack8, pack9, pack10
];

/* Base and legendary pack prices */
const basePrice = 75;
const legendaryPackPrice = 100;

/* Object defining generation ranges */
export const generationRanges = {
  1: { start: 1, end: 151 },
  2: { start: 152, end: 251 },
  3: { start: 252, end: 386 },
  4: { start: 387, end: 495 },
  5: { start: 496, end: 649 },
  6: { start: 650, end: 721 },
  7: { start: 722, end: 809 },
  8: { start: 810, end: 905 },
  9: { start: 906, end: 1017 },
  10: { start: 1, end: 1017 },
};

/* Array of legendary Pokémon IDs */
export const LegandaryPokemon = [144, 145, 146, 150, 151, 243, 244, 245, 249, 250, 
  251, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 479, 480, 
  481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 
  638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 716, 
  717, 718, 719, 720, 721, 772, 773, 785, 786, 787, 788, 789, 790, 
  791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 
  804, 805, 806, 807, 808, 809, 888, 889, 890, 891, 892, 893, 894, 
  895, 896, 897, 898, 905, 998, 1000, 1001, 1002, 1003, 1004, 1007, 
  1008, 1009, 1010, 1014, 1016, 1017];

/* Array of icons */
export const icons = [
  "fighting",
  "psychic",
  "poison",
  "dragon",
  "ghost",
  "dark",
  "ground",
  "fire",
  "fairy",
  "water",
  "flying",
  "normal",
  "rock",
  "electric",
  "bug",
  "grass",
  "ice",
  "steel",
];

/* Array of packs */
export const packs = packNames.map((packName, index) => 
  generatePack(index + 1, packName, index === 9 ? legendaryPackPrice : basePrice, packImagePaths[index])
);
