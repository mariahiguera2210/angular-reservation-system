import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private baseUrl = 'http://localhost:8080/api/v1';
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  sendBooking(bookingData: any): Observable<any> {
    console.log(bookingData);
    
    return this.http.post(`${this.baseUrl}/appointment/create`, bookingData)
      .pipe(
        tap(() => this.router.navigate(['/bookinglist'])),
        catchError(error => {
          console.error('Error creating booking:', error);
          return throwError(() => error);
        })
      );
  }
  
  getDoctors(offset: number = 0, limit: number = 10): Observable<any> {
    return this.http.get(`${this.baseUrl}/doctor/${offset}/${limit}`);
  }
}


