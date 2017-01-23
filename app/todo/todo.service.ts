import {Injectable} from '@angular/core';
import {todoList} from './todolist';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class TodoService {
  getItem() {
    return Observable.of({
      data: todoList
    });
  }
}
