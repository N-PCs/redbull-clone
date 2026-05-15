import original from "@/assets/can-original.png";
import watermelon from "@/assets/can-watermelon.png";
import dragonfruit from "@/assets/can-dragonfruit.png";
import sugarfree from "@/assets/can-sugarfree.png";
import tropical from "@/assets/can-tropical.png";
import blueberry from "@/assets/can-blueberry.png";
import pink from "@/assets/can-pink.png";
import coconut from "@/assets/can-coconut.png";
import peach from "@/assets/can-peach.png";
import curuba from "@/assets/can-curuba.png";
import apricot from "@/assets/can-apricot.png";
import juneberry from "@/assets/can-juneberry.png";

export type Flavor = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  bg: string;
  accent: string;
  image: string;
  /** true when the source PNG has a white (non-transparent) background */
  hasWhiteBg?: boolean;
};

export const flavors: Flavor[] = [
  {
    id: "original",
    title: "The Original",
    tagline: "Vitalizes Body & Mind.",
    description: "The classic energy formula trusted by athletes and dreamers worldwide.",
    bg: "linear-gradient(135deg, #001E5C 0%, #000B29 100%)",
    accent: "#FFCC00",
    image: original,
  },
  {
    id: "watermelon",
    title: "Watermelon",
    tagline: "The Red Edition.",
    description: "Sweet, juicy watermelon — wings with a burst of summer.",
    bg: "linear-gradient(135deg, #ED1B24 0%, #7A0D12 100%)",
    accent: "#FFCC00",
    image: watermelon,
    hasWhiteBg: true,
  },
  {
    id: "dragonfruit",
    title: "Dragon Fruit",
    tagline: "The Pink Edition.",
    description: "Exotic dragon fruit. Bold, electric, unforgettable.",
    bg: "linear-gradient(135deg, #E6007E 0%, #7A0040 100%)",
    accent: "#FFCC00",
    image: dragonfruit,
  },
  {
    id: "sugarfree",
    title: "Sugarfree",
    tagline: "Same Wings. Zero Sugar.",
    description: "All the energy you want, none of the sugar you don't.",
    bg: "linear-gradient(135deg, #2B6CB0 0%, #001E5C 100%)",
    accent: "#FFCC00",
    image: sugarfree,
  },
  {
    id: "tropical",
    title: "Tropical",
    tagline: "The Yellow Edition.",
    description: "A taste of tropical fruits. Sunshine in every sip.",
    bg: "linear-gradient(135deg, #FFCC00 0%, #B8860B 100%)",
    accent: "#000B29",
    image: tropical,
    hasWhiteBg: true,
  },
  {
    id: "blueberry",
    title: "Blueberry",
    tagline: "The Blue Edition.",
    description: "Wild blueberries meet electric energy.",
    bg: "linear-gradient(135deg, #1E40AF 0%, #0B1A4A 100%)",
    accent: "#FFCC00",
    image: blueberry,
  },
  {
    id: "pink",
    title: "Pink Edition",
    tagline: "White Peach Flavor.",
    description: "Velvety white peach with a sharp pink kick.",
    bg: "linear-gradient(135deg, #E6007E 0%, #6B0038 100%)",
    accent: "#FFCC00",
    image: pink,
    hasWhiteBg: true,
  },
  {
    id: "coconut",
    title: "Coconut Berry",
    tagline: "The White Edition.",
    description: "Creamy coconut meets bright wild berries.",
    bg: "linear-gradient(135deg, #E5E7EB 0%, #6B7280 100%)",
    accent: "#ED1B24",
    image: coconut,
  },
  {
    id: "peach",
    title: "Peach Nectarine",
    tagline: "The Apricot Edition.",
    description: "Juicy peach and ripe nectarine. Sun-soaked energy.",
    bg: "linear-gradient(135deg, #FB923C 0%, #9A3412 100%)",
    accent: "#FFCC00",
    image: peach,
  },
  {
    id: "curuba",
    title: "Curuba Elderflower",
    tagline: "The Green Edition.",
    description: "Tropical curuba and floral elderflower — cool and crisp.",
    bg: "linear-gradient(135deg, #84CC16 0%, #365314 100%)",
    accent: "#FFCC00",
    image: curuba,
  },
  {
    id: "apricot",
    title: "Apricot Strawberry",
    tagline: "The Coral Edition.",
    description: "Soft apricot meets ripe strawberry. Pure summer.",
    bg: "linear-gradient(135deg, #FB7185 0%, #881337 100%)",
    accent: "#FFCC00",
    image: apricot,
  },
  {
    id: "juneberry",
    title: "Juneberry",
    tagline: "The Purple Edition.",
    description: "Wild juneberries with a deep, electric finish.",
    bg: "linear-gradient(135deg, #7C3AED 0%, #2E1065 100%)",
    accent: "#FFCC00",
    image: juneberry,
  },
];
