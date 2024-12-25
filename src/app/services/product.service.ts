import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Product 1', price: 99.99, description: 'Description 1' },
    { id: 2, name: 'Product 2', price: 149.99, description: 'Description 2' },
    { id: 3, name: 'Product 3', price: 199.99, description: 'Description 3' }
  ];

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return of(this.products).pipe(
      catchError(this.handleError<Product[]>('getAll', []))
    );
  }

  getById(id: number): Observable<Product> {
    const product = this.products.find(p => p.id === id);
    return of(product).pipe(
      catchError(this.handleError<Product>('getById'))
    );
  }

  create(product: Product): Observable<Product> {
    this.products.push(product);
    return of(product).pipe(
      catchError(this.handleError<Product>('create'))
    );
  }

  update(id: number, product: Product): Observable<Product> {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products[index] = product;
    }
    return of(product).pipe(
      catchError(this.handleError<Product>('update'))
    );
  }

  remove(id: number): Observable<{ success: boolean }> {
    this.products = this.products.filter(p => p.id !== id);
    return of({ success: true }).pipe(
      catchError(this.handleError<{ success: boolean }>('remove'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
