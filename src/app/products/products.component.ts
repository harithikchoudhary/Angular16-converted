import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  searchText: string = '';
  sortBy: string = 'name';
  reverse: boolean = false;
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  searchProducts(): Product[] {
    return this.products.filter(product => 
      product.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      product.description.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  sortProducts(criteria: string): void {
    if (this.sortBy === criteria) {
      this.reverse = !this.reverse;
    } else {
      this.sortBy = criteria;
      this.reverse = false;
    }
  }

  addToCart(product: Product): void {
    this.productService.addToCart(product);
  }
}