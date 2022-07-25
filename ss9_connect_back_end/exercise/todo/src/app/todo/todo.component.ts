import {Component, OnInit} from '@angular/core';
import {Todo} from './todo';
import {FormControl} from '@angular/forms';
import {TodoService} from '../service/todo.service';

// tslint:disable-next-line:variable-name
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoService.getAll().subscribe(
      todos => this.todos = todos
    );
  }

  toggleTodo(todo: Todo) {
    todo.complete = !todo.complete;
    this.todoService.updateTodo(todo).subscribe(
      () => {
        this.ngOnInit();
      }
    );
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        content: value,
        complete: false
      };
      this.todoService.addNew(todo).subscribe(
        () => {
          this.ngOnInit();
          this.content.reset();
        }
      );
    }
  }

  delete(todo: Todo) {
    this.todoService.delete(todo).subscribe(
      () => {
        this.ngOnInit();
      }
    );
  }

}
