import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { ApiResponse, Product, ProductCategories } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }



  getProduct(): Observable<ApiResponse<Product[]>> {
    return this.http.get<ApiResponse<Product[]>>('http://localhost:7058/api/Products/api/ProductsController/GetAll');
  }

  getProductCategory(): Observable<ApiResponse<ProductCategories[]>> {
    return this.http.get<ApiResponse<ProductCategories[]>>('http://localhost:7058/api/Products/api/ProductsController/GetCategorys');
  }

  getProductCategoryid(categoryId: number): Observable<ApiResponse<Product[]>> {
    return this.http.get<ApiResponse<Product[]>>(
      `http://localhost:7058/api/Products/api/ProductsController/${categoryId}`
    );
  }
  getProductDetailes(productid: number, categoryId: number): Observable<ApiResponse<Product[]>> {
    return this.http.get<ApiResponse<Product[]>>(`http://localhost:7058/api/Products/api/ProductsController/Getproductdata/${productid}/${categoryId}`
    );
  }

  

}
