import booksJson from './books.json';

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
  ctaLabel: string;
  cloudinaryUrl: string;
  thumbnailUrl: string;
  coverImageUrl: string;
  gradient: string;
  accentHex: string;
}

export const BOOKS: Book[] = booksJson as Book[];
