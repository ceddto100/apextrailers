export interface Book {
  id: number;
  slug: string;
  title: string;
  genre: string;
  tagline: string;
  description: string;
  pages: number;
  price: string;
  buyUrl: string;
  youtubeId: string;
  ebookEmbedUrl: string;
  gradient: string;
  accentHex: string;
}

export const BOOKS: Book[] = [
  {
    id: 1,
    slug: 'ai-economy-playbook',
    title: 'The AI Economy Playbook',
    genre: 'Business & AI',
    tagline: "The roles that didn't exist 5 years ago — and how to own them.",
    description: 'A deep dive into the emerging careers, tools, and strategies defining the AI-powered economy. Written for builders who refuse to be left behind. Covers prompt engineering careers, AI product management, automation consulting, and the new class of hybrid roles only possible with LLMs.',
    pages: 180,
    price: '$12.99',
    buyUrl: '#',
    youtubeId: 'AP30SX4fi1M',
    ebookEmbedUrl: 'https://elevenreader.io/audiobooks/the-human-in-the-loop-ai-rewiewer/qVyr7CdQ5tLiqGgBnkIh',
    gradient: 'linear-gradient(135deg, #0A1628 0%, #1E3A5F 50%, #2D5A8E 100%)',
    accentHex: '#4A9EDB',
  },
  {
    id: 2,
    slug: 'architect-of-tomorrow',
    title: 'The Architect of Tomorrow',
    genre: 'Self-Development',
    tagline: 'The blueprint for the life you keep postponing.',
    description: 'A razor-sharp guide to closing the gap between who you are and who you need to be. No filler, no fluff — just hard truths, identity frameworks, and actionable systems that compound over time.',
    pages: 156,
    price: '$9.99',
    buyUrl: '#',
    youtubeId: '',
    ebookEmbedUrl: '',
    gradient: 'linear-gradient(135deg, #2C1810 0%, #8B5E3C 50%, #C8A96E 100%)',
    accentHex: '#C8A96E',
  },
  {
    id: 3,
    slug: 'patterns-of-power',
    title: 'Patterns of Power',
    genre: 'Psychology',
    tagline: 'The Fibonacci sequence runs through your decisions. Here\'s why.',
    description: 'An unexpected tour through mathematics, psychology, and human behavior — revealing the hidden patterns that govern our choices, relationships, and outcomes. Part science, part philosophy, entirely practical.',
    pages: 204,
    price: '$8.99',
    buyUrl: '#',
    youtubeId: '',
    ebookEmbedUrl: '',
    gradient: 'linear-gradient(135deg, #1A0A2E 0%, #4B1A7A 50%, #7B2FBE 100%)',
    accentHex: '#9B59B6',
  },
  {
    id: 4,
    slug: 'self-sabotage-decoded',
    title: 'Self-Sabotage Decoded',
    genre: 'Psychology',
    tagline: "You're the only thing standing in your way.",
    description: 'An unflinching examination of the unconscious behaviors that destroy momentum — avoidance, perfectionism, self-handicapping, imposter spirals — and the exact cognitive rewiring methods to eliminate them permanently.',
    pages: 168,
    price: '$7.99',
    buyUrl: '#',
    youtubeId: '',
    ebookEmbedUrl: '',
    gradient: 'linear-gradient(135deg, #1A0808 0%, #6B1A1A 50%, #C0392B 100%)',
    accentHex: '#E74C3C',
  },
  {
    id: 5,
    slug: 'daily-wins',
    title: 'Daily Wins',
    genre: 'Self-Development',
    tagline: 'Freedom is built one deliberate day at a time.',
    description: 'A minimalist operating system for compounding small victories into total life transformation. Anti-hustle, pro-results. The system that removes the need for motivation by engineering your environment.',
    pages: 120,
    price: '$6.99',
    buyUrl: '#',
    youtubeId: '',
    ebookEmbedUrl: '',
    gradient: 'linear-gradient(135deg, #0A1A0A 0%, #1A4A1A 50%, #27AE60 100%)',
    accentHex: '#27AE60',
  },
  {
    id: 6,
    slug: 'memory-and-identity',
    title: 'Memory & Identity',
    genre: 'Psychology',
    tagline: 'What you remember shapes who you become.',
    description: 'Cutting-edge research on episodic memory, narrative identity, and gender differences in recall — distilled into a framework for understanding why you are who you are, and how to deliberately reshape that story.',
    pages: 192,
    price: '$9.99',
    buyUrl: '#',
    youtubeId: '',
    ebookEmbedUrl: '',
    gradient: 'linear-gradient(135deg, #1A1A08 0%, #4A4A1A 50%, #D4AC0D 100%)',
    accentHex: '#F1C40F',
  },
];
