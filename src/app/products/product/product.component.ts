// src/app/products/product/product.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: any; // Replace `any` with a proper type if available
  @Output() buy = new EventEmitter<void>();

  onBuy() {
    this.buy.emit();
  }
}
