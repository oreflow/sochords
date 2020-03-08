// package: com.oreflow.schord
// file: proto/messages.proto

import * as jspb from "google-protobuf";

export class StringCombination extends jspb.Message {
  getE4(): number;
  setE4(value: number): void;

  getB(): number;
  setB(value: number): void;

  getG(): number;
  setG(value: number): void;

  getD(): number;
  setD(value: number): void;

  getA(): number;
  setA(value: number): void;

  getE2(): number;
  setE2(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringCombination.AsObject;
  static toObject(includeInstance: boolean, msg: StringCombination): StringCombination.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StringCombination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringCombination;
  static deserializeBinaryFromReader(message: StringCombination, reader: jspb.BinaryReader): StringCombination;
}

export namespace StringCombination {
  export type AsObject = {
    e4: number,
    b: number,
    g: number,
    d: number,
    a: number,
    e2: number,
    name: string,
  }
}

export class PickInstruction extends jspb.Message {
  getTempo(): TempoMap[keyof TempoMap];
  setTempo(value: TempoMap[keyof TempoMap]): void;

  clearPicksList(): void;
  getPicksList(): Array<StringCombination>;
  setPicksList(value: Array<StringCombination>): void;
  addPicks(value?: StringCombination, index?: number): StringCombination;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PickInstruction.AsObject;
  static toObject(includeInstance: boolean, msg: PickInstruction): PickInstruction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PickInstruction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PickInstruction;
  static deserializeBinaryFromReader(message: PickInstruction, reader: jspb.BinaryReader): PickInstruction;
}

export namespace PickInstruction {
  export type AsObject = {
    tempo: TempoMap[keyof TempoMap],
    picksList: Array<StringCombination.AsObject>,
  }
}

export class Chord extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getTempo(): TempoMap[keyof TempoMap];
  setTempo(value: TempoMap[keyof TempoMap]): void;

  clearStrummingPatternList(): void;
  getStrummingPatternList(): Array<StrumMap[keyof StrumMap]>;
  setStrummingPatternList(value: Array<StrumMap[keyof StrumMap]>): void;
  addStrummingPattern(value: StrumMap[keyof StrumMap], index?: number): StrumMap[keyof StrumMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Chord.AsObject;
  static toObject(includeInstance: boolean, msg: Chord): Chord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Chord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Chord;
  static deserializeBinaryFromReader(message: Chord, reader: jspb.BinaryReader): Chord;
}

export namespace Chord {
  export type AsObject = {
    name: string,
    tempo: TempoMap[keyof TempoMap],
    strummingPatternList: Array<StrumMap[keyof StrumMap]>,
  }
}

export class ChordInstruction extends jspb.Message {
  clearChordsList(): void;
  getChordsList(): Array<Chord>;
  setChordsList(value: Array<Chord>): void;
  addChords(value?: Chord, index?: number): Chord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChordInstruction.AsObject;
  static toObject(includeInstance: boolean, msg: ChordInstruction): ChordInstruction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChordInstruction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChordInstruction;
  static deserializeBinaryFromReader(message: ChordInstruction, reader: jspb.BinaryReader): ChordInstruction;
}

export namespace ChordInstruction {
  export type AsObject = {
    chordsList: Array<Chord.AsObject>,
  }
}

export class InstructionSection extends jspb.Message {
  hasPickInstruction(): boolean;
  clearPickInstruction(): void;
  getPickInstruction(): PickInstruction | undefined;
  setPickInstruction(value?: PickInstruction): void;

  hasChordInstruction(): boolean;
  clearChordInstruction(): void;
  getChordInstruction(): ChordInstruction | undefined;
  setChordInstruction(value?: ChordInstruction): void;

  getInstructionCase(): InstructionSection.InstructionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstructionSection.AsObject;
  static toObject(includeInstance: boolean, msg: InstructionSection): InstructionSection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InstructionSection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstructionSection;
  static deserializeBinaryFromReader(message: InstructionSection, reader: jspb.BinaryReader): InstructionSection;
}

export namespace InstructionSection {
  export type AsObject = {
    pickInstruction?: PickInstruction.AsObject,
    chordInstruction?: ChordInstruction.AsObject,
  }

  export enum InstructionCase {
    INSTRUCTION_NOT_SET = 0,
    PICK_INSTRUCTION = 1,
    CHORD_INSTRUCTION = 2,
  }
}

export class Instruction extends jspb.Message {
  clearSectionsList(): void;
  getSectionsList(): Array<InstructionSection>;
  setSectionsList(value: Array<InstructionSection>): void;
  addSections(value?: InstructionSection, index?: number): InstructionSection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Instruction.AsObject;
  static toObject(includeInstance: boolean, msg: Instruction): Instruction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Instruction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Instruction;
  static deserializeBinaryFromReader(message: Instruction, reader: jspb.BinaryReader): Instruction;
}

export namespace Instruction {
  export type AsObject = {
    sectionsList: Array<InstructionSection.AsObject>,
  }
}

export class Vocal extends jspb.Message {
  clearLinesList(): void;
  getLinesList(): Array<string>;
  setLinesList(value: Array<string>): void;
  addLines(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vocal.AsObject;
  static toObject(includeInstance: boolean, msg: Vocal): Vocal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Vocal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vocal;
  static deserializeBinaryFromReader(message: Vocal, reader: jspb.BinaryReader): Vocal;
}

export namespace Vocal {
  export type AsObject = {
    linesList: Array<string>,
  }
}

export class SongSection extends jspb.Message {
  getSection(): SongSection.SectionMap[keyof SongSection.SectionMap];
  setSection(value: SongSection.SectionMap[keyof SongSection.SectionMap]): void;

  getNumber(): number;
  setNumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SongSection.AsObject;
  static toObject(includeInstance: boolean, msg: SongSection): SongSection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SongSection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SongSection;
  static deserializeBinaryFromReader(message: SongSection, reader: jspb.BinaryReader): SongSection;
}

export namespace SongSection {
  export type AsObject = {
    section: SongSection.SectionMap[keyof SongSection.SectionMap],
    number: number,
  }

  export interface SectionMap {
    UNKNOWN_SECTION: 0;
    INTRO: 1;
    VERSE: 2;
    PRE_CHORUS: 3;
    CHORUS: 4;
    BRIDGE: 5;
    OUTRO: 6;
    POST_CHORUS: 7;
    SOLO: 8;
    BREAK: 9;
  }

  export const Section: SectionMap;
}

export class Song extends jspb.Message {
  clearSectionsList(): void;
  getSectionsList(): Array<SongSection>;
  setSectionsList(value: Array<SongSection>): void;
  addSections(value?: SongSection, index?: number): SongSection;

  getInstructionsMap(): jspb.Map<string, Instruction>;
  clearInstructionsMap(): void;
  getVocalsMap(): jspb.Map<string, Vocal>;
  clearVocalsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Song.AsObject;
  static toObject(includeInstance: boolean, msg: Song): Song.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Song, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Song;
  static deserializeBinaryFromReader(message: Song, reader: jspb.BinaryReader): Song;
}

export namespace Song {
  export type AsObject = {
    sectionsList: Array<SongSection.AsObject>,
    instructionsMap: Array<[string, Instruction.AsObject]>,
    vocalsMap: Array<[string, Vocal.AsObject]>,
  }
}

export interface TempoMap {
  UNKNOWN_TEMPO: 0;
  EIGHT: 1;
}

export const Tempo: TempoMap;

export interface StrumMap {
  NONE: 0;
  UP: 1;
  DOWN: 2;
}

export const Strum: StrumMap;

