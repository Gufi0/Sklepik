import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { IProduct} from './Interface/IProduct';
import { CartService } from './Services/CartService'; // Import serwisu

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ProductListComponent,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sklepik';
  cart: IProduct[] = [];
  constructor(private cartService: CartService) { }

  updateCart(cart: IProduct[]): void {
    this.cart = cart;
  }
}
