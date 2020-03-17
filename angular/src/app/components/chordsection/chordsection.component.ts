import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

import { instructions } from 'gen/proto/instructions';
import { songs } from 'gen/proto/songs';

@Component({
  selector: 'tab-section',
  templateUrl: './tabsection.component.html',
  styleUrls: ['./tabsection.component.scss']
})
export class TabSectionComponent implements OnInit {

  @Input() editing: boolean;
  @Input() tabSection: songs.TabSection;
  @Output() updated = new EventEmitter<songs.TabSection>();

  ngOnInit() {
    if (Object.keys(this.tabSection).length === 0) {
      this.tabSection.instruction = instructions.TabInstruction.create({
        tabBlocks: []
      });
    }
  }

  _getEmptyBlock(size: number) {
    const picks = [];
    for(let i = 0; i < size; i++) {
      picks.push(instructions.StringCombination.create({
        e4: '',
        b: '',
        g: '',
        d: '',
        a: '',
        e2: '',
        chord: '',
        guide: '',
      }));
    }
    return instructions.TabInstructionBlock.create({picks});
  }

  getMergedChords(block: instructions.TabInstructionBlock): {chord: string, size: number}[] {
    const mergedChords = [];
    return block.picks
      .reduce((acc: {chord: string, size: number}[], stringCombination) => {
        if (acc[acc.length - 1]?.chord === stringCombination.chord) {
          acc[acc.length - 1].size++;
        } else {
          acc.push({chord: stringCombination.chord, size: 1});
        }
        return acc;
      }, []);
  }

  removePick(block: instructions.TabInstructionBlock, pick: instructions.StringCombination) {
    block.picks.splice(block.picks.indexOf(pick), 1);
    this.onUpdate();
  }

  removeBlock(block: instructions.TabInstructionBlock) {
    this.tabSection.instruction.tabBlocks.splice(
      this.tabSection.instruction.tabBlocks.indexOf(block), 1);
    this.onUpdate();
  }

  addTabBlock() {
    if (this.tabSection.instruction.tabBlocks.length === 0) {
      this.tabSection.instruction.tabBlocks.push(this._getEmptyBlock(8));
    } else {
      const size = this.tabSection.instruction
        .tabBlocks[this.tabSection.instruction.tabBlocks.length - 1].picks.length;
      this.tabSection.instruction.tabBlocks.push(this._getEmptyBlock(size));
    }
    this.onUpdate();
  }

  onUpdate() {
    if (!this.editing) return;
    this.updated.emit(this.tabSection);
  }
}
