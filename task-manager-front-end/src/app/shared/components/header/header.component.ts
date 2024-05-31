import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { Routes } from '../../enums/routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isAuthenticated = false;

  readonly routes = Routes;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngAfterContentChecked(): void {
    this.isAuthenticated = this.authenticationService.authenticated();
  }

  navigate(path: string): void {
    this.router.navigate([path]);
  }

  logout(): void {
    this.authenticationService.logOut();
  }
}
