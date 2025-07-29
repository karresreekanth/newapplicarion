import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../models/user.model';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  removeItemFromCart(userid: number, productid: number,cartid:number): Observable<ApiResponse<CartItem[]>> {
    return this.http.post<ApiResponse<CartItem[]>>(
      `http://localhost:7058/api/Cart/api/CartController/RemoveFromCartitem/${userid}/${productid}/${cartid}`, {}  // quantity set to 1
    );
  }


  addItemToCart(userid: number, productid: number, quantity: number): Observable<ApiResponse<CartItem[]>> {
    return this.http.post<ApiResponse<CartItem[]>>(
      `http://localhost:7058/api/Cart/api/CartController/AddToCart/${userid}/${productid}/${quantity}`, {
    }
    );
  }
  RemoveTtemtoCart(userid: number, productid: number, quantity: number): Observable<ApiResponse<Product[]>> {
    return this.http.post<ApiResponse<Product[]>>(
      `http://localhost:7058/api/Cart/api/CartController/RemoveFromCart/${userid}/${productid}/${quantity}`, {
    }
    );
  }
  addItemToCartdetailes(userid: number, productid: number, quantity: number): Observable<ApiResponse<Product[]>> {
    return this.http.post<ApiResponse<Product[]>>(
      `http://localhost:7058/api/Cart/api/CartController/itemadd/${userid}/${productid}/${quantity}`, {
    }
    );
  }


  getCart(userid: number): Observable<ApiResponse<Product[]>> {
    return this.http.get<ApiResponse<Product[]>>(
      `http://localhost:7058/api/Cart/${userid}`
    );
  }
  deleteItemFromCart(userid: number, productid: number): Observable<ApiResponse<Product[]>> {
    return this.http.get<ApiResponse<Product[]>>(`http://localhost:7058/api/Cart/api/CartController/RemoveFromCart/${userid}/${productid}`
    );
  }
  getCarts(userid: number): Observable<ApiResponse<Product[]>> {
    return this.http.get<ApiResponse<Product[]>>(
      `http://localhost:7058/api/Cart/GetCartdetails/${userid}`
    );
  }

}
