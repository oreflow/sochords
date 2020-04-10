import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { Action, DocumentSnapshot, QuerySnapshot } from '@angular/fire/firestore';
import { Observable, Observer, Subscription, Subject, BehaviorSubject } from 'rxjs';
import { map, share, shareReplay, switchMap, catchError } from 'rxjs/operators';
import {v4 as uuidv4} from 'uuid';

import { BlobstoreService, SoChordsBlobType }  from 'app/service/blobstore.service';
import { chords }  from 'gen/proto/chords';
import { Errors } from 'app/errors';

@Injectable({providedIn: 'root'})
export default class ChordService {
  _allchordsPromise: Promise<Map<string, Subject<chords.IGuitarChord[]>>>;
  _allchordsPromiseResolver: (value: Map<string, Subject<chords.IGuitarChord[]>>) => void;

  constructor(
    private blobstore: BlobstoreService,
    private auth: AngularFireAuth) {
    this._allchordsPromise = new Promise((resolve) => {
      this._allchordsPromiseResolver = resolve;
      });
    auth.user.subscribe((newUser) => this._fetchDefaultChords(newUser));
  }

  async _fetchDefaultChords(user: firebase.User) {
    if (!user) return;
    const chordData = await this.blobstore.readJsonBlob(SoChordsBlobType.CHORDS, 'top3allchords');
    const cs = chords.GuitarChords.create(chordData);
    const chordMap: Map<string, chords.IGuitarChord[]> = new Map();
    for (const chord of cs.chords) {
      if (!chordMap.has(chord.name)) {
        chordMap.set(chord.name, []);
      }
      chordMap.get(chord.name).push(chord);
    }
    const subjectMap = new Map();
    chordMap.forEach((chordList, chordName) => {
      chordList.sort((chordA, chordB) => chordA.complexityRank - chordB.complexityRank);
      subjectMap.set(chordName, new BehaviorSubject(chordList));
    });
    this._allchordsPromiseResolver(subjectMap);
  }

  async getChordNames(): Promise<Array<string>> {
    const map = await this._allchordsPromise;
    return Array.from(map.keys());
  }

  async getChords(name: string): Promise<Observable<chords.IGuitarChord[]>> {
    const map = await this._allchordsPromise;
    this.fetchAllVariants(name); // Note: fire-and-forget.
    return map.get(name).asObservable();
  }

  async fetchAllVariants(chordName: string) {
    const existingChordsMap = await this._allchordsPromise;
    if (!existingChordsMap.has(chordName)) {
      console.error('Attempted to fetch non existing chord');
    }
    const chordData = await this.blobstore.readJsonBlob(SoChordsBlobType.CHORDS, chordName);
    const cs = chords.GuitarChords.create(chordData);
    cs.chords.sort((chordA, chordB) => chordA.complexityRank - chordB.complexityRank);
    existingChordsMap.get(chordName).next(cs.chords);
  }
}

