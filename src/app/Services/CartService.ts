import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];

  getCart(): any[] {
    return this.cart;
  }

  addToCart(product: any): void {
    this.cart.push(product);
  }
}
