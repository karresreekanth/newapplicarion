import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class TokenHelperService {
  constructor(private jwtHelper: JwtHelperService) { }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getDecodedToken(): any {
    const token = this.getToken();
    if (!token || this.jwtHelper.isTokenExpired(token)) return null;
    return this.jwtHelper.decodeToken(token);
  }

  getUserRole(): string | null {
    return this.getDecodedToken()?.role || null;
  }

  isTokenValid(): boolean {
    const token = this.getToken();
    return !!token && !this.jwtHelper.isTokenExpired(token);
  }
  getUserId(): string | null {
    return localStorage.getItem('userid');
  }
}
