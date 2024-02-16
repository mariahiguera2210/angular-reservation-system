import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  sendCredentials(email: string, password: string): Observable<any> {
    const body = {
      email: email,
      password: password,
    };
    return this.http.post(
      'http://localhost:8080/api/v1/auth/authenticate',
      body, {responseType: 'text'})
      .pipe(tap( (response) => console.log(response)));
  }
}
