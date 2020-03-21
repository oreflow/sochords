import * as functions from 'firebase-functions';
import { firestore } from 'firebase-admin';

export default class CopySongDevToProd {
  constructor(private _firestore: firestore.Firestore) {}

  onRequest = functions.https.onRequest(async (request, response) => {
    try {
      const songId = request.query['songId'];
      const song = await this._firestore
        .collection('DEV_SONG')
        .doc(songId)
        .get();

      const data = song.data();
      if (data) {
        await this._firestore
          .collection('PROD_SONG')
          .doc(songId)
          .set(data);

        response.send(`Copied song: ${song.data()?.info?.title}`);
      } else {
        response.send(`Couldn't find data for song: "${songId}"`);
      }
    } catch (err) {
      response.send(`Error executing ${err}`);
    }
  })
}
