import {
  Strum,
  Chord,
  ChordInstruction,
  Instruction,
  InstructionSection,
  PickInstruction,
  Song,
  SongSection,
  Vocal,
} from 'gen/proto/messages_pb';

import {
  songSectionToString, 
  createStringCombination,
} from 'src/common/common';

export default class GoodRiddance {

  _introSection() {
    const pickInstruction = new PickInstruction()
    pickInstruction.addPicks(createStringCombination({e2: 3, name: 'G'}));
    pickInstruction.addPicks(createStringCombination({name: 'G'}));
    pickInstruction.addPicks(createStringCombination({d: 0, name: 'G'}));
    pickInstruction.addPicks(createStringCombination({g: 0, name: 'G'}));
    pickInstruction.addPicks(createStringCombination({d: 0, name: 'G'}));
    pickInstruction.addPicks(createStringCombination({name: 'G'}));
    pickInstruction.addPicks(createStringCombination({name: 'G'}));
    const instructionSection = new InstructionSection();
    instructionSection.setPickInstruction(pickInstruction);
    return instructionSection;
  }

  _IntroInstruction(): Instruction {
    const instruction = new Instruction();
    instruction.addSections(this._introSection());
    instruction.addSections(this._introSection());
    return instruction;
  }

  _gSection() {
    const pickInstruction = new PickInstruction()
    pickInstruction.addPicks(createStringCombination({e2: 3, name: 'G'}));
    pickInstruction.addPicks(createStringCombination({name: 'G'}));
    pickInstruction.addPicks(createStringCombination({g: 0, name: 'G'}));
    pickInstruction.addPicks(createStringCombination({b: 3, name: 'G'}));
    pickInstruction.addPicks(createStringCombination({g: 0, name: 'G'}));
    pickInstruction.addPicks(createStringCombination({d: 0, name: 'G'}));
    pickInstruction.addPicks(createStringCombination({g: 0, name: 'G'}));
    const instructionSection = new InstructionSection();
    instructionSection.setPickInstruction(pickInstruction);
    return instructionSection;
  }

  _cadd9Section() {
    const pickInstruction = new PickInstruction()
    pickInstruction.addPicks(createStringCombination({a: 3, name: 'Cadd9'}));
    pickInstruction.addPicks(createStringCombination({name: 'Cadd9'}));
    pickInstruction.addPicks(createStringCombination({g: 0, name: 'Cadd9'}));
    pickInstruction.addPicks(createStringCombination({b: 3, name: 'Cadd9'}));
    pickInstruction.addPicks(createStringCombination({g: 0, name: 'Cadd9'}));
    pickInstruction.addPicks(createStringCombination({d: 2, name: 'Cadd9'}));
    pickInstruction.addPicks(createStringCombination({g: 0, name: 'Cadd9'}));
    const instructionSection = new InstructionSection();
    instructionSection.setPickInstruction(pickInstruction);
    return instructionSection;
  }

  _dSection() {
    const pickInstruction = new PickInstruction()
    pickInstruction.addPicks(createStringCombination({d: 0, name: 'D'}));
    pickInstruction.addPicks(createStringCombination({name: 'D'}));
    pickInstruction.addPicks(createStringCombination({g: 2, name: 'D'}));
    pickInstruction.addPicks(createStringCombination({b: 3, name: 'D'}));
    pickInstruction.addPicks(createStringCombination({g: 2, name: 'D'}));
    pickInstruction.addPicks(createStringCombination({d: 0, name: 'D'}));
    pickInstruction.addPicks(createStringCombination({g: 2, name: 'D'}));
    const instructionSection = new InstructionSection();
    instructionSection.setPickInstruction(pickInstruction);
    return instructionSection;
  }

  _emSection() {
    const pickInstruction = new PickInstruction()
    pickInstruction.addPicks(createStringCombination({e2: 0, name: 'Em'}));
    pickInstruction.addPicks(createStringCombination({name: 'Em'}));
    pickInstruction.addPicks(createStringCombination({g: 0, name: 'Em'}));
    pickInstruction.addPicks(createStringCombination({b: 0, name: 'Em'}));
    pickInstruction.addPicks(createStringCombination({g: 0, name: 'Em'}));
    pickInstruction.addPicks(createStringCombination({d: 2, name: 'Em'}));
    pickInstruction.addPicks(createStringCombination({g: 0, name: 'Em'}));
    const instructionSection = new InstructionSection();
    instructionSection.setPickInstruction(pickInstruction);
    return instructionSection;
  }

  _verseInstruction() {
    const instruction = new Instruction();
    instruction.addSections(this._gSection());
    instruction.addSections(this._gSection());
    instruction.addSections(this._cadd9Section());
    instruction.addSections(this._dSection());
    return instruction;
  }

  _preChorusInstruction() {
    const instruction = new Instruction();
    instruction.addSections(this._emSection());
    instruction.addSections(this._dSection());
    instruction.addSections(this._cadd9Section());
    instruction.addSections(this._gSection());
    return instruction;
  }

  _chorusInstruction() {
    const instruction = new Instruction();
    instruction.addSections(this._emSection());
    instruction.addSections(this._gSection());
    instruction.addSections(this._emSection());
    instruction.addSections(this._gSection());
    instruction.addSections(this._emSection());
    instruction.addSections(this._dSection());
    return instruction;
  }

  _verse2Instruction() {
    const D = Strum.DOWN, U = Strum.UP, N = Strum.NONE;
    const strum = [D, N, D, N, D, U, D, U, N, U, D, N, D, U, D, U];
    const g = new Chord();
    g.setName('G');
    g.setStrummingPatternList(strum);
    const cadd9 = new Chord();
    cadd9.setName('Cadd9');
    cadd9.setStrummingPatternList(strum);
    const d = new Chord();
    d.setName('D');
    d.setStrummingPatternList(strum);

    const chordInstruction = new ChordInstruction();
    chordInstruction.setChordsList([g, cadd9, d]);
    const instructionSection = new InstructionSection();
    instructionSection.setChordInstruction(chordInstruction);
    const instruction = new Instruction();
    instruction.addSections(instructionSection);
    return instruction;
  }

  _preChorus2Instruction() {
    const D = Strum.DOWN, U = Strum.UP, N = Strum.NONE;
    const strum = [D, N, D, N, D, U, D, U, N, U, D, N, D, U, D, U];
    const em = new Chord();
    em.setName('Em');
    em.setStrummingPatternList(strum);
    const g = new Chord();
    g.setName('G');
    g.setStrummingPatternList(strum);
    const cadd9 = new Chord();
    cadd9.setName('Cadd9');
    cadd9.setStrummingPatternList(strum);
    const d = new Chord();
    d.setName('D');
    d.setStrummingPatternList(strum);

    const chordInstruction = new ChordInstruction();
    chordInstruction.setChordsList([em, d, cadd9, g]);
    const instructionSection = new InstructionSection();
    instructionSection.setChordInstruction(chordInstruction);
    const instruction = new Instruction();
    instruction.addSections(instructionSection);
    return instruction;
  }


  _chorus2Instruction() {
    const D = Strum.DOWN, U = Strum.UP, N = Strum.NONE;
    const strum = [D, N, D, N, D, U, D, U, N, U, D, N, D, U, D, U];
    const em = new Chord();
    em.setName('Em');
    em.setStrummingPatternList(strum);
    const g = new Chord();
    g.setName('G');
    g.setStrummingPatternList(strum);
    const d = new Chord();
    d.setName('D');
    d.setStrummingPatternList(strum);

    const chordInstruction = new ChordInstruction();
    chordInstruction.setChordsList([em, g, em, g, em, d]);
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
    song.getInstructionsMap().set(songSectionToString(introSection), this._IntroInstruction());

    const verse1Section = new SongSection();
    verse1Section.setSection(SongSection.Section.VERSE);
    verse1Section.setNumber(1);
    song.addSections(verse1Section);
    song.getInstructionsMap().set(songSectionToString(verse1Section), this._verseInstruction());

    const verse1Vocal = new Vocal();
    verse1Vocal.addLines(`Another turning point, a fork stuck in the road`);
    verse1Vocal.addLines(`Time grabs you by the wrist, directs you where to go`);
    song.getVocalsMap().set(songSectionToString(verse1Section), verse1Vocal);

    const preChorus1Section = new SongSection();
    preChorus1Section.setSection(SongSection.Section.PRE_CHORUS);
    preChorus1Section.setNumber(1);
    song.addSections(preChorus1Section);
    song.getInstructionsMap().set(songSectionToString(preChorus1Section), this._preChorusInstruction());

    const preChorusVocal = new Vocal();
    preChorusVocal.addLines(`So make the best of this test and don't ask why`);
    preChorusVocal.addLines(`It's not a question, but a lesson learned in time`);
    song.getVocalsMap().set(songSectionToString(preChorus1Section), preChorusVocal);

    const chorus1Section = new SongSection();
    chorus1Section.setSection(SongSection.Section.CHORUS);
    chorus1Section.setNumber(1);
    song.addSections(chorus1Section);
    song.getInstructionsMap().set(songSectionToString(chorus1Section), this._chorusInstruction());

    const chorusVocal = new Vocal();
    chorusVocal.addLines(`It's something unpredictable, but in the end it's right`);
    chorusVocal.addLines(`I hope you had the time of your life`);
    song.getVocalsMap().set(songSectionToString(chorus1Section), chorusVocal);

    const verse2Section = new SongSection();
    verse2Section.setSection(SongSection.Section.VERSE);
    verse2Section.setNumber(2);
    song.addSections(verse2Section);
    song.getInstructionsMap().set(songSectionToString(verse2Section), this._verse2Instruction());

    const verse2Vocal = new Vocal();
    verse2Vocal.addLines(`So take the photographs and still frames in your mind`);
    verse2Vocal.addLines(`Hang it on a shelf in good health and good time`);
    song.getVocalsMap().set(songSectionToString(verse2Section), verse2Vocal);

    const preChorus2Section = new SongSection();
    preChorus2Section.setSection(SongSection.Section.PRE_CHORUS);
    preChorus2Section.setNumber(2);
    song.addSections(preChorus2Section);
    song.getInstructionsMap().set(songSectionToString(preChorus2Section), this._preChorus2Instruction());

    const preChorus2Vocal = new Vocal();
    preChorus2Vocal.addLines(`Tattoos of memories and dead skin on trial`);
    preChorus2Vocal.addLines(`For what it's worth it was worth all the while`);
    song.getVocalsMap().set(songSectionToString(preChorus2Section), preChorus2Vocal);

    const chorus2Section = new SongSection();
    chorus2Section.setSection(SongSection.Section.CHORUS);
    chorus2Section.setNumber(2);
    song.addSections(chorus2Section);
    song.getInstructionsMap().set(songSectionToString(chorus2Section), this._chorus2Instruction());
    song.getVocalsMap().set(songSectionToString(chorus2Section), chorusVocal);
    
    song.addSections(chorus2Section);
    song.addSections(chorus2Section);

    return song;
  }
}
