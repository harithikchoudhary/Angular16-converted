import { Review } from './review.model';

export interface Product {
  id: string;
  name: string;
  description: string;
  reviews?: Review[];
}
