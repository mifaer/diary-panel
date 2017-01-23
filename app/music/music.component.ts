import { Component, OnInit } from '@angular/core';
import {MusicService} from "./music.service";

@Component({
  moduleId: module.id,
  selector: 'my-music',
  templateUrl: 'music.component.html',
  styleUrls: ['music.component.css']
})

export class MusicComponent implements OnInit {
  private playList: any = [];

  constructor(private musicService: MusicService) {

  }

  ngOnInit() {
    this.musicService
      .getMusic()
      .subscribe(item => {
        for (let i = 0; i < item.dataset.length; i++) {
          this.playList.push({
            artist: item.dataset[i].artist_name,
            title: item.dataset[i].track_title,
            url: item.dataset[i].track_url
          });
        }
        console.log(this.playList);
        67878
      });
  }
}
