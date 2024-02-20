import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  bookingForm: FormGroup;
  doctors: any[] = [];

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService,
    private cookie: CookieService
  ) {
    this.bookingForm = this.fb.group({
      doctorId: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      startTimeControl: ['', Validators.required],
      endTimeControl: ['', Validators.required],
      reasonForVisit: ['', Validators.required],
      confirmed: [false]
    });
    
  }

  ngOnInit(): void {
    this.loadDoctors();
  }

  loadDoctors(): void {
    this.bookingService.getDoctors().subscribe({
      next: (response) => {
        console.log(response); // Verifica que cada doctor tenga un 'id'
        this.doctors = response;
      },
      error: (error) => {
        console.error('Error al obtener la lista de doctores:', error);
      }
    });
  }
  

  submit(): void {
    if (this.bookingForm.valid) {
      const formValue = this.bookingForm.value;
  
      // Asumiendo que appointmentDate y startTimeControl ya están definidos en tu formulario
      const date = new Date(formValue.appointmentDate);
      const [hours, minutes] = formValue.startTimeControl.split(':').map(Number);
      date.setHours(hours, minutes, 0); // Establece los segundos a 0 para el formato correcto
  
      // Formatea la fecha y la hora manualmente para cumplir con el formato exacto requerido
      const formattedDate = date.getFullYear() + 
                            '-' + ('0' + (date.getMonth() + 1)).slice(-2) + 
                            '-' + ('0' + date.getDate()).slice(-2) + 
                            'T' + ('0' + hours).slice(-2) + 
                            ':' + ('0' + minutes).slice(-2) + 
                            ':00'; // YYYY-MM-DDTHH:MM:SS
  
      const userId = parseInt(this.cookie.get('userId'), 10); // Obtiene el ID del usuario desde una cookie
      const bookingData = {
        appointmentDate: formattedDate,
        reasonForVisit: formValue.reasonForVisit,
        confirmed: formValue.confirmed,
        user: { id: userId },
        doctor: { id: formValue.doctorId }
      };
  
      this.bookingService.sendBooking(bookingData).subscribe({
        next: () => {
          console.log('Cita agendada con éxito');
          // Procesamiento posterior, como redirigir al usuario o mostrar un mensaje de éxito
        },
        error: (error) => console.error('Error al agendar la cita:', error)
      });
    } else {
      alert('Por favor, completa todos los campos requeridos.');
    }
  }
  
  
  
}
