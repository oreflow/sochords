import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';

import { instructions } from 'gen/proto/instructions';

@Component({
  selector: 'strumming-pattern',
  templateUrl: './strummingpattern.component.html',
  styleUrls: ['./strummingpattern.component.scss']
})
export class StrummingPatternComponent implements OnInit {
  strumDirection = instructions.Strum.StrumDirection;

  @Input() editing: boolean;
  @Input() strummingPattern: instructions.StrummingPattern;
  @Output() updated = new EventEmitter<instructions.StrummingPattern>();

  constructor() {}

  ngOnInit() {
    if (!this.strummingPattern?.strums?.length) {
      this.strummingPattern.strums = this._getDefaultStrums();
    }
  }

  _getDefaultStrums() {
    return [
      {direction: instructions.Strum.StrumDirection.DOWN},
      {direction: instructions.Strum.StrumDirection.UP},
      {direction: instructions.Strum.StrumDirection.DOWN},
      {direction: instructions.Strum.StrumDirection.UP},
      {direction: instructions.Strum.StrumDirection.DOWN},
      {direction: instructions.Strum.StrumDirection.UP},
      {direction: instructions.Strum.StrumDirection.DOWN},
      {direction: instructions.Strum.StrumDirection.UP},
    ];
  }

  setStrumDirection(
    strum: instructions.Strum, 
    direction: instructions.Strum.StrumDirection, 
    highlight: boolean) {
    strum.direction = direction;
    strum.isHighlighted = highlight;
    this.onUpdate();
  }

  addStrum() {
    if (this.strummingPattern.strums.length %2 === 1) {
      this.strummingPattern.strums.push(
        {direction: instructions.Strum.StrumDirection.UP});
    } else {
      this.strummingPattern.strums.push(
        {direction: instructions.Strum.StrumDirection.DOWN});
    }
    this.onUpdate();
  }

  removeStrum(strum) {
    this.strummingPattern.strums = this.strummingPattern.strums.filter(s => s !== strum);
    this.onUpdate();
  }

  onUpdate() {
    if (!this.editing) return;
    this.updated.emit(this.strummingPattern);
  }
}
