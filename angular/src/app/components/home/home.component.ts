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
    const mySongs = await this.songService.getMySongs();
    this.filteredSearch = this.searchControl.valueChanges.pipe(
      withLatestFrom(mySongs),
      map(([search, songs]) => {
        return songs.filter((song) => {
          if (song.info?.title?.toLowerCase().indexOf(search.toLowerCase()) >= 0) {
            return true;
          }
          for (const artist of song?.info?.artists || []) {
            if (artist?.name.toLowerCase().indexOf(search.toLowerCase()) >= 0) {
              return true;
            }
          }
        }).slice(0, 5);
      }));
  }

  selectedSong(song: songs.Song) {
    this.router.navigate(['song', song.id]);
  }
}
