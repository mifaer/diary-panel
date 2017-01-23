import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {TodoService} from './todo.service';
import {todoList} from "./todolist";

@Component({
  moduleId: module.id,
  selector: 'my-todo',
  templateUrl: 'todo.copmponent.html',
  styleUrls: ['todo.copmponent.css']
})
export class TodoComponent implements OnInit {
  public todoList: any;
  @Input() public newTask: any;
  @Input() public itemDetection: any;
  @Output() public chooseFocusTask: EventEmitter<any> = new EventEmitter();

  constructor(private todoService: TodoService) {
    console.log('itemDetection', this.itemDetection);
  }
  private deleteTodo(todo: any) {
    // console.log(todo);
    this.todoList = this.todoList.filter((item: any) => item.id !== todo.id);
  }
  private chooseFavorite(item) {
    for(let i = 0; i < this.todoList.length; i++) {
      if(this.todoList[i].favorite = true) {
        this.todoList[i].favorite = false;
      }
    }
    item.favorite = true;
  }
  ngOnInit() {
    this.todoService
      .getItem()
      .subscribe(item => {
        this.todoList = item.data;
      });
    this.itemDetection
      .subscribe(item => {
        this.todoList.push({
          title: item,
          state: false,
          date: new Date(),
          id: +new Date(),
          favorite: false
        });
        console.log(item, todoList);
      });
  }
}
