import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;
  quantity: number = 1;
  newReview: { rating: number, comment: string } = { rating: 5, comment: '' };

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(productId).subscribe(product => this.product = product);
  }

  addToCart(product: Product, quantity: number): void {
    this.productService.addToCart(product, quantity);
  }

  addReview(): void {
    this.productService.addReview(this.product.id, this.newReview).subscribe(review => {
      this.product.reviews.push(review);
      this.newReview = { rating: 5, comment: '' };
    });
  }
}
