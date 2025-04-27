import { Injectable } from '@angular/core';
import { IProduct } from '../Interface/IProduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: IProduct[] = [];

  addToCart(product: IProduct): void {
    this.cart.push(product);
  }

    getCart(): IProduct[] {
    return this.cart;
  }

  removeFromCart(product: IProduct): void {
    const index = this.cart.indexOf(product);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }

  clearCart(): void {
    this.cart = [];
  }
}
