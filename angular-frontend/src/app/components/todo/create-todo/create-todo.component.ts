import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../../services/todos/todo.service';
import {CreateTodo, ITodo} from "../../../model/todo"

@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.scss'
})

export class CreateTodoComponent implements OnInit {
  todoObj: CreateTodo = new CreateTodo();
  updateId: number=0

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.isUpdateTodoServie.subscribe((id: number | null) => {
      if (id) {
        this.updateId = id;
        this.loadTodoForUpdate(id)
      }
    })
  }



  loadTodoForUpdate(id: number) {
    this.todoService.getOneById(id).subscribe((todo: ITodo) => {
      this.todoObj = { title: todo.title, description: todo.description };  // Pre-fill the form
    });
  }

  addTodo() {
    if (this.updateId) {
      this.updateTodo();
    } else {
      this.todoService.createNewTodo(this.todoObj).subscribe({
        next: (res: ITodo) => {
          this.todoService.getAllTodo(); 
          this.todoObj = new CreateTodo();
        },
        error: (err) => {
          console.error('Error creating todo', err);
        }
      });
    }
  }

  updateTodo() {
    this.todoService.updateTodoService(this.todoObj,this.updateId).subscribe({
      next: (res) => {
        this.todoService.getAllTodo(); 
        this.todoObj = new CreateTodo();
        this.updateId = 0;
      },
      error: (err) => {
        console.error('Error updating todo', err);
      }
    });
  }
}
