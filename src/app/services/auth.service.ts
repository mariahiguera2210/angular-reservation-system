import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { CustomJwtPayload } from '../models/CustomJwtPayload.model';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userInfoSource = new BehaviorSubject<{ name?: string; id?:number }>({});
  userInfo$ = this.userInfoSource.asObservable();

  constructor(private http: HttpClient, private cookie: CookieService, private router: Router) {}

  sendCredentials(email: string, password: string): Observable<any> {
    const body = {
      email: email,
      password: password,
    };
    return this.http
      .post('http://localhost:8080/api/v1/auth/authenticate', body, {
        responseType: 'text',
      })
      .pipe(
        tap((token: string) => { // La respuesta es el token JWT como texto plano
          console.log(token);
          this.cookie.set('token', token, 1, '/'); // Guardar el token en las cooki
          this.getTokenClaims();
          const userInfo = this.getUserInfoFromCookie();
          this.userInfoSource.next(userInfo);
        })
      );
  }

  getTokenClaims(): any {
    const token = this.cookie.get('token');
    if (token) {
      try {
        const decodedToken = jwtDecode<CustomJwtPayload>(token);
  
        // Asegurarse de que nameString sea siempre un string
        const nameString = decodedToken.name || ''; // Valor predeterminado como string vacío
        this.cookie.set('userName', nameString, 1, '/');
  
        // Convertir el id del usuario a una cadena y asignarlo a otra cookie
        const idUser = String(decodedToken.id || ''); // Convertir el id a String o usar string vacío como predeterminado
        this.cookie.set('userId', idUser, 1, '/');
  
      } catch (Error) {
        console.error('Error decodificando el token:', Error);
        return null;
      }
    }
    return null;
  }
  
  
  getUserInfoFromCookie(): { name?: string, id?: number } {
    const userName = this.cookie.get('userName');
    const userId = this.cookie.get('userId');
    const id = userId ? Number(userId) : undefined; // Convertir userId a Number si existe
  
    return { name: userName, id: id };
  }
  

  logout(): void {
    this.cookie.delete('token', '/');
    this.cookie.delete('userName', '/');
    this.cookie.delete('userId', '/');
    this.userInfoSource.next({}); // Limpiar la información del usuario
    this.router.navigate(['/login']);
  }

}
