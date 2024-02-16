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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './component/register/register.component'

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

  ],
  //modulos importados
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  // en providers van los servicios que necesita este modulo.
  providers: [
    AuthService
  ],
  //vista raiz de la aplicacion
  bootstrap: [AppComponent]
})
export class AppModule { }
