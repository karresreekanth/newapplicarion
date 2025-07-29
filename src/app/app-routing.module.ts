import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AuthGuard } from './guards/auth.guard';
import { CheckoutComponent } from './components/checkout/checkout.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin', 'Customer', 'cart','checkout'] }
  },
  {
    path: 'productlist',
    component: ProductListComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin', 'Customer', 'cart', 'checkout'] }
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin', 'Customer', 'cart', 'checkout'] }
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin', 'Customer', 'cart', 'checkout'] }
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  canActivate: [AuthGuard],
    data: { roles: ['Admin', 'Customer', 'cart', 'checkout'] }
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
