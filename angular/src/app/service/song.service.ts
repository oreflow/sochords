import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Action, DocumentSnapshot, QuerySnapshot } from '@angular/fire/firestore';
import { Observable, Observer, Subscription, Subject, ReplaySubject } from 'rxjs';
import { map, share, shareReplay, switchMap, catchError } from 'rxjs/operators';
import {v4 as uuidv4} from 'uuid';

import { FirestoreService, SoChordCollection }  from 'app/service/firestore.service';
import { songs }  from 'gen/proto/songs';
import { Errors } from 'app/errors';

@Injectable({providedIn: 'root'})
export default class SongService {
  _cancelMySongsSubscription: () => void;
  _mySongs: Subject<songs.Song[]> = new ReplaySubject(1);

  constructor(
    private firestoreService: FirestoreService,
    private auth: AngularFireAuth) {
    auth.user.subscribe((newUser) => this._subscribeToSongUpdates(newUser));
  }

  async _subscribeToSongUpdates(user: firebase.User) {
    if (this._cancelMySongsSubscription) this._cancelMySongsSubscription();
    if (!user) return;
    this._cancelMySongsSubscription = this.firestoreService
      .getCollectionRef(SoChordCollection.SONG)
      .ref.where('ownerUid', '==', user.uid)
      .onSnapshot((querySnapshot: QuerySnapshot<any>) => {
        this._mySongs.next(querySnapshot.docs.map((snapshot) => {
          return songs.Song.create(snapshot.data());
        }));
      });
    await this.firestoreService
      .getCollectionRef(SoChordCollection.CHORD).get().toPromise().then((data) => {
        console.log(data);
      });
  }

  getMySongs(): Observable<songs.Song[]> {
    return this._mySongs.asObservable();
  }

  async getMySongsSnapshot(): Promise<songs.Song[]> {
    const user = await this.auth.currentUser;
    return this.firestoreService.getCollectionRef(SoChordCollection.SONG)
    .ref.where('ownerUid', '==', user.uid)
    .get()
    .then((querySnapshot: QuerySnapshot<any>) => {
      return querySnapshot.docs.map((snapshot) => songs.Song.create(snapshot.data()));
    });
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

  async createCopyOfSong(song: songs.Song): Promise<songs.Song> {
    const user = await this.auth.currentUser;
    if (user == null) {
      return Promise.reject('User needs to sign in to create song');
    }
    song.id = uuidv4();
    song.ownerUid = user.uid;
    const createdDoc = await this.firestoreService
    .getDocRef(SoChordCollection.SONG, song.id)
    .set(songs.Song.toObject(song));
    return song;
  }

  getSong(id: string): Observable<songs.Song> {
    return this.firestoreService
    .getDocRef(SoChordCollection.SONG, id)
    .snapshotChanges()
    .pipe(
      map((snapshot: Action<DocumentSnapshot<any>>) => {
        Errors.checkExists(snapshot, 'Song not found.');
        return songs.Song.create(snapshot.payload.data());
      }));
  }

  updateSong(song: songs.Song): Promise<void> {
    return this.firestoreService
    .getDocRef(SoChordCollection.SONG, song.id)
    .set(songs.Song.toObject(song));
  }
}

