import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  ordersaaa: any[] = [];
  constructor(
    private userservice: UserService, private orderservice: OrderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getOrderall();
}


  getOrderall() {
    this.orderservice.getallorders().subscribe(res => {
      this.ordersaaa = res.entity;
      console.log(this.ordersaaa);
      console.log(res.entity);
      alert(res.entity);
    })
  }
  

}
