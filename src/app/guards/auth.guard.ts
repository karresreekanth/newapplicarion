import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TokenHelperService } from '../services/token-helper.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private tokenHelper: TokenHelperService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.tokenHelper.isTokenValid()) {
      this.router.navigate(['/login']);
      return false;
    }

    const userRole = this.tokenHelper.getUserRole();
    const expectedRoles = route.data['roles'] as Array<string>;

    if (!expectedRoles || (userRole && expectedRoles.includes(userRole))) {
      return true;
    }

    alert('❌ Access Denied: Unauthorized Role');
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 0);
    return false;
  }
}
