import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForOf } from '@angular/common';
import { CartService } from '../../Services/CartService'; // Import serwisu

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Output() cartUpdated = new EventEmitter<any[]>();
  products: any[] = [];

  constructor(private http: HttpClient, private cartService: CartService) {} // Wstrzyknięcie serwisu

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.http.get<any[]>('http://localhost:3000/products').subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  onBuy(product: any): void {
    this.cartService.addToCart(product); // Użycie serwisu
  }
}
