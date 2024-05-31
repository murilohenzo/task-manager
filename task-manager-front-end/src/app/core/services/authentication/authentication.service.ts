import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
  UserLogin,
  UserLoginResponse,
  UserNameResponse
} from 'src/app/shared/interfaces/user.interface';
import { environment } from '../../environments/environment';
import { Routes } from 'src/app/shared/enums/routes';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient, private router: Router) {}

  login(body: UserLogin): Observable<UserLoginResponse> {
    return this.http.post<UserLoginResponse>(
      `${environment.LOCAL}/login`,
      body
    );
  }

  logOut(): void {
    localStorage.clear();
    this.router.navigate([Routes.LOGIN]);
  }

  authenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getUserByUsername(userName: string): Observable<UserNameResponse> {
    return this.http.get<UserNameResponse>(
      `${environment.LOCAL}/login/${userName}`
    );
  }
}
