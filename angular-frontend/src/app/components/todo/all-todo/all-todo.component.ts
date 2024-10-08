import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../../../services/todos/todo.service';
import { CreateTodo, ITodo } from '../../../model/todo';
import { CreateTodoComponent } from '../create-todo/create-todo.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-all-todo',
  standalone: true,
  imports: [CreateTodoComponent, DatePipe],
  templateUrl: './all-todo.component.html',
  styleUrl: './all-todo.component.scss'
})
export class AllTodoComponent implements OnInit {
  allTodo: ITodo[] = []

  updateId:number | null =null;

  ngOnInit(): void {
    this.loadAllTodo()
    this.todoService.isUpdateTodoServie.subscribe((id:number|null)=>{
      this.updateId = id
    })
  }

  todoService = inject(TodoService)

  setUpdateId(id:number){
    this.todoService.updateTodoId(id)
  }

  loadAllTodo() {
    this.todoService.getAllTodo().subscribe((res: ITodo[]) => {
      this.allTodo = res
    })
  }

 

  deleteTodo(id: number) {
    this.todoService.deleteTodoServie(id).subscribe((res) => {
      this.loadAllTodo()
    })
  }


}
