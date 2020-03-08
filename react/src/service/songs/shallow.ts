import {
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

export default class Shallow {

  _emptyPickInstruction() {
    const emptyPicks = new PickInstruction()
    emptyPicks.setTempo(Tempo.EIGHT);
    emptyPicks.addPicks(createStringCombination({}));
    emptyPicks.addPicks(createStringCombination({}));
    emptyPicks.addPicks(createStringCombination({}));
    emptyPicks.addPicks(createStringCombination({}));
    emptyPicks.addPicks(createStringCombination({}));
    emptyPicks.addPicks(createStringCombination({}));
    emptyPicks.addPicks(createStringCombination({}));
    emptyPicks.addPicks(createStringCombination({}));
    const instructionSection = new InstructionSection();
    instructionSection.setPickInstruction(emptyPicks);
    return instructionSection;
  }

  _commonFirstPickSection() {
    const pickInstruction = new PickInstruction()
    pickInstruction.setTempo(Tempo.EIGHT);
    pickInstruction.addPicks(createStringCombination({e2: 0, name: 'Em7'}));
    pickInstruction.addPicks(createStringCombination({d: 2, name: 'Em7'}));
    pickInstruction.addPicks(createStringCombination({b: 3, name: 'Em7'}));
    pickInstruction.addPicks(createStringCombination({g: 0, name: 'Em7'}));
    pickInstruction.addPicks(createStringCombination({e2: 2, name: 'D/F#'}));
    pickInstruction.addPicks(createStringCombination({b: 3, g: 2, name: 'D/F#'}));
    pickInstruction.addPicks(createStringCombination({}));
    pickInstruction.addPicks(createStringCombination({b: 3, g: 0, e2: 3, name: 'G'}));
    const instructionSection = new InstructionSection();
    instructionSection.setPickInstruction(pickInstruction);
    return instructionSection;
  }

  _createIntroInstruction(): Instruction {
    const pickInstruction3 = new PickInstruction()
    pickInstruction3.setTempo(Tempo.EIGHT);
    pickInstruction3.addPicks(createStringCombination({a: 3, name: 'C'}));
    pickInstruction3.addPicks(createStringCombination({d: 2, name: 'C'}));
    pickInstruction3.addPicks(createStringCombination({b: 1, name: 'C'}));
    pickInstruction3.addPicks(createStringCombination({b: 3}));
    pickInstruction3.addPicks(createStringCombination({g: 0}));
    pickInstruction3.addPicks(createStringCombination({a: 3}));
    pickInstruction3.addPicks(createStringCombination({e4: 0}));
    pickInstruction3.addPicks(createStringCombination({b: 3}));
    const instructionSection3 = new InstructionSection();
    instructionSection3.setPickInstruction(pickInstruction3);

    const pickInstruction4 = new PickInstruction()
    pickInstruction4.setTempo(Tempo.EIGHT);
    pickInstruction4.addPicks(createStringCombination({e2: 3, name: 'G'}));
    pickInstruction4.addPicks(createStringCombination({b: 3, g: 0, name: 'G'}));
    pickInstruction4.addPicks(createStringCombination({}));
    pickInstruction4.addPicks(createStringCombination({b: 3, g: 2, d: 0, name: 'D'}));
    pickInstruction4.addPicks(createStringCombination({}));
    pickInstruction4.addPicks(createStringCombination({e4: 0}));
    pickInstruction4.addPicks(createStringCombination({b: 3}));
    pickInstruction4.addPicks(createStringCombination({g: 2}));
    const instructionSection4 = new InstructionSection();
    instructionSection4.setPickInstruction(pickInstruction4);

    const instruction = new Instruction();
    instruction.addSections(this._commonFirstPickSection());
    instruction.addSections(this._emptyPickInstruction());
    instruction.addSections(instructionSection3);
    instruction.addSections(instructionSection4);
    instruction.addSections(this._commonFirstPickSection());
    instruction.addSections(this._emptyPickInstruction());
    return instruction;
  }

  _createVerseInstruction(): Instruction {
    const pickInstruction3 = new PickInstruction()
    pickInstruction3.setTempo(Tempo.EIGHT);
    pickInstruction3.addPicks(createStringCombination({a: 3, name: 'C'}));
    pickInstruction3.addPicks(createStringCombination({d: 2, name: 'C'}));
    pickInstruction3.addPicks(createStringCombination({b: 1, name: 'C'}));
    pickInstruction3.addPicks(createStringCombination({g: 0, name: 'C'}));
    pickInstruction3.addPicks(createStringCombination({d: 2, name: 'C'}));
    pickInstruction3.addPicks(createStringCombination({e4: 0, name: 'C'}));
    pickInstruction3.addPicks(createStringCombination({b: 1, name: 'C'}));
    pickInstruction3.addPicks(createStringCombination({g: 0, name: 'C'}));
    const instructionSection3 = new InstructionSection();
    instructionSection3.setPickInstruction(pickInstruction3);

    const pickInstruction4 = new PickInstruction()
    pickInstruction4.setTempo(Tempo.EIGHT);
    pickInstruction4.addPicks(createStringCombination({e2: 3, name: 'G'}));
    pickInstruction4.addPicks(createStringCombination({b: 3, g: 0, name: 'G'}));
    pickInstruction4.addPicks(createStringCombination({}));
    pickInstruction4.addPicks(createStringCombination({b: 3, g: 2, d: 0, name: 'D'}));
    pickInstruction4.addPicks(createStringCombination({}));
    pickInstruction4.addPicks(createStringCombination({}));
    pickInstruction4.addPicks(createStringCombination({}));
    pickInstruction4.addPicks(createStringCombination({}));
    const instructionSection4 = new InstructionSection();
    instructionSection4.setPickInstruction(pickInstruction4);

    const instruction = new Instruction();
    instruction.addSections(this._commonFirstPickSection());
    instruction.addSections(this._emptyPickInstruction());
    instruction.addSections(instructionSection3);
    instruction.addSections(instructionSection4);
    return instruction;
  }

  _createBreak(): Instruction {
    const instruction = new Instruction();
    instruction.addSections(this._commonFirstPickSection());
    instruction.addSections(this._emptyPickInstruction());
    instruction.addSections(this._commonFirstPickSection());
    instruction.addSections(this._emptyPickInstruction());
    return instruction;
  }

  getSong(): Song  {
    const song = new Song();

    const introSection = new SongSection();
    introSection.setSection(SongSection.Section.INTRO);
    song.addSections(introSection);
    song.getInstructionsMap().set(songSectionToString(introSection), this._createIntroInstruction());

    const verse1Section = new SongSection();
    verse1Section.setSection(SongSection.Section.VERSE);
    verse1Section.setNumber(1);
    song.addSections(verse1Section);
    song.getInstructionsMap().set(songSectionToString(verse1Section), this._createVerseInstruction());

    const breakSection = new SongSection();
    breakSection.setSection(SongSection.Section.BREAK);
    breakSection.setNumber(1);
    song.addSections(breakSection);
    song.getInstructionsMap().set(songSectionToString(breakSection), this._createBreak());

    const verse2Section = new SongSection();
    verse2Section.setSection(SongSection.Section.VERSE);
    verse2Section.setNumber(2);
    song.addSections(verse2Section);
    song.getInstructionsMap().set(songSectionToString(verse2Section), this._createVerseInstruction());

    const verse1Vocal = new Vocal();
    verse1Vocal.addLines(`Tell me somethin', girl`);
    verse1Vocal.addLines(`Are you happy in this modern world?`);
    verse1Vocal.addLines(`Or do you need more?`);
    verse1Vocal.addLines(`Is there somethin' else you're searchin' for?`);
    verse1Vocal.addLines(`I'm falling`);
    verse1Vocal.addLines(`In all the good times I find myself`);
    verse1Vocal.addLines(`Longin' for change`);
    verse1Vocal.addLines(`And in the bad times I fear myself`);
    song.getVocalsMap().set(songSectionToString(verse1Section), verse1Vocal);

    const verse2Vocal = new Vocal();
    verse2Vocal.addLines(`Tell me something, boy`);
    verse2Vocal.addLines(`Aren't you tired tryin' to fill that void?`);
    verse2Vocal.addLines(`Or do you need more?`);
    verse2Vocal.addLines(`Ain't it hard keeping it so hardcore?`);
    verse2Vocal.addLines(`I'm falling`);
    verse2Vocal.addLines(`In all the good times I find myself`);
    verse2Vocal.addLines(`Longing for change`);
    verse2Vocal.addLines(`And in the bad times I fear myself`);
    song.getVocalsMap().set(songSectionToString(verse2Section), verse2Vocal);

    return song;
  }
}
/*
  I'm off the deep end, watch as I dive in
  I'll never meet the ground
  Crash through the surface, where they can't hurt us
  We're far from the shallow now
  In the shallow, shallow
  In the shallow, shallow
  In the shallow, shallow
  We're far from the shallow now
  Oh, oh, oh, oh
  Whoah!
  I'm off the deep end, watch as I dive in
  I'll never meet the ground
  Crash through the surface, where they can't hurt us
  We're far from the shallow now
  In the shallow, shallow
  In the shallow, shallow
  In the shallow, shallow
  We're far from the shallow now
*/
