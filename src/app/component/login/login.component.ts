import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private _builder: FormBuilder,
    private authService: AuthService
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
        console.log('logeado exitosamente');
      },
      err => {console.error('Usuario o Contraseña invalidos', err);
      }
    )
  }
}
