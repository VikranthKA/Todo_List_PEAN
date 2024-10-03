import { Component } from '@angular/core';
import { AuthenticationService } from '../../../services/auth/authentication.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
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

  isLogin(): boolean {
    if (typeof window !== 'undefined' && window.localStorage) {
      return !!localStorage.getItem('token');
    }
    return false;
  }
  

}
