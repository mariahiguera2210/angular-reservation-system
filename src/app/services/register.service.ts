import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient, private cookie: CookieService,
    private router: Router) {}

  sendRegisterCredentials(name: string, email: string, password: string): Observable<any> {
    const body = {
      name : name,
      email: email,
      password: password,
    };
    return this.http
      .post('http://localhost:8080/api/v1/auth/register', body, {
        responseType: 'text',
      })
      .pipe(
        tap((token: string) => { // La respuesta es el token JWT como texto plano
          console.log(token);
          this.cookie.set('token', token, 1, '/'); // Guardar el token en las cooki
          //this.router.navigate(['/home'])
        })
      );
  }
}
