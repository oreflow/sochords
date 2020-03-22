import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, switchMap, withLatestFrom, map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { songs } from 'gen/proto/songs';
import SongService from 'app/service/song.service';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchControl = new FormControl();
  filteredSearch: Observable<songs.SongSearchResult[]>;

  constructor(
    private router: Router,
    private songService: SongService) {}

  async ngOnInit() {
    this.filteredSearch = this.searchControl.valueChanges.pipe(
      withLatestFrom(this.songService.getMySongs()),
      map(([search, songs]) => {
        const normalizedSearch = this._normalize(search);
        return songs.filter((song) => {
          const normalizedTitle = this._normalize(song.info?.title)
          if (normalizedTitle?.indexOf(normalizedSearch) >= 0) {
            return true;
          }
          for (const artist of song?.info?.artists || []) {
            const normalizedArtist = this._normalize(artist?.name);
            if (normalizedArtist.indexOf(normalizedSearch) >= 0) {
              return true;
            }
          }
        }).slice(0, 5);
      }));
  }

  _normalize(input: string) {
    return input?.normalize('NFKD').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  }


  selectedSong(song: songs.Song) {
    this.router.navigate(['song', song.id]);
  }
}
