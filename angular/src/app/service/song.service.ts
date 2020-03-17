import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Action, DocumentSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import {v4 as uuidv4} from 'uuid';

import { FirestoreService, SoChordCollection }  from 'app/service/firestore.service';
import { songs }  from 'gen/proto/songs';
import { Errors } from 'app/errors';

@Injectable({providedIn: 'root'})
export default class SongService {

  constructor(
    private firestoreService: FirestoreService,
    private auth: AngularFireAuth) {}

  async createSong(songInfo: songs.SongInfo): Promise<songs.Song> {
    const user = await this.auth.currentUser;
    if (user == null) {
      return Promise.reject('User needs to sign in to create song');
    }
    const song = songs.Song.create({ 
      id: uuidv4(),
      state: songs.Song.State.DRAFT,
      info: songInfo,
      ownerUid: user.uid
    });
    const createdDoc = await this.firestoreService
      .getDocRef(SoChordCollection.SONG, song.id)
      .set(songs.Song.toObject(song));
    return song;
  }

  getSong(id: string): Observable<songs.Song> {
    console.log('Fetching Song from Firebase', id);
    return this.firestoreService
    .getDocRef(SoChordCollection.SONG, id)
    .snapshotChanges()
    .pipe(
      map((snapshot: Action<DocumentSnapshot<any>>) => {
        console.log(snapshot);
        Errors.checkExists(snapshot, 'Song not found.');
        return songs.Song.create(snapshot.payload.data());
      }));
  }

  updateSong(song: songs.Song): Promise<void> {
    console.log('Updating Song in Firebase', song);
    return this.firestoreService
    .getDocRef(SoChordCollection.SONG, song.id)
    .set(songs.Song.toObject(song));
  }

  searchSong(search: string): songs.SongSearchResult[] {
    const shallow = songs.SongSearchResult.create({
      id: 'shallow-kjh3i8rhfkwej',
      songInfo: songs.SongInfo.create({
        title: 'Shallow',
        artists: [
          {name: 'Lady Gaga'},
          {name: 'Bradley Cooper'},
        ],
      }),
    });
    const goodRiddance = songs.SongSearchResult.create({
      id: 'good-riddance-123456awswe',
      songInfo: songs.SongInfo.create({
        title: 'Good Riddance (Time of your life)',
        artists: [
          {name: 'Green Day'},
        ],
      }),
    });
    console.log(shallow);

    return [shallow, goodRiddance].filter((song) => song.songInfo.title.indexOf(search) >= 0);
  }
}

