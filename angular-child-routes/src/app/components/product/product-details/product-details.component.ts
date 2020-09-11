import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../product.service';
import { Product } from "../product";
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  private routeSub: Subscription;
  id: string;
  product: Product
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.routeSub = this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.product = this.productService.findById(this.id);


    });
  }

  ngOnInit(): void {}
}
