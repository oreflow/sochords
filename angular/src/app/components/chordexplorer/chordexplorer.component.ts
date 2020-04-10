import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';


import { chords } from 'gen/proto/chords';
import ChordService from 'app/service/chord.service';
import { ErrorType, Errors } from 'app/errors';


@Component({
  selector: 'chord-explorer-root',
  templateUrl: './chordexplorer.component.html',
  styleUrls: ['./chordexplorer.component.scss']
})
export class ChordExplorerComponent implements OnInit {
  searchControl = new FormControl();
  filteredSearch: Observable<string[]>;
  selectedChord: string;
  selectedChordVariants$: Observable<chords.IGuitarChord[]>;

  constructor( private chordService: ChordService) {}

  async ngOnInit() {
    this.filteredSearch = this.searchControl.valueChanges.pipe(
      switchMap(async (search) => {
        const chords = await this.chordService.getChordNames()
        const filteredChordNames: string[] = chords.filter((chordName) => {
          return this._normalize(chordName).indexOf(this._normalize(search)) >= 0;
        }).sort((c1, c2) => c1.length - c2.length)
        return Array.from(new Set(filteredChordNames)).splice(0, 5);
      }));
  }

  _normalize(input: string) {
    return input?.normalize('NFKD').replace(/[^a-zA-Z0-9\\#]/g, '').toLowerCase();
  }

  async selectChord(chordName: string) {
    this.selectedChord = chordName;
    this.selectedChordVariants$ = await this.chordService.getChords(chordName);
    console.log(this.selectedChordVariants$);
  }
}
