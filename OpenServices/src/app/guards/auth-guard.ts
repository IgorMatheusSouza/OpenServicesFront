import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth-services';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.isLoggedIn()
      .pipe(
        map(res => {
          if (res) {
            return res;
          } else {
            this.router.navigateByUrl('login');
            return false;
          }
        })
      );
  }
}