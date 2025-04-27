import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'products', loadComponent: () => import('./products/product-list/product-list.component').then(m => m.ProductListComponent) },
  { path: 'cart', loadComponent: () => import('./cart/cart.component').then(m => m.CartComponent) },
];
