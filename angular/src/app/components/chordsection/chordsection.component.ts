import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

import { instructions } from 'gen/proto/instructions';
import { songs } from 'gen/proto/songs';

const DRAGGING_ATTRIBUTE = 'dragging';

@Component({
  selector: 'chord-section',
  templateUrl: './chordsection.component.html',
  styleUrls: ['./chordsection.component.scss']
})
export class ChordSectionComponent implements OnInit {
  editingLyricLine: Map<number, boolean> = new Map();
  chordsByOffset: Map<number, Map<number, instructions.Chord[]>> = new Map();

  @Input() editing: boolean;
  @Input() chordSection: songs.ChordSection;
  @Output() updated = new EventEmitter<songs.ChordSection>();

  ngOnInit() {
    if(!this.chordSection.instruction) {
      this.chordSection.instruction = {
        chordsAndLyrics: [],
        chords: [],
      };
    }
    this._updateChordsByOffset();
  }

  addChordsAndLyrics() {
    this.chordSection.instruction.chordsAndLyrics.push(
      instructions.ChordsAndLyrics.create({
        chordsInLyric: [],
      }));
    this.onUpdate();
  }

  clearChords(cal: instructions.ChordsAndLyrics) {
    cal.chordsInLyric = [];
    this._updateChordsByOffset();
    this.onUpdate();
  }

  removeChordsAndLyrics(cal: instructions.ChordsAndLyrics) {
    const cals = this.chordSection.instruction.chordsAndLyrics;
    cals.splice(cals.indexOf(cal), 1);
    this.onUpdate();
  }

  chordDragStart($event, chord: instructions.Chord) {
    $event.dataTransfer.setData('chord', JSON.stringify(chord));
  }

  setDragOverAttr($event) {
    $event.target.setAttribute(DRAGGING_ATTRIBUTE, '');
    $event.preventDefault();
  }

  removeDragOverAttr($event) {
    $event.target.removeAttribute(DRAGGING_ATTRIBUTE, '');
    $event.preventDefault();
  }

  droppedOnCharacter($event, cal: instructions.ChordsAndLyrics, offset: number) {
    $event.target.removeAttribute(DRAGGING_ATTRIBUTE, '');
    const chord: instructions.Chord = JSON.parse($event.dataTransfer.getData('chord'));
    if (!cal.chordsInLyric) cal.chordsInLyric = [];
    cal.chordsInLyric.push({ offset, chord });
    this._updateChordsByOffset();
    this.onUpdate();
  }

  addChord() {
    if (!this.chordSection.instruction.chords) this.chordSection.instruction.chords = [];
    this.chordSection.instruction.chords.push({});
    this.onUpdate();
  }

  removeChord(chord: instructions.Chord) {
    const chords = this.chordSection.instruction.chords;
    chords.splice(chords.indexOf(chord), 1);
    this.onUpdate();
  }

  _updateChordsByOffset() {
    this.chordsByOffset = new Map();
    this.chordSection.instruction.chordsAndLyrics.forEach((cal, index) => {
      this.chordsByOffset.set(index, new Map());
      if (!cal.chordsInLyric) return;
      cal.chordsInLyric.forEach((cil) => {
        if (!this.chordsByOffset.get(index).has(cil.offset))
          this.chordsByOffset.get(index).set(cil.offset, []);
        this.chordsByOffset.get(index).get(cil.offset).push(cil.chord);
      });
    });
  }

  onUpdate() {
    this.chordSection.instruction.chordsAndLyrics.forEach((cal) => console.log(cal.lyricLine));
    if (!this.editing) return;
    this.updated.emit(this.chordSection);
  }
}
