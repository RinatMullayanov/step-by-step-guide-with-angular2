/// <reference path="./typings/angular2/angular2.d.ts"/>
import {Component, View, For} from 'angular2/angular2';

@Component({
  selector: 'todo-list'
})
@View ({
  templateUrl: './todo.html',
  directives: [
    For
  ]
})
export class TodoListComponent {
  todos: string[];

  constructor() {
    this.todos = ["Eat Breakfast", "Walk Dog", "Breathe"];
  }

  addTodo(todo: string) {
    this.todos.push(todo);
  }

  doneTyping($event) {
    if($event.which === 13) {
      this.addTodo($event.target.value);
      $event.target.value = null;
    }
  }
}
