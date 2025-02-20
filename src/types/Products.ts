export interface Product {
    id: number; // Ensure it's a number
    title: string;
    description: string;
    price: number;
    thumbnail: string;
    images: string[];
    rating: number;
    category: string;
  }