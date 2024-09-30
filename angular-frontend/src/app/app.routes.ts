import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CreateTodoComponent } from './components/todo/create-todo/create-todo.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    
    {path:'todos',component:CreateTodoComponent,canActivate:[authGuard]}

]
