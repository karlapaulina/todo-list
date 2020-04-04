import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './conponents/todo/todo.component';
import { TodoItemComponent } from './conponents/todo-item/todo-item.component';

@NgModule({
  declarations: [AppComponent, TodoComponent, TodoItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  //services to include
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
