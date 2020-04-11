import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, empty } from 'rxjs';
import { switchMap, shareReplay, last } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';


import { songs } from 'gen/proto/songs';
import SongService from 'app/service/song.service';
import { ErrorType, Errors } from 'app/errors';

enum _EditSongState {
  LOADING,
  ERROR,
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
  error? : ErrorType;
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
              this._setRequiredFields();
            } else {
              this.receivedUpdatedSong(song);
            }
          },
          (error) => {
            this.state = _EditSongState.ERROR;
            this.error = Errors.getErrorType(error);
          }
        );
  }

  _setRequiredFields() {
    if (!this.song.info) this.song.info = {};
    if (!this.song.guitarInfo) this.song.guitarInfo = {};
    if (!this.song.sections) this.song.sections = [];
    if (!this.song.info.artists) this.song.info.artists = [{name: ''}];
    for (let section of this.song.sections) {
      if (!section.info) section.info = {};
    }
  }

  receivedUpdatedSong(song: songs.Song) {
    console.log('Received updated Song:', song);
  }

  addArtist() {
    this.song.info.artists.push({name: ''});
  }

  removeArtist(artist: songs.ArtistInfo) {
    this.song.info.artists.splice(this.song.info.artists.indexOf(artist), 1);
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
          info: {},
          tabSection: {}
        }));
        break;
      case songs.SongSection.SectionType.CHORD_SECTION:
        this.song.sections.push(songs.SongSection.create({
          id: uuidv4(),
          sectionType,
          info: {},
          chordSection: {},
        }));
        break;
    }
    this.updateSong();
  }

  updateTabSection(id: string, tabSection: songs.TabSection) {
    const songSection = this.song.sections.find((ss) => ss.id === id);
    songSection.tabSection = tabSection;
    this.updateSong();
  }

  updateChordSection(id: string, chordSection: songs.ChordSection) {
    const songSection = this.song.sections.find((ss) => ss.id === id);
    songSection.chordSection = chordSection;
    this.updateSong();
  }

  updateSectionInfo(id: string, sectionInfo: songs.SongSectionInfo) {
    const songSection = this.song.sections.find((ss) => ss.id === id);
    songSection.info = sectionInfo;
    this.updateSong();
  }

  removeSection(section: songs.SongSection) {
    this.song.sections.splice(this.song.sections.indexOf(section), 1);
    this.updateSong();
  }

  updateSong() {
    this.song.info.latestUpdateMillis = new Date().getTime();
    this.songService.updateSong(this.song);
  }
}
