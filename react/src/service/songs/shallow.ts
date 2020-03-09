import {
  Strum,
  Chord,
  ChordInstruction,
  Instruction,
  InstructionSection,
  PickInstruction,
  Song,
  SongSection,
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

  _createChorusInstruction() {
    const defaultStrum = [Strum.DOWN, Strum.NONE, Strum.DOWN, Strum.UP, Strum.NONE, Strum.UP, Strum.DOWN, Strum.UP];
    const shortStrum = [Strum.DOWN, Strum.NONE, Strum.DOWN, Strum.UP];
    const chord1 = new Chord();
    chord1.setName('Am');
    chord1.setStrummingPatternList(defaultStrum);
    const chord2 = new Chord();
    chord2.setName('D');
    chord2.setStrummingPatternList(defaultStrum);
    const chord3 = new Chord();
    chord3.setName('G');
    chord3.setStrummingPatternList(shortStrum);
    const chord4 = new Chord();
    chord4.setName('D');
    chord4.setStrummingPatternList(shortStrum);
    const chord5 = new Chord();
    chord5.setName('Em');
    chord5.setStrummingPatternList(defaultStrum);

    const chordInstruction = new ChordInstruction();
    chordInstruction.setChordsList([chord1, chord2, chord3, chord4, chord5]);
    const instructionSection = new InstructionSection();
    instructionSection.setChordInstruction(chordInstruction);
    const instruction = new Instruction();
    instruction.addSections(instructionSection);
    return instruction;
  }

  _createBridgeInstruction() {
    const D = Strum.DOWN;
    const strum = [D, D, D, D, D, D, D, D];
    const bm = new Chord();
    bm.setName('Bm');
    bm.setStrummingPatternList(strum);
    const d = new Chord();
    d.setName('D');
    d.setStrummingPatternList(strum);
    const a = new Chord();
    a.setName('A');
    a.setStrummingPatternList(strum);
    const em = new Chord();
    em.setName('Em');
    em.setStrummingPatternList(strum);

    const chordInstruction = new ChordInstruction();
    chordInstruction.setChordsList([bm, d, a, em, bm, d, a]);
    const instructionSection = new InstructionSection();
    instructionSection.setChordInstruction(chordInstruction);
    const instruction = new Instruction();
    instruction.addSections(instructionSection);
    return instruction;
  }

  _createChorus2Instruction() {
    const D = Strum.DOWN, U = Strum.UP, N = Strum.NONE;
    const strum = [D, N, D, N, D, N, D, U];
    const am = new Chord();
    am.setName('Am');
    am.setStrummingPatternList(strum);
    const d = new Chord();
    d.setName('D');
    d.setStrummingPatternList(strum);
    const g = new Chord();
    g.setName('G');
    g.setStrummingPatternList(strum);
    const em = new Chord();
    em.setName('Em');
    em.setStrummingPatternList(strum);

    const chordInstruction = new ChordInstruction();
    chordInstruction.setChordsList([am, am, d, d, g, d, em, em]);
    const instructionSection = new InstructionSection();
    instructionSection.setChordInstruction(chordInstruction);
    const instruction = new Instruction();
    instruction.addSections(instructionSection);
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

    const chorus1Section = new SongSection();
    chorus1Section.setSection(SongSection.Section.CHORUS);
    chorus1Section.setNumber(1);
    song.addSections(chorus1Section);
    song.getInstructionsMap().set(songSectionToString(chorus1Section), this._createChorusInstruction());

    const chorus1Vocal = new Vocal();
    chorus1Vocal.addLines(`I'm off the deep end, watch as I dive in`);
    chorus1Vocal.addLines(`I'll never meet the ground`);
    chorus1Vocal.addLines(`Crash through the surface, where they can't hurt us`);
    chorus1Vocal.addLines(`We're far from the shallow now`);
    chorus1Vocal.addLines(`In the shallow, shallow`);
    chorus1Vocal.addLines(`In the shallow, shallow`);
    chorus1Vocal.addLines(`In the shallow, shallow`);
    chorus1Vocal.addLines(`We're far from the shallow now`);
    song.getVocalsMap().set(songSectionToString(chorus1Section), chorus1Vocal);

    const bridgeSection = new SongSection();
    bridgeSection.setSection(SongSection.Section.BRIDGE);
    song.addSections(bridgeSection);
    song.getInstructionsMap().set(songSectionToString(bridgeSection), this._createBridgeInstruction());

    const bridgeVocal = new Vocal();
    bridgeVocal.addLines(`Oh, oh, oh, oh`);
    bridgeVocal.addLines(`Whoah!`);
    song.getVocalsMap().set(songSectionToString(bridgeSection), bridgeVocal);

    const chorus2Section = new SongSection();
    chorus2Section.setSection(SongSection.Section.CHORUS);
    chorus2Section.setNumber(2);
    song.addSections(chorus2Section);
    song.getInstructionsMap().set(songSectionToString(chorus2Section), this._createChorus2Instruction());

    const chorus2Vocal = new Vocal();
    chorus2Vocal.addLines(`I'm off the deep end, watch as I dive in`);
    chorus2Vocal.addLines(`I'll never meet the ground`);
    chorus2Vocal.addLines(`Crash through the surface, where they can't hurt us`);
    chorus2Vocal.addLines(`We're far from the shallow now`);
    chorus2Vocal.addLines(`In the shallow, shallow`);
    chorus2Vocal.addLines(`In the shallow, shallow`);
    chorus2Vocal.addLines(`In the shallow, shallow`);
    chorus2Vocal.addLines(`We're far from the shallow now`);
    song.getVocalsMap().set(songSectionToString(chorus2Section), chorus2Vocal);

    return song;
  }
}
