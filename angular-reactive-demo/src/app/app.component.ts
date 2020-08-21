import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from './products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-reactive-demo';

  _products: string[];
  productName = '';
  private productsSubscription: Subscription;

  constructor(public productsService: ProductsService) {}

  ngOnInit() {
    this._products = this.productsService.getProducts();
    this.productsSubscription = this.productsService.productsUpdated.subscribe(
      () => {
        this._products = this.productsService.getProducts();
      }
    );
  }

  addProduct(f) {
    if (f.valid) {
      this.productsService.addProduct(f.value.productName);
      f.reset();
    }
  }

  deleteProduct(productName) {
    this.productsService.deleteProduct(productName);
  }

  ngOnDestroy() {
    this.productsSubscription.unsubscribe();
  }
}
