import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ReservationComponent } from './component/reservation/reservation.component';
import { ReservationListComponent } from './component/reservation-list/reservation-list.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  //componentes declarados, las vistas
  declarations: [
    AppComponent,
    HeaderComponent,
    ReservationComponent,
    ReservationListComponent,
    LoginComponent
  ],
  //modulos importados
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // en providers van los servicios que necesita este modulo.
  providers: [],
  //vista raiz de la aplicacion
  bootstrap: [AppComponent]
})
export class AppModule { }
