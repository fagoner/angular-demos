import { Subject } from 'rxjs';

export class ProductsService {
  private products = ['Book', 'Tree'];
  productsUpdated = new Subject();

  getProducts(): string[] {
    return [...this.products];
  }

  addProduct(productName: string) {
    this.products.push(productName);
    this.productsUpdated.next();
  }

  deleteProduct(productName: string) {
    this.products = this.products.filter((p) => p !== productName);
    this.productsUpdated.next();
  }
}
