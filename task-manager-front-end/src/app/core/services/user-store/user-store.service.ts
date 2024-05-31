import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, filter } from 'rxjs';
import {
  UserPost,
  UserLogin,
  UserLoginResponse
} from 'src/app/shared/interfaces/user.interface';
import { UserService } from '../user/user.service';
import { AuthenticationService } from '../authentication/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Routes } from 'src/app/shared/enums/routes';
import { ErrorModalComponent } from 'src/app/shared/components/modals/error-modal/error-modal.component';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private formListenerSubject!: BehaviorSubject<UserPost>;
  private formLoginListenerSubject!: BehaviorSubject<UserLogin>;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.formListenerSubject = new BehaviorSubject<UserPost>({} as UserPost);
    this.formLoginListenerSubject = new BehaviorSubject<UserLogin>(
      {} as UserLogin
    );

    this.initFormListener();
    this.loginListener();
  }

  setFormValue(formValue: UserPost): void {
    this.formListenerSubject.next(formValue);
  }

  setFormLoginValue(formValue: UserLogin): void {
    this.formLoginListenerSubject.next(formValue);
  }

  private initFormListener(): void {
    this.formListenerSubject
      .pipe(
        debounceTime(500),
        filter((user: UserPost) => !!user.email)
      )
      .subscribe((userValue: UserPost) => {
        this.userService.createUser(userValue).subscribe({
          next: () => {
            this.router.navigate([Routes.REGISTRATION_CONFIRM]);
          },
          error: () =>
            this.dialog
              .open(ErrorModalComponent, { width: '400px' })
              .afterClosed()
              .subscribe(() => this.router.navigate([Routes.REGISTRATION]))
        });
      });
  }

  private loginListener(): void {
    this.formLoginListenerSubject
      .pipe(
        debounceTime(500),
        filter((user: UserLogin) => !!user.username)
      )
      .subscribe((userValue) => {
        this.authenticationService.login(userValue).subscribe({
          next: (request: UserLoginResponse) => {
            localStorage.setItem('token', request.access_token);
            // localStorage.setItem('id', JSON.stringify(request.result.user.id));
            this.router.navigate([Routes.DASHBOARD]);
          },
          error: () =>
            this.dialog
              .open(ErrorModalComponent, { width: '400px' })
              .afterClosed()
              .subscribe(() => this.router.navigate([Routes.LOGIN]))
        });
      });
  }
}
