import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, empty } from 'rxjs';
import { switchMap, shareReplay, catchError, last } from 'rxjs/operators';
import {v4 as uuidv4} from 'uuid';


import { songs } from 'gen/proto/songs';
import SongService from 'app/service/song.service';
import { ErrorType, NotFoundError } from 'app/errors';

enum _EditSongState {
  LOADING,
    SONG_NOT_FOUND,
    RUNNING,
}

@Component({
  selector: 'edit-song-root',
  templateUrl: './editsong.component.html',
  styleUrls: ['./editsong.component.scss']
})
export class EditSongComponent implements OnInit, OnDestroy {
  states = _EditSongState;
  state = _EditSongState.LOADING;
  sectionTypeEnum = songs.SongSection.SectionType;
  _songSubscription: Subscription;
  song?: songs.Song ;

  constructor(
    private route: ActivatedRoute,
    private songService: SongService) {}

  async ngOnInit() {
    // Subscribe to fetch song and update the song using the first value.
    // Following updates will call {@code this.receivedUpdatedSong}
    this._songSubscription =
      this.route.paramMap
      .pipe(
        switchMap((paramMap) => {
          const songId = paramMap.get('songId');
          return this.songService.getSong(songId);
        })).subscribe(
          (song) => {
            if (!this.song) {
              this.song = song;
              this.state = _EditSongState.RUNNING;
            } else {
              this.receivedUpdatedSong(song);
            }
          },
          (error) => {
            if (error instanceof NotFoundError) {
              this.state = _EditSongState.SONG_NOT_FOUND;
            }
          }
        );
  }

  receivedUpdatedSong(song: songs.Song) {
    console.log('Received updated Song:', song);
  }

  ngOnDestroy() {
    this._songSubscription.unsubscribe();
  }

  addSection(sectionType: songs.SongSection.SectionType) {
    switch (sectionType){
      case songs.SongSection.SectionType.TAB_SECTION:
        this.song.sections.push(songs.SongSection.create({
          id: uuidv4(),
          sectionType,
          tabSection: {}
        }));
        break;
      case songs.SongSection.SectionType.CHORD_SECTION:
        this.song.sections.push(songs.SongSection.create({
          id: uuidv4(),
          sectionType,
          chordSection: {},
        }));
        break;
    }
    this.updateSong();
  }

  updateTabSection(id: string, tabSection: songs.TabSection) {
    console.log('updating', id, tabSection);
    const songSection = this.song.sections.find((ss) => ss.id === id);
    songSection.tabSection = tabSection;
    this.updateSong();
  }

  updateSong() {
    this.song.info.latestUpdateMillis = new Date().getTime();
    this.songService.updateSong(this.song);
  }
}
