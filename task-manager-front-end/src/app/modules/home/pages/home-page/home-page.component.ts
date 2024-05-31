import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { Routes } from 'src/app/shared/enums/routes';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  isAuthenticated = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngAfterContentChecked(): void {
    this.isAuthenticated = this.authenticationService.authenticated();
  }

  navigateToRegistration(): void {
    this.router.navigate([Routes.REGISTRATION]);
  }
}
