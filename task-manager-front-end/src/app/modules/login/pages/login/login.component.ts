import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserStoreService } from 'src/app/core/services/user-store/user-store.service';
import { Routes } from 'src/app/shared/enums/routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;

  showPassword = false;

  readonly routes = Routes;

  constructor(
    private userStore: UserStoreService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  login(): void {
    this.userStore.setFormLoginValue(this.loginForm.value);
  }

  navigate(path: string): void {
    this.router.navigate([path]);
  }

  private createLoginForm(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
