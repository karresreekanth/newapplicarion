import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, Role, User, UserloginData } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getRoles(): Observable<ApiResponse<Role[]>> {
    return this.http.get<ApiResponse<Role[]>>('http://localhost:7058/api/Users/api/UsersController/GetAllRoles');
  }

  saveUser(user: User): Observable<any> {
    return this.http.post<any>('http://localhost:7058/api/Users/api/UsersController/RegisterUser',user);
  }

  logingdata(login: UserloginData): Observable<any> {
    return this.http.post<any>('http://localhost:7058/api/Users/api/UsersController/Login',login)

  }

}
