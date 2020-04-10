import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

import { Errors } from 'app/errors';


export enum SoChordsBlobType {
  CHORDS = 'chords',
}

@Injectable({providedIn: 'root'})
export class BlobstoreService {

  constructor(private storage: AngularFireStorage) {}

  readJsonBlob(type: SoChordsBlobType, blobName: string): Promise<Object> {
    return new Promise(async (resolve, reject) => {
      const url = `${type}/${blobName}.json`;
      const downloadUrl = await this.storage.ref(url).getDownloadURL().toPromise();
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = async (event) => {
        try {
          var responseText = await xhr.response.text();
          resolve(JSON.parse(responseText))
        } catch (error) {
          reject(error);
        }
      };
      xhr.onerror = (error) => reject(error);
      xhr.open('GET', downloadUrl);
      xhr.send();
    });
  }
}
