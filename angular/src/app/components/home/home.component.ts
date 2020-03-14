import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

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

  constructor(private songService: SongService) {}

  ngOnInit() {
    this.filteredSearch = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this.songService.searchSong(value)));
  }
}
