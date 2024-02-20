import { Component } from '@angular/core';
import { BookingListService } from 'src/app/services/booking-list.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent {

  appointments: any[] = [];

  constructor(private  bookingListService: BookingListService){}

  ngOnInit(){
    this.bookingListService.getAllAppointments(0,10)
    .subscribe(response => {
      console.log(response)
      this.appointments= response
    })
  }
  
  
}
