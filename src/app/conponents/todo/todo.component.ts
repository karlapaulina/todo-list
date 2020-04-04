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
  deleteTodo(todo: Todo) {
    //Filters out todo items from UI based on the condition that they are deleted
    this.todos = this.todos.filter((t) => t.id !== todo.id);
    //Deletes todo items that have been deleted from the server
    this.todoService.deleteTodo(todo).subscribe();
  }
}
