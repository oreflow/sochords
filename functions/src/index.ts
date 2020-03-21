import { firestore, initializeApp } from 'firebase-admin';
import CopySongDevToProd from './copysongdevtoprod';

initializeApp();

let _firestore: firestore.Firestore;
export const getFirestore = () => {
  if (!_firestore) {
    _firestore = firestore();
    _firestore.settings({ timestampsInSnapshots: true });
  }
  return _firestore;
}

export const copySongDevToProd = new CopySongDevToProd(getFirestore()).onRequest;
