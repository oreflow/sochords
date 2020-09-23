import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';

import ChordService from 'app/service/chord.service';
import { instructions } from 'gen/proto/instructions';
import { songs } from 'gen/proto/songs';
import { chords } from 'gen/proto/chords';

const DRAGGING_ATTRIBUTE = 'dragging';

@Component({
  selector: 'chord-sidenav',
  templateUrl: './chordsidenav.component.html',
  styleUrls: ['./chordsidenav.component.scss']
})
export class ChordSidenavComponent implements OnInit {
  allChordNames;

  @Input() song: songs.Song;
  @Output() updated = new EventEmitter<songs.Song>();

  constructor(private chordService: ChordService) {}

  ngOnInit() {
    this._loadChordNames();
    if (!this.song.chords?.length) {
      this._migrateChords();
    }
  }

  _migrateChords() {
    const chordNames: Set<string> = new Set();
    this.song.sections.forEach((ss) => {
      if (ss.sectionType === songs.SongSection.SectionType.CHORD_SECTION) {
        ss.chordSection.instruction?.chords?.forEach((c) => {
          chordNames.add(c.name);
        });
        ss.chordSection.instruction?.chordsAndLyrics?.forEach((cil) => {
        });
      }
    });
    this.song.chords = Array.from(chordNames).map((cn) => 
      chords.SongChord.create({
        id: uuidv4(),
        name: cn,
      }));
  }

  async _loadChordNames() {
    const chordNames = await this.chordService.getChordNames();
    this.allChordNames = Array.from(new Set(chordNames));
  }

  newChordDragStart($event, chord: chords.SongChord) {
    $event.dataTransfer.setData('chord', JSON.stringify(chord));
  }

  addChord() {
    this.onUpdate();
  }

  removeChord(chord: instructions.Chord) {
  }

  onUpdate() {
    this.updated.emit(this.song);
  }
}
