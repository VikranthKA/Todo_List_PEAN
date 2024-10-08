import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CreateTodoComponent } from './components/todo/create-todo/create-todo.component';
import { authGuard } from './auth.guard';
import { AllTodoComponent } from './components/todo/all-todo/all-todo.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    
    {path:'todos',component:AllTodoComponent,canActivate:[authGuard]}

]
