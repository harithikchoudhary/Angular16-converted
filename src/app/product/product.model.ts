export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  specifications: { [key: string]: string };
  reviews: Review[];
}

export interface Review {
  userName: string;
  rating: number;
  comment: string;
  date: string;
}
