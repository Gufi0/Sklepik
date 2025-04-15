import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    { name: 'Product 1', image: 'path/to/image1.jpg', price: 10 },
    { name: 'Product 2', image: 'path/to/image2.jpg', price: 20 },
    { name: 'Product 3', image: 'path/to/image3.jpg', price: 30 }
  ];

  onBuy(productName: string) {
    alert(`You bought ${productName}!`);
  }
}
