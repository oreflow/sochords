import { Component, OnInit, Input} from '@angular/core';
import { chords } from 'gen/proto/chords';

const GUITAR_STRINGS = ['e2', 'a', 'd', 'g', 'b', 'e4'];

@Component({
  selector: 'chord-print',
  templateUrl: './chordprint.component.html',
  styleUrls: ['./chordprint.component.scss']
})
export class ChordPrintComponent implements OnInit {
  guitarStrings = GUITAR_STRINGS;
  barChord: {fret: string; startString: string; width: number; }|undefined;
  frets: string[];

  @Input() chord: chords.GuitarChord;

  ngOnInit() {
    console.log(this.chord);
    this._setFrets();
    this._setBar();
  }

  _setFrets() {
    const maxFret = Math.max(...this._playedStringsAsIntArray());
    if (maxFret <= 4) {
      this.frets = ['1', '2', '3', '4'];
    } else {
      const minFret = Math.min(...this._playedStringsAsIntArray());
      this.frets = [minFret, minFret + 1, minFret + 2, minFret + 3].map(String);
    }
  }

  _setBar() {
    const numberOfInputs = this._playedStringsAsIntArray().filter((fret) => fret > 0).length;
    if (numberOfInputs > 4) {
      const cp = this.chord.chordPattern;
      const minFret = Math.min(...this._playedStringsAsIntArray());
      const stringFretArray = GUITAR_STRINGS.map((gs) => parseInt(cp[gs]));
      const firstIndex = stringFretArray.indexOf(minFret)
      const lastIndex = stringFretArray.lastIndexOf(minFret)
      this.barChord = {
        fret: String(minFret),
        startString: GUITAR_STRINGS[firstIndex],
        width: lastIndex - firstIndex + 1,
      };
    }
  }

  _playedStringsAsIntArray(): number[] {
    const cp = this.chord.chordPattern;
    return GUITAR_STRINGS
      .filter((key) => cp[key].length > 0)
      .map((key) => parseInt(cp[key]));
  }

  getFretClass(fret: string) {
    if (['3', '5', '7', '9', '15', '17', '19'].includes(fret)) {
      return ['single-dot'];
    }
    if (fret === '12') {
      return ['double-dot'];
    }

    return [];
  }

  getInstructionCellClass(gs: string, fret: string) {
    if (this.barChord?.fret === fret && this.barChord.startString === gs) {
      return [`bar-chord-width-${this.barChord.width}`];
    }
    return [];
  }
}
