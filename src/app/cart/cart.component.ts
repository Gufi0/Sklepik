import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/CartService';
import { IProduct } from '../Interface/IProduct';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: IProduct[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }
}
