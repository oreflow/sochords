import {Observable, Observer} from 'rxjs';

import {
  Song,
} from 'gen/proto/messages_pb';

import Shallow from 'src/service/songs/shallow';

export class SchordService {

  _currentSong: Observable<Song>;

  constructor() {
    this._currentSong = Observable.create((observer: Observer<Song>) => {
      observer.next(new Shallow().getSong());
    });
  }

  song(): Observable<Song> {
    return this._currentSong;
  }
}
