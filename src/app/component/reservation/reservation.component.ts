import { Component } from '@angular/core';
import { Reservation } from 'src/app/models/reservation.model';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  reservations: Reservation[] = [
    { id: 1, date: new Date('2024-01-01'), name: 'John Doe', confirmed: true },
    { id: 2, date: new Date('2024-01-02'), name: 'Jane Doe', confirmed: false },
    { id: 3, date: new Date('2024-01-03'), name: 'Jim Beam', confirmed: true }
  ];

  ngOnInit() {
    const reservationsObservable = of(this.reservations);
  
    reservationsObservable.pipe(
      tap(reservations => console.log('Reservaciones:', reservations))
    ).subscribe();
  }

}
