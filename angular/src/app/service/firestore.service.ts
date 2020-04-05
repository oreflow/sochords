
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from 'environments/environment';

export enum SoChordCollection {
  SONG = 'SONG',
  CHORD = 'CHORD',
}

@Injectable({providedIn: 'root'})
export class FirestoreService {

  constructor( private firestore: AngularFirestore) {}

  getDocRef(collection: SoChordCollection, id: string) {
    return this.getCollectionRef(collection).doc(id);
  }

  getCollectionRef(collection: SoChordCollection) {
    return this.firestore.collection(`${environment.firestorePrefix}${collection}`);
  }
}

