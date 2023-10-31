import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = '';

  constructor(private http: HttpClient) {}

  registerUser(userDetails: UserDetails) {
    return this.http.post(`${this.baseUrl}/register`, userDetails);
  }

  getUserByEmail(email: string) {
    // return this.http.get<T>(`${this.baseUrl}/users?email=${email}`);
    return of(`${email}`);
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface UserDetails {}

type T = {
  // password: string | null | undefined;
  [key in string]: string;
};
