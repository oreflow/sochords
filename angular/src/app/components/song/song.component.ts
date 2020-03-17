import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, empty } from 'rxjs';
import { switchMap, shareReplay, catchError } from 'rxjs/operators';

import { songs } from 'gen/proto/songs';
import SongService from 'app/service/song.service';
import { ErrorType, Errors } from 'app/errors';

enum _SongComponentState {
  LOADING,
  ERROR,
  RUNNING,
}
@Component({
  selector: 'song-root',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent {
  states = _SongComponentState;
  state = _SongComponentState.LOADING;
  error?: ErrorType;
  sectionTypeEnum = songs.SongSection.SectionType;
  _songSubscription: Subscription;
  song$?: Observable<songs.Song> ;

  constructor(
    private route: ActivatedRoute,
    private songService: SongService) {}

  ngOnInit() {
    this.song$ = this.route.paramMap
      .pipe(
        switchMap((paramMap) => {
          const songId = paramMap.get('songId');
          return this.songService.getSong(songId);
        }),
        shareReplay(1),
      );
    this._songSubscription = this.song$.subscribe(
      (_) => this.state = _SongComponentState.RUNNING,
      (error) => {
        this.state = _SongComponentState.ERROR;
        this.error = Errors.getErrorType(error);
      }
    );
  }

  ngOnDestroy() {
    this._songSubscription.unsubscribe();
  }
}
