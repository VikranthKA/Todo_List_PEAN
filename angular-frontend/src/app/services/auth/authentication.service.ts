import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:3333/api/v1/user'

  constructor(private http: HttpClient) { }

  //registration
  register(userData: {
    username: string, email: string, password: string
  }): Observable<{
    token: string,
    userId: number,
    email: string
  }> {
    console.log("user",userData)
    return this.http.post<{
      token: string,
      userId: number,
      email: string
    }>(`${this.apiUrl}/signup`, userData).pipe(
      tap((response) => {
        localStorage.setItem('authToken', response.token)
      })
    )
  }



  //login
  login(userData: {
    email: string, password: string
  }): Observable<{
    token: string,
    userId: number,
    email: string
  }> {
    return this.http.post<{
      token: string,
      userId: number,
      email: string
    }>(`${this.apiUrl}/signin`, userData).pipe(
      tap((response) => {
        localStorage.setItem('authToken', response.token)
      })
    )
  }


  //evaluating the user is authenticated
  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken')
  }

  //logot the user
  logout(): void {
    localStorage.removeItem('authToken')
  }

}
