import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//servicios
import { AuthService } from './services/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { BookingComponent } from './component/booking/booking.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RegisterComponent } from './component/register/register.component'
import { RegisterService } from './services/register.service';
import { BookingListComponent } from './component/booking-list/booking-list.component';
import { CookieService } from 'ngx-cookie-service';
import { InjectTokenInterceptor } from './interceptors/inject-token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  //componentes declarados, las vistas
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    AboutUsComponent,
    BookingComponent,
    NotFoundComponent,
    RegisterComponent,
    BookingListComponent,

  ],
  //modulos importados
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
  
  ],
  // en providers van los servicios que necesita este modulo.
  providers: [
    AuthService, 
    RegisterService,
    CookieService,
    {provide: HTTP_INTERCEPTORS, useClass: InjectTokenInterceptor, multi: true}
  ],
  //vista raiz de la aplicacion
  bootstrap: [AppComponent]
})
export class AppModule { }
