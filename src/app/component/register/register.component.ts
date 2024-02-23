import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm : FormGroup
  showConfirmation: boolean = false;

  constructor(
    private _builder: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) {
    this.registerForm = this._builder.group({});
  }
  ngOnInit() {
    this.registerForm = this._builder.group({
      name:['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    }); //formGroup agrupo mis form control, email, password
    
  }

  registerUser(): void {
    console.log(this.registerForm.value);
    const {name, email, password} = this.registerForm.value;
    this.registerService.sendRegisterCredentials(name, email, password)
    .subscribe(
      (response: RegisterService )=> {
        this.showConfirmation= true;// mostrar popup
      },
      err => {console.error('Error registro', err);
    }
    )
  
  }
  closePopup(): void {
    this.showConfirmation = false;
    this.router.navigate(['/home']); 
  }
    
}