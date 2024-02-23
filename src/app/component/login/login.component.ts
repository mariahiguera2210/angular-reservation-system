import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  showConfirmation: boolean = false;
  loginError: string = '';

  constructor(
    private _builder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.loginForm = this._builder.group({});
  }

  ngOnInit() {
    this.loginForm = this._builder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    }); //formGroup agrupo mis form control, email, password
    
  }

  onSubmit() {
    console.log(this.loginForm.value);
    const { email, password } = this.loginForm.value;
    this.authService.sendCredentials(email, password)
    .subscribe (
      response => {
        this.showConfirmation= true;// mostrar popup
        this.authService.getTokenClaims();
        this.authService.getUserInfoFromCookie();
        
      },
      err => {console.error('Usuario o Contraseña invalidos', err);
      this.loginError = 'Invalid username or password'; 

      }
    )
  }
  closePopup(): void {
    this.showConfirmation = false;
    this.router.navigate(['/home']); 
  }
}
