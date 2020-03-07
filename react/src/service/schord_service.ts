import {Observable, Observer} from 'rxjs';

import {
  Instruction,
  InstructionSection,
  PickInstruction,
  Song,
  SongSection,
  StringCombination,
  Vocal,
} from 'gen/proto/messages_pb';

import {songSectionToString} from 'src/common/common';

export class SchordService {

  _currentSong: Observable<Song>;

  constructor() {
    this._currentSong = Observable.create((observer: Observer<Song>) => {
      observer.next(this._getShallow());
    });
  }


  song(): Observable<Song> {
    return this._currentSong;
  }

  _createStringCombination(
    args: {
      e4?: number;
      b?: number;
      g?: number;
      d?: number;
      a?: number;
      e2?: number;
      name?: string;
    }): StringCombination {
      const sc = new StringCombination();
      sc.setE4((args.e4 !== undefined) ? args.e4 : -1);
      sc.setB((args.b !== undefined) ? args.b : -1);
      sc.setG((args.g !== undefined) ? args.g : -1);
      sc.setD((args.d !== undefined) ? args.d : -1);
      sc.setA((args.a !== undefined) ? args.a : -1);
      sc.setE2((args.e2 !== undefined) ? args.e2 : -1);
      sc.setName(args.name ?? '');
      return sc;
    }


  _getShallow(): Song  {
    const song = new Song();

    const introSection = new SongSection();
    introSection.setSection(SongSection.Section.INTRO);
    song.addSections(introSection);
    const introPicks = new PickInstruction()
    introPicks.addPicks(this._createStringCombination({e2: 0}));
    introPicks.addPicks(this._createStringCombination({d: 2}));
    introPicks.addPicks(this._createStringCombination({b: 3}));
    introPicks.addPicks(this._createStringCombination({g: 0}));
    introPicks.addPicks(this._createStringCombination({e2: 2}));
    introPicks.addPicks(this._createStringCombination({b: 3, g: 2}));
    introPicks.addPicks(this._createStringCombination({}));
    introPicks.addPicks(this._createStringCombination({b: 3, g: 0, e2: 3, name: 'G'}));
    const introInstructionSection = new InstructionSection();
    introInstructionSection.setPickInstruction(introPicks);
    const introInstruction = new Instruction();
    introInstruction.addSections(introInstructionSection);
    song.getInstructionsMap().set(songSectionToString(introSection), introInstruction);

    const verse1Section = new SongSection();
    verse1Section.setSection(SongSection.Section.VERSE);
    verse1Section.setNumber(1);

    const verse1Instruction = new Instruction();

    const verse1InstructionSection = new InstructionSection();
    const verse1Picks = new PickInstruction()
    verse1Picks.addPicks(this._createStringCombination({e2: 0}));
    verse1Picks.addPicks(this._createStringCombination({d: 2}));
    verse1Picks.addPicks(this._createStringCombination({b: 3}));
    verse1Picks.addPicks(this._createStringCombination({g: 0}));
    verse1Picks.addPicks(this._createStringCombination({e2: 2}));
    verse1Picks.addPicks(this._createStringCombination({b: 3, g: 2}));
    verse1Picks.addPicks(this._createStringCombination({}));
    verse1Picks.addPicks(this._createStringCombination({b: 3, g: 0, e2: 3, name: 'G'}));
    verse1InstructionSection.setPickInstruction(verse1Picks);
    verse1Instruction.addSections(verse1InstructionSection);


    const verse1InstructionSection2 = new InstructionSection();
    const verse1Picks2 = new PickInstruction()
    verse1Picks2.addPicks(this._createStringCombination({}));
    verse1Picks2.addPicks(this._createStringCombination({}));
    verse1Picks2.addPicks(this._createStringCombination({}));
    verse1Picks2.addPicks(this._createStringCombination({}));
    verse1Picks2.addPicks(this._createStringCombination({}));
    verse1Picks2.addPicks(this._createStringCombination({}));
    verse1Picks2.addPicks(this._createStringCombination({}));
    verse1Picks2.addPicks(this._createStringCombination({}));
    verse1InstructionSection2.setPickInstruction(verse1Picks2);
    verse1Instruction.addSections(verse1InstructionSection2);


    const verse1InstructionSection3 = new InstructionSection();
    const verse1Picks3 = new PickInstruction()
    verse1Picks3.addPicks(this._createStringCombination({a: 3}));
    verse1Picks3.addPicks(this._createStringCombination({d: 2}));
    verse1Picks3.addPicks(this._createStringCombination({b: 1}));
    verse1Picks3.addPicks(this._createStringCombination({g: 0}));
    verse1Picks3.addPicks(this._createStringCombination({d: 2}));
    verse1Picks3.addPicks(this._createStringCombination({e2: 0}));
    verse1Picks3.addPicks(this._createStringCombination({b: 1}));
    verse1Picks3.addPicks(this._createStringCombination({g: 0}));
    verse1InstructionSection3.setPickInstruction(verse1Picks3);
    verse1Instruction.addSections(verse1InstructionSection3);

    const verse1InstructionSection4 = new InstructionSection();
    const verse1Picks4 = new PickInstruction()
    verse1Picks4.addPicks(this._createStringCombination({b: 3, g: 0, e2: 3}));
    verse1Picks4.addPicks(this._createStringCombination({}));
    verse1Picks4.addPicks(this._createStringCombination({}));
    verse1Picks4.addPicks(this._createStringCombination({}));
    verse1Picks4.addPicks(this._createStringCombination({b: 3, g: 2, d: 0}));
    verse1Picks4.addPicks(this._createStringCombination({}));
    verse1Picks4.addPicks(this._createStringCombination({}));
    verse1Picks4.addPicks(this._createStringCombination({}));
    verse1InstructionSection4.setPickInstruction(verse1Picks4);
    verse1Instruction.addSections(verse1InstructionSection4);

    song.getInstructionsMap().set(songSectionToString(verse1Section), verse1Instruction);

    const verse1Vocal = new Vocal();
    verse1Vocal.addLines(`Tell me somethin', girl`);
    verse1Vocal.addLines(`Are you happy in this modern world?`);
    verse1Vocal.addLines(`Or do you need more?`);
    verse1Vocal.addLines(`Is there somethin' else you're searchin' for?`);
    verse1Vocal.addLines(`I'm falling`);
    verse1Vocal.addLines(`In all the good times I find myself`);
    verse1Vocal.addLines(`Longin' for change`);
    verse1Vocal.addLines(`And in the bad times I fear myself`);

    song.addSections(verse1Section);
    song.getVocalsMap().set(songSectionToString(verse1Section), verse1Vocal);

    return song;
  }

}
/*


Tell me something, boy
Aren't you tired tryin' to fill that void?
Or do you need more?
Ain't it hard keeping it so hardcore?
I'm falling
In all the good times I find myself
Longing for change
And in the bad times I fear myself
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
