import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {TodoComponent} from "./todo/todo.copmponent";
import {TimeComponent} from "./time/time.copmponent";
import {TodoService} from "./todo/todo.service";
import {FormsModule} from "@angular/forms";
import {MusicComponent} from "./music/music.component";
import {MusicService} from "./music/music.service";
import {HttpModule} from "@angular/http";
// import {Http, RequestOptions} from "@angular/http";

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, TodoComponent, TimeComponent, MusicComponent ],
  bootstrap:    [ AppComponent ],
  providers: [TodoService, MusicService]
})
export class AppModule { }
