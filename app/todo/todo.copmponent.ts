import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-todo',
  templateUrl: 'todo.copmponent.html',
  styleUrls: ['todo.copmponent.css']
})
export class TodoComponent  {
  private todoList: any = [{
    title: 'Купить продукты',
    state: true,
    date: new Date(),
    id: '1'
  }, {
    title: 'Убрать хату',
    state: false,
    date: new Date(),
    id: '2'
  }, {
    title: 'Чета еще...',
    state: true,
    date: new Date(),
    id: '3'
  }
  ];

  private deleteTodo(todo: any) {
    console.log(todo);
    this.todoList = this.todoList.filter((item: any) => item.id !== todo.id);
  }
}
