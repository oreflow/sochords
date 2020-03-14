import { Component, OnInit} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { songs } from 'gen/proto/songs';
import SongService from 'app/service/song.service';

enum NewSongState {
  PENDING,
  CREATING,
  ERROR,
  DONE
}

@Component({
  selector: 'newsong-root',
  templateUrl: './newsong.component.html',
  styleUrls: ['./newsong.component.scss']
})
export class NewSongComponent {
  songName = new FormControl();
  states = NewSongState;
  state = NewSongState.PENDING;
  constructor(
    private router: Router,
    private songService: SongService) {}

  createSong() {
    this.state = NewSongState.CREATING;
    this.songService.createSong(songs.SongInfo.create({
      title: this.songName.value,
    }))
      .then((song) => {
        this.state = NewSongState.DONE;
        this.router.navigate(['editSong', song.id]);
      }).catch((error) => {
        this.state = NewSongState.ERROR;
      });
  }
}
