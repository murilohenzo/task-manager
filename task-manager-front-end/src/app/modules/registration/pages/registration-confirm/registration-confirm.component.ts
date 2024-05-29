import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Routes } from 'src/app/shared/enums/routes';

@Component({
  selector: 'app-registration-confirm',
  templateUrl: './registration-confirm.component.html',
  styleUrls: ['./registration-confirm.component.scss']
})
export class RegistrationConfirmComponent {
  constructor(private router: Router) {}

  navigateToLogin(): void {
    this.router.navigate([Routes.LOGIN]);
  }
}
