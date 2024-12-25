import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, Review } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'api/products';

  constructor(private http: HttpClient) {}

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  addToCart(product: Product, quantity: number): void {
    // Implement add to cart functionality
  }

  addReview(productId: string, review: { rating: number, comment: string }): Observable<Review> {
    return this.http.post<Review>(`${this.baseUrl}/${productId}/reviews`, review);
  }
}
