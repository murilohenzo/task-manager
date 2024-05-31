import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  UserNameResponse,
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

  getUsers(): Observable<UserNameResponse[]> {
    return this.http.get<UserNameResponse[]>(`${environment.LOCAL}/user`);
  }
}
