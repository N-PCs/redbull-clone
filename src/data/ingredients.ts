export type IngredientCallout = {
  id: string;
  name: string;
  benefit: string;
  extra?: string;
  arrowColor: string;
  position: "top-left" | "mid-left" | "top-right" | "mid-right" | "bottom-right";
};

export const ingredientCallouts: IngredientCallout[] = [
  {
    id: "caffeine",
    name: "Caffeine",
    benefit: "Primary benefit: Supports mental performance & focus.",
    arrowColor: "#ED1B24",
    position: "top-left",
  },
  {
    id: "taurine",
    name: "Taurine",
    benefit: "Primary benefit: Involved in natural metabolic processes.",
    arrowColor: "#FFCC00",
    position: "mid-left",
  },
  {
    id: "water",
    name: "Water",
    benefit: "Primary benefit: Base component for consistency & taste.",
    arrowColor: "#4A9FD4",
    position: "top-right",
  },
  {
    id: "b-vitamins",
    name: "B-Group Vitamins",
    benefit: "Primary benefit: Supports energy-yielding metabolism.",
    extra: "Includes Niacin, B2, B6, B12",
    arrowColor: "#FFCC00",
    position: "mid-right",
  },
  {
    id: "sugars",
    name: "Sugars",
    benefit: "Primary benefit: Provides a source of energy.",
    arrowColor: "#00A859",
    position: "bottom-right",
  },
];

export type ComparisonItem = { label: string; value: string; highlight?: boolean };

export type IngredientSection = {
  id: string;
  title: string;
  paragraphs: string[];
  didYouKnow?: { title: string; body: string };
  comparison?: {
    centerLabel: string;
    centerValue: string;
    centerSub: string;
    items: ComparisonItem[];
    source: string;
  };
};

export const ingredientSections: IngredientSection[] = [
  {
    id: "caffeine",
    title: "Caffeine",
    paragraphs: [
      "One of caffeine's primary actions in the human body is its stimulating effect on cognitive functions.",
      "Each 250 ml can of Red Bull Energy Drink contains 75 mg of caffeine. Caffeine helps to improve concentration and increase alertness.",
    ],
    didYouKnow: {
      title: "Did you know?",
      body: "One of caffeine’s primary actions in the human body is its stimulating effect on cognitive functions.Each 250 ml can of Red Bull Energy Drink contains 75 mg of caffeine. Caffeine helps to improve concentration and increase alertness.",
    },
    comparison: {
      centerLabel: "Red Bull Energy Drink",
      centerValue: "75 mg",
      centerSub: "per 250 ml",
      items: [
        { label: "Filter Coffee", value: "~113 mg\nper 250 ml" },
        { label: "Black Tea", value: "~57 mg\nper 250 ml" },
        { label: "Instant Coffee", value: "79 mg\nper 250 ml" },
        { label: "Cola", value: "~28 mg\nper 250 ml" },
      ],
      source: "Source: IFIC (2008 & 2015), EFSA (2015)",
    },
  },
  {
    id: "taurine",
    title: "Taurine",
    paragraphs: [
      "Red Bull Energy Drink contains 1000 mg taurine per serving (250 ml). Taurine is an amino acid, naturally occurring in the human body and present in the daily diet.",
      "It is involved in a wide range of biological processes including osmoregulation, which is the regulation of the body's cellular water and electrolytic balance.",
      "Taurine is one of the most abundant amino acids in the brain, heart and muscles.",
    ],
    didYouKnow: {
      title: "Did you know?",
      body: "The human body (70 kg) naturally contains 70 times more taurine than one 250 ml can of Red Bull Energy Drink.",
    },
    comparison: {
      centerLabel: "Red Bull Energy Drink",
      centerValue: "1 can",
      centerSub: "250 ml",
      items: [{ label: "Human Body of 70 kg", value: "70 times more\nthan one 250 ml can", highlight: true }],
      source: "Source: IFIC (2008 & 2015), EFSA (2015)",
    },
  },
  {
    id: "b-vitamins",
    title: "B-group vitamins",
    paragraphs: [
      "Vitamins are essential micronutrients that are required for maintaining normal body functions.",
      "There are two types of vitamins: fat-soluble and water-soluble. Red Bull Energy Drink contains water-soluble vitamins. Water-soluble vitamins do not get stored as much as fat-soluble vitamins in the body. Instead, they circulate in the blood, and whatever the body does not use is excreted. Red Bull contains the water-soluble B-group vitamins niacin (vitamin B3; 6 mg per serving - 250 ml), vitamin B2 (0.5 mg per serving - 250 ml) vitamin B6 (1 mg per serving - 250 ml) and vitamin B12 (0.5 μg per serving - 250 ml).",
      "These B-group vitamins (niacin, B2, B6, B12) contribute to normal energy-yielding metabolism, such as the build-up and break-down of carbohydrates and proteins, and contribute to the reduction of tiredness and fatigue.",
      "Moreover, B-group vitamins play a central role in the brain. Niacin, vitamin B6 and vitamin B12 contribute to the normal functioning of the nervous system.",
    ],
  },
  {
    id: "sugars",
    title: "Sugars",
    paragraphs: [
      "One serving – 250 ml can – of Red Bull Energy Drink contains 27 g of sugars.",
      "There is also Red Bull without sugars: Red Bull Sugarfree.",
    ],
    didYouKnow: {
      title: "Did you know?",
      body: "The amount of sugars in Red Bull Energy Drink is comparable to the sugar level in an equivalent volume of ordinary apple or orange juice.",
    },
    comparison: {
      centerLabel: "Red Bull Energy Drink",
      centerValue: "27 g",
      centerSub: "per 250 ml",
      items: [
        { label: "Grape Juice", value: "30–45 g\nper 250 ml" },
        { label: "Orange Juice", value: "15–27 g\nper 250 ml" },
        { label: "Soft Drinks", value: "25–30 g\nper 250 ml" },
        { label: "Apple Juice", value: "17–25 g\nper 250 ml" },
      ],
      source: "Source: IFIC (2008 & 2015), EFSA (2015)",
    },
  },
  {
    id: "water",
    title: "Water",
    paragraphs: [
      "Water is a main ingredient of Red Bull Energy Drink. Dedication to its quality contributes to the iconic taste in every sip.",
    ],
  },
];
