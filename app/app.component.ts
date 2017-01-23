import {Component, ViewChild, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  private num: number;
  private numImg: string;
  public chooseFocusTask: any;
  private focusTask: string;
  public itemDetection: EventEmitter<any> = new EventEmitter();
  private taskValue: string;

  constructor () {
    this.backRandom(1, 5);
    this.numImg = `url(../img/00${this.num}.jpg) no-repeat`;
  }
  private backRandom(min, max) {
    this.num = Math.floor(Math.random() * (max - min)) + min;
  }

  private addItem() {
    console.log('this.taskValue', this.taskValue);
    this.itemDetection.emit(this.taskValue);
    this.taskValue = '';
  }
  private addItemKey(ev) {
    let key = ev.key;
    (key === 'Enter') ? this.addItem() : null;
  }
  private chooseFocus(item) {
    this.focusTask = item;
  }

  // ngOnInit() {
  //   this.chooseFocusTask
  //     .subscribe(item => this.focusTask = item);
  // }
}
