import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForOf } from '@angular/common';
import { CartService } from '../../Services/CartService'; // Import serwisu
import { IProduct } from '../../Interface/IProduct'; // Import interfejsu


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Output() cartUpdated = new EventEmitter<IProduct[]>();
  products: IProduct[] = [];
  cart: IProduct[] = []; // Koszyk


  constructor(private http: HttpClient, private cartService: CartService) {} //

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.http.get<IProduct[]>('http://localhost:3000/products').subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  addToCart(product: IProduct): void {
    this.cart.push(product); // Dodanie produktu do koszyka
    this.cartUpdated.emit(this.cart); // Emitowanie zdarzenia
  }

  // onBuy(product:IProduct): void {
  //   this.cartService.addToCart(product); // Użycie serwisu
  //   this.cartUpdated.emit(this.cartService.getCart()); // Emitowanie zdarzenia
  // }
}
