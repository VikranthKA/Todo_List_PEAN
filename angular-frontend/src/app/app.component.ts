import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/layout/header/header.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AllTodoComponent } from './components/todo/all-todo/all-todo.component';
import { TodoService } from './services/todos/todo.service';
import { ITodo } from './model/todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LoginComponent, AllTodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  title = 'angular-frontend';




}
