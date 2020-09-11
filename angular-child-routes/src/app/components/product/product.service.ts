import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[];

  constructor() {
    this.products = [
      {
        id: '1-1212121',
        name: 'Atari Box',
        overview:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt amet assumenda iusto! Quidem alias dolore, ea quaerat aliquam voluptatibus repellat architecto magnam labore cum provident consequatur eius. Impedit, mollitia error!',
        specs:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quasi vel labore voluptatibus et nihil dolor explicabo perferendis sunt eius? Neque ut velit quod porro non rerum earum voluptatum aut.',
      },
      {
        id: '2-112',
        name: 'PSP portable',
        overview:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt amet assumenda iusto! Quidem alias dolore, ea quaerat aliquam voluptatibus repellat architecto magnam labore cum provident consequatur eius. Impedit, mollitia error!',
        specs:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quasi vel labore voluptatibus et nihil dolor explicabo perferendis sunt eius? Neque ut velit quod porro non rerum earum voluptatum aut.',
      },
      {
        id: '3x-1212',
        name: 'Nintendo Switch',
        overview:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt amet assumenda iusto! Quidem alias dolore, ea quaerat aliquam voluptatibus repellat architecto magnam labore cum provident consequatur eius. Impedit, mollitia error!',
        specs:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quasi vel labore voluptatibus et nihil dolor explicabo perferendis sunt eius? Neque ut velit quod porro non rerum earum voluptatum aut.',
      },
    ];
  }

  findAll(): Product[] {
    return [...this.products];
  }
  findById(id: string): Product {
    return this.products.find(p => p.id === id);
  }
}
