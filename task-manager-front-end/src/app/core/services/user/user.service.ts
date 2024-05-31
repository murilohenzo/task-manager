import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  UserPost,
  UserPostResponse
} from 'src/app/shared/interfaces/user.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  createUser(body: UserPost): Observable<UserPostResponse> {
    return this.http.post<UserPostResponse>(
      `${environment.LOCAL}/user/signup`,
      body
    );
  }

  getUsers(): Observable<UserPost[]> {
    return this.http.get<UserPost[]>(`${environment.LOCAL}/user`);
  }
}
