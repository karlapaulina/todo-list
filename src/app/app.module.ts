import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './conponents/todo/todo.component';
import { TodoItemComponent } from './conponents/todo-item/todo-item.component';
import { HeaderComponent } from './conponents/layout/header/header.component';
import { AddTodoComponent } from './conponents/add-todo/add-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  //services to include
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
