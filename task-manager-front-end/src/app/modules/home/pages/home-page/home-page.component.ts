import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Routes } from 'src/app/shared/enums/routes';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  constructor(private router: Router) {}

  navigateToRegistration(): void {
    this.router.navigate([Routes.REGISTRATION]);
  }
}
