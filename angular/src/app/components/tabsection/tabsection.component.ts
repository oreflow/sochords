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
    if (!this.tabSection.blockLyrics) this.tabSection.blockLyrics = {};
    if (!this.tabSection.instruction) {
      this.tabSection.instruction = instructions.TabInstruction.create({
        tabBlocks: []
      });
    }
  }

  _getEmptyBlock(size: number) {
    const picks = [];
    for(let i = 0; i < size; i++) {
      picks.push({});
    }
    return instructions.TabInstructionBlock.create({picks});
  }

  getMergedChords(block: instructions.TabInstructionBlock): {chord: string, size: number}[] {
    const mergedChords = [];
    return block.picks
      .reduce((acc: {chord: string, size: number}[], stringCombination) => {
        const chord = stringCombination.chord || '';
        if (acc[acc.length - 1]?.chord === chord) {
          acc[acc.length - 1].size++;
        } else {
          acc.push({chord: stringCombination.chord || '', size: 1});
        }
        return acc;
      }, []);
  }

  removePick(block: instructions.TabInstructionBlock, pick: instructions.StringCombination) {
    block.picks.splice(block.picks.indexOf(pick), 1);
    this.onUpdate();
  }

  addPick(block: instructions.TabInstructionBlock) {
    block.picks.push({});
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
      const lastBlock = this.tabSection.instruction
        .tabBlocks[this.tabSection.instruction.tabBlocks.length - 1];
      const size = lastBlock.picks.length;
      const newBlock = this._getEmptyBlock(size);
      for (let i = 0; i < size; i++) {
        if (lastBlock.picks[i].guide) {
          newBlock.picks[i].guide = lastBlock.picks[i].guide;
        }
      }
      this.tabSection.instruction.tabBlocks.push(newBlock);
    }
    this.onUpdate();
  }

  setBlockLyricsEnabled(enabled: boolean) {
    this.tabSection.blockLyrics.enabled = enabled;
    console.log(this.tabSection);
    this.onUpdate();
  }
  lyricsTextUpdate(event) {
    console.log(event);
    event.target.resizeToFitContent(true);

  }

  onUpdate() {
    if (!this.editing) return;
    this.updated.emit(this.tabSection);
  }
}
