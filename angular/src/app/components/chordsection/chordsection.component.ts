import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';

import { instructions } from 'gen/proto/instructions';
import { songs } from 'gen/proto/songs';

const DRAGGING_ATTRIBUTE = 'dragging';

@Component({
  selector: 'chord-section',
  templateUrl: './chordsection.component.html',
  styleUrls: ['./chordsection.component.scss']
})
export class ChordSectionComponent implements OnInit {
  editingLyricLine: Map<string, boolean> = new Map();
  chordsByOffset: Map<string, Map<number, instructions.IChord[]>> = new Map();

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
    if (this.chordSection?.instruction?.chordsAndLyrics) {
      this.chordSection?.instruction?.chordsAndLyrics.forEach((cal) => {
        cal.id = cal.id || uuidv4();
      });
    }
    this._updateChordsByOffset();
  }

  addChordsAndLyrics() {
    const id = uuidv4();
    this.chordSection.instruction.chordsAndLyrics.push(
      instructions.ChordsAndLyrics.create({
        id,
        chordsInLyric: [],
      }));
    this.editingLyricLine.set(id, true);
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
    this._updateChordsByOffset();
    this.onUpdate();
  }

  newChordDragStart($event, chord: instructions.Chord) {
    $event.dataTransfer.setData('chord', JSON.stringify(chord));
  }

  existingChordDragStart($event, calId: string, charIndex: number, chord: instructions.Chord) {
    $event.dataTransfer.setData('calId', calId);
    $event.dataTransfer.setData('charIndex', charIndex);
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

  removeInlineChord(cal: instructions.ChordsAndLyrics, charIndex: number, chord: instructions.Chord) {
    const cil = cal.chordsInLyric
      .find(cil => cil.chord === chord && cil.offset === charIndex);
    cal.chordsInLyric.splice(cal.chordsInLyric.indexOf(cil), 1);
    this._updateChordsByOffset();
    this.onUpdate();
  }

  droppedOnCharacter($event, cal: instructions.ChordsAndLyrics, offset: number) {
    $event.target.removeAttribute(DRAGGING_ATTRIBUTE, '');
    if ($event.dataTransfer.getData('calId')) {
      const calId: string = $event.dataTransfer.getData('calId');
      const charIndex: number = parseInt($event.dataTransfer.getData('charIndex'), 10);
      const chordString = $event.dataTransfer.getData('chord');

      const dragCal = this.chordSection.instruction.chordsAndLyrics.find((cal) => cal.id === calId);
      const dragCil = dragCal.chordsInLyric
        .find(cil => JSON.stringify(cil.chord) === chordString && cil.offset === charIndex);

      dragCal.chordsInLyric.splice(cal.chordsInLyric.indexOf(dragCil), 1);
      cal.chordsInLyric.push({ offset, chord: dragCil.chord });
    } else {
      const chord: instructions.Chord = JSON.parse($event.dataTransfer.getData('chord'));
      if (!cal.chordsInLyric) cal.chordsInLyric = [];
      cal.chordsInLyric.push({ offset, chord });
    }
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

  getAdjustedLyricLine(cal: instructions.ChordsAndLyrics) {
    // Pads lyric with 10 spaces on each side for extra chord-space.
    return [
      ...new Array(10).fill(' '),
      ...(cal?.lyricLine?.split('') || []),
      ...new Array(10).fill(' '),
    ];
  }

  _updateChordsByOffset() {
    this.chordsByOffset = new Map();
    this.chordSection.instruction.chordsAndLyrics.forEach((cal) => {
      this.chordsByOffset.set(cal.id, new Map());
      if (!cal.chordsInLyric) return;
      cal.chordsInLyric.forEach((cil) => {
        if (!this.chordsByOffset.get(cal.id).has(cil.offset))
          this.chordsByOffset.get(cal.id).set(cil.offset, []);
        this.chordsByOffset.get(cal.id).get(cil.offset).push(cil.chord);
      });
    });
  }

  onUpdate() {
    this.chordSection.instruction.chordsAndLyrics.forEach((cal) => console.log(cal.lyricLine));
    if (!this.editing) return;
    this.updated.emit(this.chordSection);
  }
}
