import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingListService {

  private baseUrl = 'http://localhost:8080/api/v1/appointment'; 
  constructor(private http: HttpClient, private router: Router) { }

  getAllAppointments(offset: number, limit: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/list/${offset}/${limit}`,
    )
    
  }

}


