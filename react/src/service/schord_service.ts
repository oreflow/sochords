import {Subject} from 'rxjs';

import {
  Song,
  SoChordSong, 
  SoChordSongMap,
} from 'gen/proto/messages_pb';

import Shallow from 'src/service/songs/shallow';
import GoodRiddance from 'src/service/songs/good_riddance';
import ThePartingGlass from 'src/service/songs/the_parting_glass';

export default class SchordService {
  _currentSong: Subject<Song> = new Subject();

  song(): Subject<Song> {
    return this._currentSong;
  }

  selectSong(song: SoChordSongMap[keyof SoChordSongMap]) {
    switch(song) {
      case SoChordSong.SHALLOW:
        this._currentSong.next(new Shallow().getSong());
        break;
      case SoChordSong.GOOD_RIDDANCE:
        this._currentSong.next(new GoodRiddance().getSong());
        break;
      case SoChordSong.THE_PARTING_GLASS:
        this._currentSong.next(new ThePartingGlass().getSong());
        break;
    }
  }
}
