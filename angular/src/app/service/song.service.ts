import { Injectable } from '@angular/core';
import { songs }  from 'gen/proto/songs';

@Injectable({providedIn: 'root'})
export default class SongService {
  constructor() {}

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

