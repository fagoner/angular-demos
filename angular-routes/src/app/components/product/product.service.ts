import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {


  private products: Product[];

  constructor() {
    this.products = [
      {id: '1-2121', name:'Nvidia Graphic Card'},
      {id: '2-1121', name:'PSP portable'},
      {id: '33-121', name:'AMD Ryzen 5'},
      {id: '44-121', name:'Intel i9'},
      {id: '55-121', name:'Case Corsair'},
      {id: '66-121', name:'RAM 16gb Corsair'},
    ];
  }

  getAll(): Product[] {
    return [...this.products]
  }

  getById(id: string): Product {
    return this.products.find(p => p.id === id);
  }

}
