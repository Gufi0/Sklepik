// src/app/products/product-list/product-list.component.ts
import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    { name: 'Bread', price: 15,image:'public/zdj.jpg' },
    { name: 'Butter', price: 20,image:'public/zdj.jpg' },
    { name: 'Sausages', price: 35,image:'public/zdj.jpg' },
    { name: 'Eggs', price: 10, image:'public/zdj.jpg' },
    { name: 'Pork', price: 150, image:'public/zdj.jpg' },
    { name: 'Mutton', price: 200, image:'public/zdj.jpg' },
    { name: 'Beef', price: 175,image:'public/zdj.jpg' },
    { name: 'Sushi', price: 500, image:'public/zdj.jpg' },
    { name: 'Pizza', price: 60, image:'public/zdj.jpg' },
    { name: 'Water', price: 5, image:'public/zdj.jpg' },
    { name: 'Redbull', price: 11, image:'public/zdj.jpg' },
    { name: 'Beer', price: 25, image:'public/zdj.jpg' },
    { name: 'Vodka', price: 50, image:'public/zdj.jpg' },
    { name: 'Whisky', price: 140, image:'public/zdj.jpg' },
  ];

  onBuy(productName: string) {
    console.log(`${productName} was bought!`);
  }
}
