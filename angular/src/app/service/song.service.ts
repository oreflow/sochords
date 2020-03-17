import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Action, DocumentSnapshot, QuerySnapshot } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { map, share, shareReplay, switchMap, catchError } from 'rxjs/operators';
import {v4 as uuidv4} from 'uuid';

import { FirestoreService, SoChordCollection }  from 'app/service/firestore.service';
import { songs }  from 'gen/proto/songs';
import { Errors } from 'app/errors';

@Injectable({providedIn: 'root'})
export default class SongService {
  _mySongsSubscription: Subscription;
  _mySongs: Promise<Observable<songs.Song[]>>;

  constructor(
    private firestoreService: FirestoreService,
    private auth: AngularFireAuth) {
    this._createMySongsObservable();
  }

  _createMySongsObservable() {
    this._mySongs= this.auth.currentUser.then((user) => {
      return Observable.create((observer) => {
        this.firestoreService.getCollectionRef(SoChordCollection.SONG)
          .ref.where('ownerUid', '==', user.uid)
          .onSnapshot((querySnapshot: QuerySnapshot<any>) => {
            console.log('onSnapshot');
            observer.next(querySnapshot.docs.map((snapshot) => {
              return songs.Song.create(snapshot.data());
            }));
          });
      }).pipe(shareReplay(1));
    });
  }

  getMySongs(): Promise<Observable<songs.Song[]>> {
    return this._mySongs;
  }

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
}

