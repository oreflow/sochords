import {
  Strum,
  Chord,
  ChordInstruction,
  Instruction,
  InstructionSection,
  PickInstruction,
  Song,
  SongSection,
  StringCombination,
  Tempo,
  Vocal,
} from 'gen/proto/messages_pb';

import {
  songSectionToString, 
  createStringCombination,
} from 'src/common/common';

export default class ThePartingGlass {

  _gSection() {
    const pickInstruction = new PickInstruction()
    pickInstruction.addPicks(createStringCombination({e2: 3, name: 'G'}));
    pickInstruction.addPicks(createStringCombination({g: 0, name: 'G'}));
    pickInstruction.addPicks(createStringCombination({b: 0, name: 'G'}));
    pickInstruction.addPicks(createStringCombination({e4: 3, name: 'G'}));
    const instructionSection = new InstructionSection();
    instructionSection.setPickInstruction(pickInstruction);
    return instructionSection;
  }

  _amSection() {
    const pickInstruction = new PickInstruction()
    pickInstruction.addPicks(createStringCombination({a: 0, name: 'Am'}));
    pickInstruction.addPicks(createStringCombination({g: 2, name: 'Am'}));
    pickInstruction.addPicks(createStringCombination({b: 1, name: 'Am'}));
    pickInstruction.addPicks(createStringCombination({e4: 0, name: 'Am'}));
    const instructionSection = new InstructionSection();
    instructionSection.setPickInstruction(pickInstruction);
    return instructionSection;
  }

  _dSection() {
    const pickInstruction = new PickInstruction()
    pickInstruction.addPicks(createStringCombination({d: 0, name: 'D'}));
    pickInstruction.addPicks(createStringCombination({g: 2, name: 'D'}));
    pickInstruction.addPicks(createStringCombination({b: 3, name: 'D'}));
    pickInstruction.addPicks(createStringCombination({e4: 2, name: 'D'}));
    const instructionSection = new InstructionSection();
    instructionSection.setPickInstruction(pickInstruction);
    return instructionSection;
  }

  _cSection() {
    const pickInstruction = new PickInstruction()
    pickInstruction.addPicks(createStringCombination({a: 3, name: 'C'}));
    pickInstruction.addPicks(createStringCombination({g: 0, name: 'C'}));
    pickInstruction.addPicks(createStringCombination({b: 1, name: 'C'}));
    pickInstruction.addPicks(createStringCombination({e4: 0, name: 'C'}));
    const instructionSection = new InstructionSection();
    instructionSection.setPickInstruction(pickInstruction);
    return instructionSection;
  }

  _emSection() {
    const pickInstruction = new PickInstruction()
    pickInstruction.addPicks(createStringCombination({e2: 0, name: 'Em'}));
    pickInstruction.addPicks(createStringCombination({g: 0, name: 'Em'}));
    pickInstruction.addPicks(createStringCombination({b: 0, name: 'Em'}));
    pickInstruction.addPicks(createStringCombination({e4: 0, name: 'Em'}));
    const instructionSection = new InstructionSection();
    instructionSection.setPickInstruction(pickInstruction);
    return instructionSection;
  }

  _guideInstruction() {
    const instruction = new Instruction();
    instruction.addSections(this._emSection());
    instruction.addSections(this._cSection());
    instruction.addSections(this._gSection());
    instruction.addSections(this._dSection());
    instruction.addSections(this._amSection());
    return instruction;
  }


  getSong(): Song  {
    const song = new Song();

    const guideSection = new SongSection();
    guideSection.setSection(SongSection.Section.INTRO);
    song.addSections(guideSection);
    song.getInstructionsMap().set(songSectionToString(guideSection), this._guideInstruction());

    return song;
  }
}
