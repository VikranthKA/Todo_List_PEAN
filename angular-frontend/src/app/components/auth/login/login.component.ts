import { Component } from '@angular/core';
import { AuthenticationService } from '../../../services/auth/authentication.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email=new FormControl("",[
    Validators.required,
    Validators.email,
  ])

  password= new FormControl("",[
    Validators.required,
    Validators.minLength(6),
  ])

  loginForm = new FormGroup({
    email:this.email,
    password:this.password
  })

  constructor(
    private authenticationService:AuthenticationService,
    private router:Router
  ){}


  login(){
    if(this.loginForm.valid){
      const loginValue = this.loginForm.value
      const loginPayload = {
        email:loginValue.email as string,
        password:loginValue.password as string
      }
      this.authenticationService.login(loginPayload).subscribe(()=>{
        this.router.navigate(['/todos'])
      })
    }
  }

}
