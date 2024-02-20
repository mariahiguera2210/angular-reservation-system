import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { BookingComponent } from './component/booking/booking.component';
import { NotFoundComponent} from './component/not-found/not-found.component'
import { RegisterComponent } from './component/register/register.component';
import { SessionGuard } from './guards/session.guard';
import { BookingListComponent } from './component/booking-list/booking-list.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'booking', component: BookingComponent, /*canActivate: [SessionGuard]*/},
  {path: 'register', component: RegisterComponent},
  {path: 'bookinglist', component: BookingListComponent},
  {path:'**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
