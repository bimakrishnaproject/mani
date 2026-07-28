export interface ProductItem {
  slug: string;
  name: string;
  role: string; // Foundation, Action, Calm, Reinforcement, Daily Practice
  price: number;
  format: "Physical" | "Digital" | "Set";
  description: string;
  helpsWith: string[];
  mockupImage: string;
}

export interface CollectionItem {
  slug: string;
  title: string;
  status: "Available" | "Coming Soon";
  positioning: string;
  bundlePrice?: number;
  products: ProductItem[];
}

export const BYE_BYE_NARCISSIST_PRODUCTS: ProductItem[] = [
  {
    slug: "bye-bye-narcissist-book",
    name: "Bye Bye Narcissist — Book",
    role: "Foundation",
    price: 24.99,
    format: "Physical",
    description: "Deep understanding of narcissistic patterns, emotional manipulation, and cognitive dissonance.",
    helpsWith: [
      "Identifying covert & overt narcissistic behavior",
      "Breaking free from gaslighting loops",
      "Rebuilding internal clarity and perspective",
    ],
    mockupImage: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Book.png",
  },
  {
    slug: "bye-bye-narcissist-workbook",
    name: "Bye Bye Narcissist — Workbook",
    role: "Action",
    price: 29.99,
    format: "Physical",
    description: "Practical exercises, reflective writing prompts, and action steps for emotional recovery.",
    helpsWith: [
      "Establishing non-negotiable boundaries",
      "Processing complex relational grief",
      "Creating personalized recovery action plans",
    ],
    mockupImage: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Workbook.png",
  },
  {
    slug: "bye-bye-narcissist-journal",
    name: "Bye Bye Narcissist — Colouring Book & Journal",
    role: "Calm",
    price: 14.99,
    format: "Physical",
    description: "Somatic grounding, therapeutic creative processing, and mindful journaling for nervous system regulation.",
    helpsWith: [
      "Calming hypervigilance and anxiety response",
      "Creative emotional processing",
      "Daily self-compassion practices",
    ],
    mockupImage: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Coloring Book.png",
  },
  {
    slug: "bye-bye-narcissist-poster-set",
    name: "Bye Bye Narcissist — Poster Set",
    role: "Reinforcement",
    price: 29.99,
    format: "Physical",
    description: "Visual daily boundary affirmations and cognitive reminders designed for your physical living space.",
    helpsWith: [
      "Daily subconscious boundary reinforcement",
      "Visual anchoring in safe environments",
    ],
    mockupImage: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Collection/Book Trio.png",
  },
  {
    slug: "bye-bye-narcissist-card-deck",
    name: "Bye Bye Narcissist — Affirmation Card Deck",
    role: "Daily Practice",
    price: 19.99,
    format: "Physical",
    description: "Micro-actions, daily truth reminders, and self-trust rituals in a portable card deck format.",
    helpsWith: [
      "Daily morning boundary intentions",
      "Immediate grounding during emotional triggers",
    ],
    mockupImage: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Collection/Collection.png",
  },
];

export const FUTURE_COLLECTIONS = [
  { title: "Love Done Right", status: "Coming Soon" },
  { title: "Emotional Intelligence", status: "Coming Soon" },
  { title: "Boundaries That Stick", status: "In Development" },
  { title: "Purpose Starts Here", status: "In Development" },
  { title: "Beyond the Anxiety", status: "In Development" },
  { title: "Running on Empty", status: "In Development" },
  { title: "Meeting Your Shadow", status: "In Development" },
  { title: "Healing Your Inner Child", status: "In Development" },
  { title: "Stop Self Sabotage", status: "In Development" },
  { title: "Own Your Worth", status: "In Development" },
  { title: "When Panic Hits", status: "In Development" },
];
