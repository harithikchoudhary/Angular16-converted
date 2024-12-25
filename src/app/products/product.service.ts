import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 10, imageUrl: '' },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 20, imageUrl: '' },
    { id: 3, name: 'Product 3', description: 'Description 3', price: 30, imageUrl: '' }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  addToCart(product: Product): void {
    console.log('Product added to cart:', product);
  }
}