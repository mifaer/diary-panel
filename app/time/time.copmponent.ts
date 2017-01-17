import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-time',
  templateUrl: 'time.copmponent.html',
  styleUrls: ['time.copmponent.css']
})
export class TimeComponent  {
  private time: any = new Date();

  constructor () {
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  private updateTime() {
    this.time = new Date();
  }
}
