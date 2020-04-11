import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';

import ChordService from 'app/service/chord.service';
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
  chordsByOffset: Map<string, Map<number, instructions.IChordInLyric[]>> = new Map();
  chordNames: string[]; 

  @Input() editing: boolean;
  @Input() chordSection: songs.ChordSection;
  @Output() updated = new EventEmitter<songs.ChordSection>();

  constructor(private chordService: ChordService) {}

  ngOnInit() {
    if (!this.chordSection.instruction) this.chordSection.instruction = {};
    if (!this.chordSection.instruction.chordsAndLyrics) this.chordSection.instruction.chordsAndLyrics = [];
    if (!this.chordSection.instruction.chords) this.chordSection.instruction.chords = [];
    // Tmp fix, if missing IDs for CALs or CILs, fix this.
    this.chordSection?.instruction?.chordsAndLyrics.forEach((cal) => {
      cal.id = cal.id || uuidv4();
      if (!cal.chordsInLyric) cal.chordsInLyric = [];
      cal.chordsInLyric.forEach((cil) => {
        cil.id = cil.id || uuidv4();
      });
    });
    this._updateChordsByOffset();
    this._loadChordNames();
  }

  async _loadChordNames() {
    const chordNames = await this.chordService.getChordNames();
    this.chordNames = Array.from(new Set(chordNames));
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

  existingChordDragStart($event, calId: string, cilId: string) {
    $event.dataTransfer.setData('calId', calId);
    $event.dataTransfer.setData('cilId', cilId);
  }

  setDragOverAttr($event) {
    $event.target.setAttribute(DRAGGING_ATTRIBUTE, '');
    $event.preventDefault();
  }

  removeDragOverAttr($event) {
    $event.target.removeAttribute(DRAGGING_ATTRIBUTE, '');
    $event.preventDefault();
  }

  removeInlineChord(cal: instructions.ChordsAndLyrics, cilId: string) {
    cal.chordsInLyric = cal.chordsInLyric.filter(cil => cil.id !== cilId);
    this._updateChordsByOffset();
    this.onUpdate();
  }

  droppedOnCharacter($event, cal: instructions.ChordsAndLyrics, offset: number) {
    $event.target.removeAttribute(DRAGGING_ATTRIBUTE, '');
    if ($event.dataTransfer.getData('calId')) {
      // The chord was dragged to be moved.
      const calId: string = $event.dataTransfer.getData('calId');
      const cilId: string = $event.dataTransfer.getData('cilId');

      const dragCal = this.chordSection.instruction.chordsAndLyrics.find((cal) => cal.id === calId);
      const dragCil = dragCal.chordsInLyric.find(cil => cil.id === cilId);

      dragCal.chordsInLyric = dragCal.chordsInLyric.filter((cil) => cil.id !== cilId);
      cal.chordsInLyric.push({ offset, chord: dragCil.chord, id: uuidv4() });
    } else {
      // The chord was to create new.
      const chord: instructions.Chord = JSON.parse($event.dataTransfer.getData('chord'));
      if (!cal.chordsInLyric) cal.chordsInLyric = [];
      cal.chordsInLyric.push({ offset, chord, id: uuidv4() });
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
      ...new Array(10).fill(''),
      ...(cal?.lyricLine?.split('') || []),
      ...new Array(10).fill(''),
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
        this.chordsByOffset.get(cal.id).get(cil.offset).push(cil);
      });
    });
  }

  onUpdate() {
    if (!this.editing) return;
    this.updated.emit(this.chordSection);
  }
}
