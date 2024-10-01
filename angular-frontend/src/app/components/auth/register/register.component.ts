import { Component } from '@angular/core';
import { AuthenticationService } from '../../../services/auth/authentication.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(
    private authenticationService:AuthenticationService,
    private router:Router
  ){}
  userData = {username:"",email:"",password:""}
  username= new FormControl("",[
    Validators.required,
    Validators.minLength(3)
  ])
  email = new FormControl("",[
    Validators.required,
    Validators.email,
  ])
  password= new FormControl("",[
    Validators.required,
    Validators.minLength(3)
  ])
  
  registerData = new FormGroup({
    username:this.username,
    email:this.email,
    password:this.password
  })

  register():void{
    if(this.registerData.valid){
      const formValues = this.registerData.value
      const registerPayload = {
        username:formValues.username as string,
        email:formValues.email as string,
        password:formValues.password as string


      }

      this.authenticationService.register(registerPayload).subscribe(()=>{
        this.router.navigate(['/todos'])
      })
    }
  }

}
