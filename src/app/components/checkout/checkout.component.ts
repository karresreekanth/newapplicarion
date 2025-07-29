import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  userId: number = 0;
  cart: any[] = [];
  orderdata: any[] = [];
  totalAmount: number = 0;

  ngOnInit() {
    const storedId = localStorage.getItem('userId');
    this.userId = storedId ? Number(storedId) : 0;
    console.log(this.userId);
    alert(this.userId);
    const navState: any = history.state;
    this.cart = navState.cart || [];
    this.totalAmount = navState.total || 0;
  }
  constructor(private cartService: CartService, private router: Router, private orderservice: OrderService) { }


  PlaceOrder() {
    alert(this.userId);
    this.orderservice.placeOrders(this.userId).subscribe(res => {
      this.orderdata = res.entity;
      if (this.orderdata.length > 0) {
        alert(res.message);

      }
      else {
        alert(res.message);
      }
    })
    this.cart = [];
    this.totalAmount = 0;
    setTimeout(() => {
      this.router.navigate(['/orders']);
    }, 3000);
  }

}
