import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CreateTodo, ITodo } from '../../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiUrl:string="http://localhost:3333/api/v1/todo"
  todoObj:CreateTodo = new CreateTodo()
  private updateTodoSource = new BehaviorSubject<number | null>(null)


  constructor(private http:HttpClient) { }

  createNewTodo(obj:CreateTodo):Observable<ITodo>{
    return this.http.post<ITodo>(`${this.apiUrl}`,obj)
  }
  getAllTodo():Observable<ITodo[]>{
    return this.http.get<ITodo[]>(`${this.apiUrl}`)
  }
  getOneById(id:number):Observable<ITodo>{
    return this.http.get<ITodo>(`${this.apiUrl}/${id}`)
  }
  updateTodoService(obj:{title:string,description:string},id:number):Observable<ITodo>{
    return this.http.put<ITodo>(`${this.apiUrl}/${id}`,obj)
  }
  deleteTodoServie(id:number){
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

  isUpdateTodoServie  = this.updateTodoSource.asObservable();

  updateTodoId(id:number | null){
    this.updateTodoSource.next(id)
  }

  updateIdtrueService(){
    console.log(this.todoObj,"asdf")

    return {
      id:this.isUpdateTodoServie,
      updateObj:this.todoObj
    }
  }

  
}
