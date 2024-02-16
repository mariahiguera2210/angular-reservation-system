import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm : FormGroup;

   constructor(private _builder:FormBuilder){
     this.loginForm = this._builder.group({})
  }

     ngOnInit(){
      this.loginForm = this._builder.group({
      email : ['',[Validators.email, Validators.required] ], 
      password : ['', Validators.required ]
     })//formGroup agrupo mis form control, email, password
   }

   onSubmit(){
    console.log(this.loginForm.value);
    const {email, password} = this.loginForm.value;
    
   }

}
