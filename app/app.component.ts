import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent  {
  private num: number = 2;
  constructor () {
    this.backRandom(1, 5);
  }
  private backRandom(min, max) {
    this.num = Math.floor(Math.random() * (max - min)) + min;
  }
}
