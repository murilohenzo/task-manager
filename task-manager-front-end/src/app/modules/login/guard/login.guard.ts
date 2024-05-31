import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { Routes } from 'src/app/shared/enums/routes';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (!this.authenticationService.authenticated()) {
      return true;
    } else {
      this.router.navigate([Routes.UNAUTHORIZED]);
      return false;
    }
  }
}
