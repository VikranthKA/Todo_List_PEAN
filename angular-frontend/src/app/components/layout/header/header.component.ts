import { Component } from '@angular/core';
import { AuthenticationService } from '../../../services/auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
constructor(private authenticationService:AuthenticationService,private router:Router){}

  navbarLogout(){
    console.log("logout")
    this.authenticationService.logout()
    this.router.navigate(['/login']);
  }

  isLogin():boolean{
    return !!localStorage.getItem('authToken')  }


}
