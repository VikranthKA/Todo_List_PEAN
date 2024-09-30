import { Component } from '@angular/core';
import { AuthenticationService } from '../../../services/auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userData = {email:"",password:""}
  constructor(
    private authenticationService:AuthenticationService,
    private router:Router
  ){}


  login(){
    this.authenticationService.login(this.userData).subscribe(()=>{
        this.router.navigate(['/todos'])
    })
  }

}
