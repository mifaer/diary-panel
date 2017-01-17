import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {TodoComponent} from "./todo/todo.copmponent";
import {TimeComponent} from "./time/time.copmponent";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, TodoComponent, TimeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
