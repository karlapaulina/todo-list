import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoDataService } from '../../services/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoDataService) {}

  ngOnInit(): void {
    //subscribe is like using .then with promises
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }
}