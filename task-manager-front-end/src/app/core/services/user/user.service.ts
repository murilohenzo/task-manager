import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/interfaces/user.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  createUser(body: User): Observable<User> {
    return this.http.post<User>(`${environment.LOCAL}/user/signup`, body);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.LOCAL}/user`);
  }
}
