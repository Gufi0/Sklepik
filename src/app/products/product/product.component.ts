import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  standalone: true,
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product!: { name: string; image: string; price: number }; // Fixed TS2564
  @Output() buy = new EventEmitter<void>();

  onBuy() {
    this.buy.emit();
  }
}
