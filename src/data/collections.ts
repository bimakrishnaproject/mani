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
    name: "The Bye Bye Narcissist Book",
    role: "Foundation",
    price: 24.99,
    format: "Physical",
    description: "Understand manipulation, gaslighting, and unhealthy patterns.",
    helpsWith: [
      "Identifying covert & overt narcissistic behavior",
      "Breaking free from gaslighting loops",
      "Rebuilding internal clarity and perspective",
    ],
    mockupImage: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Book.png",
  },
  {
    slug: "bye-bye-narcissist-workbook",
    name: "The Bye Bye Narcissist Workbook",
    role: "Action",
    price: 29.99,
    format: "Physical",
    description: "Turn insight into practical change.",
    helpsWith: [
      "Establishing non-negotiable boundaries",
      "Processing complex relational grief",
      "Creating personalized recovery action plans",
    ],
    mockupImage: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Workbook.png",
  },
  {
    slug: "bye-bye-narcissist-journal",
    name: "The Bye Bye Narcissist Coloring Book & Journal",
    role: "Calm",
    price: 14.99,
    format: "Physical",
    description: "Slow down, process emotions, and reconnect with yourself.",
    helpsWith: [
      "Calming hypervigilance and anxiety response",
      "Creative emotional processing",
      "Daily self-compassion practices",
    ],
    mockupImage: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Coloring Book.png",
  },
  {
    slug: "bye-bye-narcissist-poster-set",
    name: "Bye Bye Narcissist Poster Collection",
    role: "Reinforcement",
    price: 29.99,
    format: "Physical",
    description: "Daily reminders that strengthen boundaries and self-worth.",
    helpsWith: [
      "Daily subconscious boundary reinforcement",
      "Visual anchoring in safe environments",
    ],
    mockupImage: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Collection/Book Trio.png",
  },
  {
    slug: "bye-bye-narcissist-card-deck",
    name: "Bye Bye Narcissist Card Deck",
    role: "Daily Practice",
    price: 19.99,
    format: "Physical",
    description: "Build confidence and trust in yourself one day at a time.",
    helpsWith: [
      "Daily morning boundary intentions",
      "Immediate grounding during emotional triggers",
    ],
    mockupImage: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Collection/Collection.png",
  },
];

export const EMOTIONAL_INTELLIGENCE_PRODUCTS: ProductItem[] = [
  {
    slug: "emotional-intelligence-book",
    name: "Emotional Intelligence Book",
    role: "Foundation",
    price: 24.99,
    format: "Physical",
    description: "Master emotional self-regulation, deep self-awareness, and high-EQ interpersonal communication skills.",
    helpsWith: [
      "Understanding emotional triggers and responses",
      "Developing empathetic listening skills",
      "Building calm self-regulation under pressure",
    ],
    mockupImage: "/assets/Product Collections/Product Mockups/Emotional Intelligence Collection/Emotional Intelligence Book.png",
  },
  {
    slug: "emotional-intelligence-workbook",
    name: "Emotional Intelligence Workbook",
    role: "Action",
    price: 29.99,
    format: "Physical",
    description: "Practical EQ exercises, conflict resolution templates, and emotional audits for everyday interactions.",
    helpsWith: [
      "Navigating difficult conversations with clarity",
      "Replacing knee-jerk reactions with intentional responses",
      "Strengthening emotional boundaries",
    ],
    mockupImage: "/assets/Product Collections/Product Mockups/Emotional Intelligence Collection/Workbook.png",
  },
  {
    slug: "emotional-intelligence-system",
    name: "Emotional Intelligence Collection System",
    role: "Set",
    price: 69.99,
    format: "Set",
    description: "The complete Emotional Intelligence physical system featuring the Book, Workbook, and Poster set.",
    helpsWith: [
      "Comprehensive EQ mastery and daily habit integration",
    ],
    mockupImage: "/assets/Product Collections/Product Mockups/Emotional Intelligence Collection/Book Trio.png",
  },
];

export const LOVE_DONE_RIGHT_PRODUCTS: ProductItem[] = [
  {
    slug: "love-done-right-book",
    name: "Love Done Right Book",
    role: "Foundation",
    price: 24.99,
    format: "Physical",
    description: "Deconstruct anxious and avoidant attachment patterns to build healthy, secure romantic partnerships.",
    helpsWith: [
      "Recognizing healthy vs toxic relationship dynamics",
      "Breaking repetitive heartbreak cycles",
      "Cultivating secure attachment and emotional safety",
    ],
    mockupImage: "/assets/Product Collections/Product Mockups/Love Done Right Collection/Book.png",
  },
  {
    slug: "love-done-right-workbook",
    name: "Love Done Right Workbook",
    role: "Action",
    price: 29.99,
    format: "Physical",
    description: "Relationship audit exercises, vulnerability prompts, and communication frameworks for couples and singles.",
    helpsWith: [
      "Communicating core relationship needs without anxiety",
      "Healing relational trust wounds",
      "Setting loving relational boundaries",
    ],
    mockupImage: "/assets/Product Collections/Product Mockups/Love Done Right Collection/Workbook.png",
  },
  {
    slug: "love-done-right-journal",
    name: "Love Done Right Coloring Book & Journal",
    role: "Calm",
    price: 14.99,
    format: "Physical",
    description: "Somatic reflection prompts and calming art exercises designed to soothe relationship anxiety.",
    helpsWith: [
      "Calming relationship panic & overthinking",
      "Daily self-love and self-soothing rituals",
    ],
    mockupImage: "/assets/Product Collections/Product Mockups/Love Done Right Collection/Coloring Book.png",
  },
];

export const ALL_COLLECTIONS: CollectionItem[] = [
  {
    slug: "bye-bye-narcissist",
    title: "Bye Bye Narcissist",
    status: "Available",
    positioning: "Recovery from covert manipulation, gaslighting, and toxic dynamics.",
    bundlePrice: 119.99,
    products: BYE_BYE_NARCISSIST_PRODUCTS,
  },
  {
    slug: "emotional-intelligence",
    title: "Emotional Intelligence",
    status: "Available",
    positioning: "Master emotional self-regulation and develop high-EQ communication skills.",
    bundlePrice: 69.99,
    products: EMOTIONAL_INTELLIGENCE_PRODUCTS,
  },
  {
    slug: "love-done-right",
    title: "Love Done Right",
    status: "Available",
    positioning: "Build healthy partnership patterns and understand attachment dynamics.",
    bundlePrice: 59.99,
    products: LOVE_DONE_RIGHT_PRODUCTS,
  },
];

export const FUTURE_COLLECTIONS = [
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
