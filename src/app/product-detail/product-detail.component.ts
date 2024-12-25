import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { Review } from '../models/review.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  quantity: number = 1;
  newReview: Review = {
    rating: 5,
    comment: ''
  };

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(productId).subscribe(product => this.product = product);
  }

  addToCart(product: Product, quantity: number): void {
    console.log('Adding to cart:', product, 'Quantity:', quantity);
  }

  addReview(): void {
    const review: Review = { ...this.newReview, date: new Date(), userName: 'Anonymous' };
    if (!this.product.reviews) {
      this.product.reviews = [];
    }
    this.product.reviews.unshift(review);
    this.newReview = { rating: 5, comment: '' };
    this.productService.addReview(this.product.id, review).subscribe(
      () => console.log('Review added successfully'),
      error => console.error('Error adding review:', error)
    );
  }
}
