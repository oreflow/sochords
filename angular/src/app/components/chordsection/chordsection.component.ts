import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';

import ChordService from 'app/service/chord.service';
import { chords } from 'gen/proto/chords';
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
  isAddingBlock: boolean = false;
  blockAddContent: string = '';

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

  addChordsAndLyrics(lyric?: string) {
    const cil = instructions.ChordsAndLyrics.create({
        id: uuidv4(),
        lyricLine: lyric,
        chordsInLyric: [],
      });
    this.chordSection.instruction.chordsAndLyrics.push(cil);
    this.editingLyricLine.set(cil.id, !lyric);
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
      const songChord: chords.SongChord = JSON.parse($event.dataTransfer.getData('chord'));
      console.log(songChord);
      if (!cal.chordsInLyric) cal.chordsInLyric = [];
      cal.chordsInLyric.push({ offset, songChord, id: uuidv4() });
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
    const cs = this.chordSection.instruction.chords;
    cs.splice(cs.indexOf(chord), 1);
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

  addBlockOfLyrics() {
    this.blockAddContent.split('\n').forEach((line) => {
      if (!line) return; 
      this.addChordsAndLyrics(line);
    });
    this.blockAddContent = '';
    this.isAddingBlock = false;
  }

  addStrummingPattern() {
    this.chordSection.instruction.strummingPattern = 
      instructions.StrummingPattern.create({});
    this.onUpdate();
  }

  removeStrummingPattern() {
    this.chordSection.instruction.strummingPattern = undefined;
    this.onUpdate();
  }

  onUpdate() {
    if (!this.editing) return;
    this.updated.emit(this.chordSection);
  }
}
