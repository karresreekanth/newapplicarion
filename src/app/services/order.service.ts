import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, Order } from '../models/order.model';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  // Angular service method
  placeOrders(userid: number): Observable<ApiResponse<Order[]>> {
    return this.http.post<ApiResponse<Order[]>>(
      `http://localhost:7058/api/Orders/api/Orders/PlaceOrder/${userid}`, {}
    );
  }

  getallorders(): Observable<ApiResponse<Order[]>> {
    return this.http.get<ApiResponse<Order[]>>(
      `http://localhost:7058/api/Orders/api/OrdersController/GetAllOrders`, 
    );
  }


}
