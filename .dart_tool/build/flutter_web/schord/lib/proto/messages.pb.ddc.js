define(['dart_sdk', 'packages/protobuf/protobuf', 'packages/schord/proto/messages.pbenum'], function(dart_sdk, packages__protobuf__protobuf, packages__schord__proto__messages$46pbenum) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const protobuf = packages__protobuf__protobuf.protobuf;
  const messages$46pbenum = packages__schord__proto__messages$46pbenum.proto__messages$46pbenum;
  const messages$46pb = Object.create(dart.library);
  const $_get = dartx._get;
  let GeneratedMessageTovoid = () => (GeneratedMessageTovoid = dart.constFn(dart.fnType(dart.void, [protobuf.GeneratedMessage])))();
  let PbListOfStringCombination = () => (PbListOfStringCombination = dart.constFn(protobuf.PbList$(messages$46pb.StringCombination)))();
  let VoidToStringCombination = () => (VoidToStringCombination = dart.constFn(dart.fnType(messages$46pb.StringCombination, [])))();
  let PbListOfPickInstruction = () => (PbListOfPickInstruction = dart.constFn(protobuf.PbList$(messages$46pb.PickInstruction)))();
  let VoidToPickInstruction = () => (VoidToPickInstruction = dart.constFn(dart.fnType(messages$46pb.PickInstruction, [])))();
  let intToPickInstruction_Tempo = () => (intToPickInstruction_Tempo = dart.constFn(dart.fnType(messages$46pbenum.PickInstruction_Tempo, [core.int])))();
  let PbListOfChord = () => (PbListOfChord = dart.constFn(protobuf.PbList$(messages$46pb.Chord)))();
  let VoidToChord = () => (VoidToChord = dart.constFn(dart.fnType(messages$46pb.Chord, [])))();
  let PbListOfChordInstruction = () => (PbListOfChordInstruction = dart.constFn(protobuf.PbList$(messages$46pb.ChordInstruction)))();
  let VoidToChordInstruction = () => (VoidToChordInstruction = dart.constFn(dart.fnType(messages$46pb.ChordInstruction, [])))();
  let PbListOfInstruction = () => (PbListOfInstruction = dart.constFn(protobuf.PbList$(messages$46pb.Instruction)))();
  let VoidToInstruction = () => (VoidToInstruction = dart.constFn(dart.fnType(messages$46pb.Instruction, [])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let PbListOfVocal = () => (PbListOfVocal = dart.constFn(protobuf.PbList$(messages$46pb.Vocal)))();
  let VoidToVocal = () => (VoidToVocal = dart.constFn(dart.fnType(messages$46pb.Vocal, [])))();
  let PbListOfSongSection = () => (PbListOfSongSection = dart.constFn(protobuf.PbList$(messages$46pb.SongSection)))();
  let VoidToSongSection = () => (VoidToSongSection = dart.constFn(dart.fnType(messages$46pb.SongSection, [])))();
  let intToSongSection_Section = () => (intToSongSection_Section = dart.constFn(dart.fnType(messages$46pbenum.SongSection_Section, [core.int])))();
  let PbListOfSong = () => (PbListOfSong = dart.constFn(protobuf.PbList$(messages$46pb.Song)))();
  let VoidToSong = () => (VoidToSong = dart.constFn(dart.fnType(messages$46pb.Song, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: protobuf._EmptyExtensionRegistry.prototype
      });
    },
    get C1() {
      return C1 = dart.fn(messages$46pb.StringCombination.create, VoidToStringCombination());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: protobuf.PackageName.prototype,
        [PackageName_name]: "com.oreflow.schord"
      });
    },
    get C3() {
      return C3 = dart.fn(messages$46pb.PickInstruction.create, VoidToPickInstruction());
    },
    get C4() {
      return C4 = dart.fn(messages$46pbenum.PickInstruction_Tempo.valueOf, intToPickInstruction_Tempo());
    },
    get C5() {
      return C5 = dart.fn(messages$46pb.Chord.create, VoidToChord());
    },
    get C6() {
      return C6 = dart.fn(messages$46pb.ChordInstruction.create, VoidToChordInstruction());
    },
    get C7() {
      return C7 = dart.const({
        __proto__: messages$46pb.Instruction_Instruction.prototype,
        [_name$]: "Instruction_Instruction.pickInstruction",
        index: 0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: messages$46pb.Instruction_Instruction.prototype,
        [_name$]: "Instruction_Instruction.chordInstruction",
        index: 1
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: messages$46pb.Instruction_Instruction.prototype,
        [_name$]: "Instruction_Instruction.notSet",
        index: 2
      });
    },
    get C10() {
      return C10 = dart.constList([C7 || CT.C7, C8 || CT.C8, C9 || CT.C9], messages$46pb.Instruction_Instruction);
    },
    get C11() {
      return C11 = dart.fn(messages$46pb.Instruction.create, VoidToInstruction());
    },
    get C12() {
      return C12 = dart.constMap(core.int, messages$46pb.Instruction_Instruction, [1, C7 || CT.C7, 2, C8 || CT.C8, 0, C9 || CT.C9]);
    },
    get C13() {
      return C13 = dart.fn(messages$46pb.Vocal.create, VoidToVocal());
    },
    get C14() {
      return C14 = dart.fn(messages$46pb.SongSection.create, VoidToSongSection());
    },
    get C15() {
      return C15 = dart.fn(messages$46pbenum.SongSection_Section.valueOf, intToSongSection_Section());
    },
    get C16() {
      return C16 = dart.fn(messages$46pb.Song.create, VoidToSong());
    }
  });
  let C0;
  let C1;
  const PackageName_name = dart.privateName(protobuf, "PackageName.name");
  let C2;
  messages$46pb.StringCombination = class StringCombination extends protobuf.GeneratedMessage {
    static new() {
      return messages$46pb.StringCombination.create();
    }
    static fromBuffer(i, r = C0 || CT.C0) {
      let t0;
      t0 = messages$46pb.StringCombination.create();
      t0.mergeFromBuffer(i, r);
      return t0;
    }
    static fromJson(i, r = C0 || CT.C0) {
      let t0;
      t0 = messages$46pb.StringCombination.create();
      t0.mergeFromJson(i, r);
      return t0;
    }
    clone() {
      let t0;
      t0 = messages$46pb.StringCombination.new();
      t0.mergeFromMessage(this);
      return t0;
    }
    copyWith(updates) {
      return messages$46pb.StringCombination._check(super.copyWith(dart.fn(message => updates(messages$46pb.StringCombination.as(message)), GeneratedMessageTovoid())));
    }
    get info_() {
      return messages$46pb.StringCombination._i;
    }
    static create() {
      return new messages$46pb.StringCombination.__();
    }
    createEmptyInstance() {
      return messages$46pb.StringCombination.create();
    }
    static createRepeated() {
      return new (PbListOfStringCombination()).new();
    }
    static getDefault() {
      let t0;
      t0 = messages$46pb.StringCombination._defaultInstance;
      return t0 == null ? messages$46pb.StringCombination._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(messages$46pb.StringCombination, C1 || CT.C1) : t0;
    }
    get e4() {
      return this.$_getIZ(0);
    }
    set e4(v) {
      this.$_setSignedInt32(0, v);
    }
    hasE4() {
      return this.$_has(0);
    }
    clearE4() {
      return this.clearField(1);
    }
    get b() {
      return this.$_getIZ(1);
    }
    set b(v) {
      this.$_setSignedInt32(1, v);
    }
    hasB() {
      return this.$_has(1);
    }
    clearB() {
      return this.clearField(2);
    }
    get g() {
      return this.$_getIZ(2);
    }
    set g(v) {
      this.$_setSignedInt32(2, v);
    }
    hasG() {
      return this.$_has(2);
    }
    clearG() {
      return this.clearField(3);
    }
    get d() {
      return this.$_getIZ(3);
    }
    set d(v) {
      this.$_setSignedInt32(3, v);
    }
    hasD() {
      return this.$_has(3);
    }
    clearD() {
      return this.clearField(4);
    }
    get a() {
      return this.$_getIZ(4);
    }
    set a(v) {
      this.$_setSignedInt32(4, v);
    }
    hasA() {
      return this.$_has(4);
    }
    clearA() {
      return this.clearField(5);
    }
    get e2() {
      return this.$_getIZ(5);
    }
    set e2(v) {
      this.$_setSignedInt32(5, v);
    }
    hasE2() {
      return this.$_has(5);
    }
    clearE2() {
      return this.clearField(6);
    }
  };
  (messages$46pb.StringCombination.__ = function() {
    messages$46pb.StringCombination.__proto__.new.call(this);
    ;
  }).prototype = messages$46pb.StringCombination.prototype;
  dart.addTypeTests(messages$46pb.StringCombination);
  dart.setMethodSignature(messages$46pb.StringCombination, () => ({
    __proto__: dart.getMethods(messages$46pb.StringCombination.__proto__),
    clone: dart.fnType(messages$46pb.StringCombination, []),
    copyWith: dart.fnType(messages$46pb.StringCombination, [dart.fnType(dart.void, [messages$46pb.StringCombination])]),
    createEmptyInstance: dart.fnType(messages$46pb.StringCombination, []),
    hasE4: dart.fnType(core.bool, []),
    clearE4: dart.fnType(dart.void, []),
    hasB: dart.fnType(core.bool, []),
    clearB: dart.fnType(dart.void, []),
    hasG: dart.fnType(core.bool, []),
    clearG: dart.fnType(dart.void, []),
    hasD: dart.fnType(core.bool, []),
    clearD: dart.fnType(dart.void, []),
    hasA: dart.fnType(core.bool, []),
    clearA: dart.fnType(dart.void, []),
    hasE2: dart.fnType(core.bool, []),
    clearE2: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(messages$46pb.StringCombination, () => ({
    __proto__: dart.getGetters(messages$46pb.StringCombination.__proto__),
    info_: protobuf.BuilderInfo,
    e4: core.int,
    b: core.int,
    g: core.int,
    d: core.int,
    a: core.int,
    e2: core.int
  }));
  dart.setSetterSignature(messages$46pb.StringCombination, () => ({
    __proto__: dart.getSetters(messages$46pb.StringCombination.__proto__),
    e4: core.int,
    b: core.int,
    g: core.int,
    d: core.int,
    a: core.int,
    e2: core.int
  }));
  dart.setLibraryUri(messages$46pb.StringCombination, "package:schord/proto/messages.pb.dart");
  dart.defineLazy(messages$46pb.StringCombination, {
    /*messages$46pb.StringCombination._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new("StringCombination", {package: C2 || CT.C2, createEmptyInstance: C1 || CT.C1}), t0.a(core.int, 1, "e4", 2048), t0.a(core.int, 2, "b", 2048), t0.a(core.int, 3, "g", 2048), t0.a(core.int, 4, "d", 2048), t0.a(core.int, 5, "a", 2048), t0.a(core.int, 6, "e2", 2048), t0.hasRequiredFields = false, t0;
    },
    /*messages$46pb.StringCombination._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  });
  let C3;
  let C4;
  messages$46pb.PickInstruction = class PickInstruction extends protobuf.GeneratedMessage {
    static new() {
      return messages$46pb.PickInstruction.create();
    }
    static fromBuffer(i, r = C0 || CT.C0) {
      let t0;
      t0 = messages$46pb.PickInstruction.create();
      t0.mergeFromBuffer(i, r);
      return t0;
    }
    static fromJson(i, r = C0 || CT.C0) {
      let t0;
      t0 = messages$46pb.PickInstruction.create();
      t0.mergeFromJson(i, r);
      return t0;
    }
    clone() {
      let t0;
      t0 = messages$46pb.PickInstruction.new();
      t0.mergeFromMessage(this);
      return t0;
    }
    copyWith(updates) {
      return messages$46pb.PickInstruction._check(super.copyWith(dart.fn(message => updates(messages$46pb.PickInstruction.as(message)), GeneratedMessageTovoid())));
    }
    get info_() {
      return messages$46pb.PickInstruction._i;
    }
    static create() {
      return new messages$46pb.PickInstruction.__();
    }
    createEmptyInstance() {
      return messages$46pb.PickInstruction.create();
    }
    static createRepeated() {
      return new (PbListOfPickInstruction()).new();
    }
    static getDefault() {
      let t0;
      t0 = messages$46pb.PickInstruction._defaultInstance;
      return t0 == null ? messages$46pb.PickInstruction._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(messages$46pb.PickInstruction, C3 || CT.C3) : t0;
    }
    get tempo() {
      return this.$_getN(messages$46pbenum.PickInstruction_Tempo, 0);
    }
    set tempo(v) {
      this.setField(1, v);
    }
    hasTempo() {
      return this.$_has(0);
    }
    clearTempo() {
      return this.clearField(1);
    }
    get picks() {
      return this.$_getList(messages$46pb.StringCombination, 1);
    }
  };
  (messages$46pb.PickInstruction.__ = function() {
    messages$46pb.PickInstruction.__proto__.new.call(this);
    ;
  }).prototype = messages$46pb.PickInstruction.prototype;
  dart.addTypeTests(messages$46pb.PickInstruction);
  dart.setMethodSignature(messages$46pb.PickInstruction, () => ({
    __proto__: dart.getMethods(messages$46pb.PickInstruction.__proto__),
    clone: dart.fnType(messages$46pb.PickInstruction, []),
    copyWith: dart.fnType(messages$46pb.PickInstruction, [dart.fnType(dart.void, [messages$46pb.PickInstruction])]),
    createEmptyInstance: dart.fnType(messages$46pb.PickInstruction, []),
    hasTempo: dart.fnType(core.bool, []),
    clearTempo: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(messages$46pb.PickInstruction, () => ({
    __proto__: dart.getGetters(messages$46pb.PickInstruction.__proto__),
    info_: protobuf.BuilderInfo,
    tempo: messages$46pbenum.PickInstruction_Tempo,
    picks: core.List$(messages$46pb.StringCombination)
  }));
  dart.setSetterSignature(messages$46pb.PickInstruction, () => ({
    __proto__: dart.getSetters(messages$46pb.PickInstruction.__proto__),
    tempo: messages$46pbenum.PickInstruction_Tempo
  }));
  dart.setLibraryUri(messages$46pb.PickInstruction, "package:schord/proto/messages.pb.dart");
  dart.defineLazy(messages$46pb.PickInstruction, {
    /*messages$46pb.PickInstruction._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new("PickInstruction", {package: C2 || CT.C2, createEmptyInstance: C3 || CT.C3}), t0.e(messages$46pbenum.PickInstruction_Tempo, 1, "tempo", 512, {defaultOrMaker: messages$46pbenum.PickInstruction_Tempo.UNKNOWN_TEMPO, valueOf: C4 || CT.C4, enumValues: messages$46pbenum.PickInstruction_Tempo.values}), t0.pc(messages$46pb.StringCombination, 2, "picks", 2097154, {subBuilder: C1 || CT.C1}), t0.hasRequiredFields = false, t0;
    },
    /*messages$46pb.PickInstruction._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  });
  let C5;
  messages$46pb.Chord = class Chord extends protobuf.GeneratedMessage {
    static new() {
      return messages$46pb.Chord.create();
    }
    static fromBuffer(i, r = C0 || CT.C0) {
      let t0;
      t0 = messages$46pb.Chord.create();
      t0.mergeFromBuffer(i, r);
      return t0;
    }
    static fromJson(i, r = C0 || CT.C0) {
      let t0;
      t0 = messages$46pb.Chord.create();
      t0.mergeFromJson(i, r);
      return t0;
    }
    clone() {
      let t0;
      t0 = messages$46pb.Chord.new();
      t0.mergeFromMessage(this);
      return t0;
    }
    copyWith(updates) {
      return messages$46pb.Chord._check(super.copyWith(dart.fn(message => updates(messages$46pb.Chord.as(message)), GeneratedMessageTovoid())));
    }
    get info_() {
      return messages$46pb.Chord._i;
    }
    static create() {
      return new messages$46pb.Chord.__();
    }
    createEmptyInstance() {
      return messages$46pb.Chord.create();
    }
    static createRepeated() {
      return new (PbListOfChord()).new();
    }
    static getDefault() {
      let t0;
      t0 = messages$46pb.Chord._defaultInstance;
      return t0 == null ? messages$46pb.Chord._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(messages$46pb.Chord, C5 || CT.C5) : t0;
    }
    get chordName() {
      return this.$_getSZ(0);
    }
    set chordName(v) {
      this.$_setString(0, v);
    }
    hasChordName() {
      return this.$_has(0);
    }
    clearChordName() {
      return this.clearField(1);
    }
    get stringCombination() {
      return this.$_getN(messages$46pb.StringCombination, 1);
    }
    set stringCombination(v) {
      this.setField(2, v);
    }
    hasStringCombination() {
      return this.$_has(1);
    }
    clearStringCombination() {
      return this.clearField(2);
    }
    ensureStringCombination() {
      return this.$_ensure(messages$46pb.StringCombination, 1);
    }
  };
  (messages$46pb.Chord.__ = function() {
    messages$46pb.Chord.__proto__.new.call(this);
    ;
  }).prototype = messages$46pb.Chord.prototype;
  dart.addTypeTests(messages$46pb.Chord);
  dart.setMethodSignature(messages$46pb.Chord, () => ({
    __proto__: dart.getMethods(messages$46pb.Chord.__proto__),
    clone: dart.fnType(messages$46pb.Chord, []),
    copyWith: dart.fnType(messages$46pb.Chord, [dart.fnType(dart.void, [messages$46pb.Chord])]),
    createEmptyInstance: dart.fnType(messages$46pb.Chord, []),
    hasChordName: dart.fnType(core.bool, []),
    clearChordName: dart.fnType(dart.void, []),
    hasStringCombination: dart.fnType(core.bool, []),
    clearStringCombination: dart.fnType(dart.void, []),
    ensureStringCombination: dart.fnType(messages$46pb.StringCombination, [])
  }));
  dart.setGetterSignature(messages$46pb.Chord, () => ({
    __proto__: dart.getGetters(messages$46pb.Chord.__proto__),
    info_: protobuf.BuilderInfo,
    chordName: core.String,
    stringCombination: messages$46pb.StringCombination
  }));
  dart.setSetterSignature(messages$46pb.Chord, () => ({
    __proto__: dart.getSetters(messages$46pb.Chord.__proto__),
    chordName: core.String,
    stringCombination: messages$46pb.StringCombination
  }));
  dart.setLibraryUri(messages$46pb.Chord, "package:schord/proto/messages.pb.dart");
  dart.defineLazy(messages$46pb.Chord, {
    /*messages$46pb.Chord._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new("Chord", {package: C2 || CT.C2, createEmptyInstance: C5 || CT.C5}), t0.aOS(1, "chordName"), t0.aOM(messages$46pb.StringCombination, 2, "stringCombination", {subBuilder: C1 || CT.C1}), t0.hasRequiredFields = false, t0;
    },
    /*messages$46pb.Chord._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  });
  let C6;
  messages$46pb.ChordInstruction = class ChordInstruction extends protobuf.GeneratedMessage {
    static new() {
      return messages$46pb.ChordInstruction.create();
    }
    static fromBuffer(i, r = C0 || CT.C0) {
      let t0;
      t0 = messages$46pb.ChordInstruction.create();
      t0.mergeFromBuffer(i, r);
      return t0;
    }
    static fromJson(i, r = C0 || CT.C0) {
      let t0;
      t0 = messages$46pb.ChordInstruction.create();
      t0.mergeFromJson(i, r);
      return t0;
    }
    clone() {
      let t0;
      t0 = messages$46pb.ChordInstruction.new();
      t0.mergeFromMessage(this);
      return t0;
    }
    copyWith(updates) {
      return messages$46pb.ChordInstruction._check(super.copyWith(dart.fn(message => updates(messages$46pb.ChordInstruction.as(message)), GeneratedMessageTovoid())));
    }
    get info_() {
      return messages$46pb.ChordInstruction._i;
    }
    static create() {
      return new messages$46pb.ChordInstruction.__();
    }
    createEmptyInstance() {
      return messages$46pb.ChordInstruction.create();
    }
    static createRepeated() {
      return new (PbListOfChordInstruction()).new();
    }
    static getDefault() {
      let t0;
      t0 = messages$46pb.ChordInstruction._defaultInstance;
      return t0 == null ? messages$46pb.ChordInstruction._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(messages$46pb.ChordInstruction, C6 || CT.C6) : t0;
    }
    get chords() {
      return this.$_getList(messages$46pb.Chord, 0);
    }
  };
  (messages$46pb.ChordInstruction.__ = function() {
    messages$46pb.ChordInstruction.__proto__.new.call(this);
    ;
  }).prototype = messages$46pb.ChordInstruction.prototype;
  dart.addTypeTests(messages$46pb.ChordInstruction);
  dart.setMethodSignature(messages$46pb.ChordInstruction, () => ({
    __proto__: dart.getMethods(messages$46pb.ChordInstruction.__proto__),
    clone: dart.fnType(messages$46pb.ChordInstruction, []),
    copyWith: dart.fnType(messages$46pb.ChordInstruction, [dart.fnType(dart.void, [messages$46pb.ChordInstruction])]),
    createEmptyInstance: dart.fnType(messages$46pb.ChordInstruction, [])
  }));
  dart.setGetterSignature(messages$46pb.ChordInstruction, () => ({
    __proto__: dart.getGetters(messages$46pb.ChordInstruction.__proto__),
    info_: protobuf.BuilderInfo,
    chords: core.List$(messages$46pb.Chord)
  }));
  dart.setLibraryUri(messages$46pb.ChordInstruction, "package:schord/proto/messages.pb.dart");
  dart.defineLazy(messages$46pb.ChordInstruction, {
    /*messages$46pb.ChordInstruction._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new("ChordInstruction", {package: C2 || CT.C2, createEmptyInstance: C6 || CT.C6}), t0.pc(messages$46pb.Chord, 1, "chords", 2097154, {subBuilder: C5 || CT.C5}), t0.hasRequiredFields = false, t0;
    },
    /*messages$46pb.ChordInstruction._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  });
  const _name$ = dart.privateName(messages$46pb, "_name");
  let C7;
  let C8;
  let C9;
  let C10;
  messages$46pb.Instruction_Instruction = class Instruction_Instruction extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (messages$46pb.Instruction_Instruction.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = messages$46pb.Instruction_Instruction.prototype;
  dart.addTypeTests(messages$46pb.Instruction_Instruction);
  dart.setLibraryUri(messages$46pb.Instruction_Instruction, "package:schord/proto/messages.pb.dart");
  dart.setFieldSignature(messages$46pb.Instruction_Instruction, () => ({
    __proto__: dart.getFields(messages$46pb.Instruction_Instruction.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(messages$46pb.Instruction_Instruction, ['toString']);
  messages$46pb.Instruction_Instruction.pickInstruction = C7 || CT.C7;
  messages$46pb.Instruction_Instruction.chordInstruction = C8 || CT.C8;
  messages$46pb.Instruction_Instruction.notSet = C9 || CT.C9;
  messages$46pb.Instruction_Instruction.values = C10 || CT.C10;
  let C11;
  let C12;
  messages$46pb.Instruction = class Instruction extends protobuf.GeneratedMessage {
    static new() {
      return messages$46pb.Instruction.create();
    }
    static fromBuffer(i, r = C0 || CT.C0) {
      let t0;
      t0 = messages$46pb.Instruction.create();
      t0.mergeFromBuffer(i, r);
      return t0;
    }
    static fromJson(i, r = C0 || CT.C0) {
      let t0;
      t0 = messages$46pb.Instruction.create();
      t0.mergeFromJson(i, r);
      return t0;
    }
    clone() {
      let t0;
      t0 = messages$46pb.Instruction.new();
      t0.mergeFromMessage(this);
      return t0;
    }
    copyWith(updates) {
      return messages$46pb.Instruction._check(super.copyWith(dart.fn(message => updates(messages$46pb.Instruction.as(message)), GeneratedMessageTovoid())));
    }
    get info_() {
      return messages$46pb.Instruction._i;
    }
    static create() {
      return new messages$46pb.Instruction.__();
    }
    createEmptyInstance() {
      return messages$46pb.Instruction.create();
    }
    static createRepeated() {
      return new (PbListOfInstruction()).new();
    }
    static getDefault() {
      let t0;
      t0 = messages$46pb.Instruction._defaultInstance;
      return t0 == null ? messages$46pb.Instruction._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(messages$46pb.Instruction, C11 || CT.C11) : t0;
    }
    whichInstruction() {
      return messages$46pb.Instruction._Instruction_InstructionByTag[$_get](this.$_whichOneof(0));
    }
    clearInstruction() {
      return this.clearField(this.$_whichOneof(0));
    }
    get pickInstruction() {
      return this.$_getN(messages$46pb.PickInstruction, 0);
    }
    set pickInstruction(v) {
      this.setField(1, v);
    }
    hasPickInstruction() {
      return this.$_has(0);
    }
    clearPickInstruction() {
      return this.clearField(1);
    }
    ensurePickInstruction() {
      return this.$_ensure(messages$46pb.PickInstruction, 0);
    }
    get chordInstruction() {
      return this.$_getN(messages$46pb.ChordInstruction, 1);
    }
    set chordInstruction(v) {
      this.setField(2, v);
    }
    hasChordInstruction() {
      return this.$_has(1);
    }
    clearChordInstruction() {
      return this.clearField(2);
    }
    ensureChordInstruction() {
      return this.$_ensure(messages$46pb.ChordInstruction, 1);
    }
  };
  (messages$46pb.Instruction.__ = function() {
    messages$46pb.Instruction.__proto__.new.call(this);
    ;
  }).prototype = messages$46pb.Instruction.prototype;
  dart.addTypeTests(messages$46pb.Instruction);
  dart.setMethodSignature(messages$46pb.Instruction, () => ({
    __proto__: dart.getMethods(messages$46pb.Instruction.__proto__),
    clone: dart.fnType(messages$46pb.Instruction, []),
    copyWith: dart.fnType(messages$46pb.Instruction, [dart.fnType(dart.void, [messages$46pb.Instruction])]),
    createEmptyInstance: dart.fnType(messages$46pb.Instruction, []),
    whichInstruction: dart.fnType(messages$46pb.Instruction_Instruction, []),
    clearInstruction: dart.fnType(dart.void, []),
    hasPickInstruction: dart.fnType(core.bool, []),
    clearPickInstruction: dart.fnType(dart.void, []),
    ensurePickInstruction: dart.fnType(messages$46pb.PickInstruction, []),
    hasChordInstruction: dart.fnType(core.bool, []),
    clearChordInstruction: dart.fnType(dart.void, []),
    ensureChordInstruction: dart.fnType(messages$46pb.ChordInstruction, [])
  }));
  dart.setGetterSignature(messages$46pb.Instruction, () => ({
    __proto__: dart.getGetters(messages$46pb.Instruction.__proto__),
    info_: protobuf.BuilderInfo,
    pickInstruction: messages$46pb.PickInstruction,
    chordInstruction: messages$46pb.ChordInstruction
  }));
  dart.setSetterSignature(messages$46pb.Instruction, () => ({
    __proto__: dart.getSetters(messages$46pb.Instruction.__proto__),
    pickInstruction: messages$46pb.PickInstruction,
    chordInstruction: messages$46pb.ChordInstruction
  }));
  dart.setLibraryUri(messages$46pb.Instruction, "package:schord/proto/messages.pb.dart");
  dart.defineLazy(messages$46pb.Instruction, {
    /*messages$46pb.Instruction._Instruction_InstructionByTag*/get _Instruction_InstructionByTag() {
      return C12 || CT.C12;
    },
    /*messages$46pb.Instruction._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new("Instruction", {package: C2 || CT.C2, createEmptyInstance: C11 || CT.C11}), t0.oo(0, JSArrayOfint().of([1, 2])), t0.aOM(messages$46pb.PickInstruction, 1, "pickInstruction", {subBuilder: C3 || CT.C3}), t0.aOM(messages$46pb.ChordInstruction, 2, "chordInstruction", {subBuilder: C6 || CT.C6}), t0.hasRequiredFields = false, t0;
    },
    /*messages$46pb.Instruction._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  });
  let C13;
  messages$46pb.Vocal = class Vocal extends protobuf.GeneratedMessage {
    static new() {
      return messages$46pb.Vocal.create();
    }
    static fromBuffer(i, r = C0 || CT.C0) {
      let t0;
      t0 = messages$46pb.Vocal.create();
      t0.mergeFromBuffer(i, r);
      return t0;
    }
    static fromJson(i, r = C0 || CT.C0) {
      let t0;
      t0 = messages$46pb.Vocal.create();
      t0.mergeFromJson(i, r);
      return t0;
    }
    clone() {
      let t0;
      t0 = messages$46pb.Vocal.new();
      t0.mergeFromMessage(this);
      return t0;
    }
    copyWith(updates) {
      return messages$46pb.Vocal._check(super.copyWith(dart.fn(message => updates(messages$46pb.Vocal.as(message)), GeneratedMessageTovoid())));
    }
    get info_() {
      return messages$46pb.Vocal._i;
    }
    static create() {
      return new messages$46pb.Vocal.__();
    }
    createEmptyInstance() {
      return messages$46pb.Vocal.create();
    }
    static createRepeated() {
      return new (PbListOfVocal()).new();
    }
    static getDefault() {
      let t0;
      t0 = messages$46pb.Vocal._defaultInstance;
      return t0 == null ? messages$46pb.Vocal._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(messages$46pb.Vocal, C13 || CT.C13) : t0;
    }
    get lines() {
      return this.$_getList(core.String, 0);
    }
  };
  (messages$46pb.Vocal.__ = function() {
    messages$46pb.Vocal.__proto__.new.call(this);
    ;
  }).prototype = messages$46pb.Vocal.prototype;
  dart.addTypeTests(messages$46pb.Vocal);
  dart.setMethodSignature(messages$46pb.Vocal, () => ({
    __proto__: dart.getMethods(messages$46pb.Vocal.__proto__),
    clone: dart.fnType(messages$46pb.Vocal, []),
    copyWith: dart.fnType(messages$46pb.Vocal, [dart.fnType(dart.void, [messages$46pb.Vocal])]),
    createEmptyInstance: dart.fnType(messages$46pb.Vocal, [])
  }));
  dart.setGetterSignature(messages$46pb.Vocal, () => ({
    __proto__: dart.getGetters(messages$46pb.Vocal.__proto__),
    info_: protobuf.BuilderInfo,
    lines: core.List$(core.String)
  }));
  dart.setLibraryUri(messages$46pb.Vocal, "package:schord/proto/messages.pb.dart");
  dart.defineLazy(messages$46pb.Vocal, {
    /*messages$46pb.Vocal._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new("Vocal", {package: C2 || CT.C2, createEmptyInstance: C13 || CT.C13}), t0.pPS(1, "lines"), t0.hasRequiredFields = false, t0;
    },
    /*messages$46pb.Vocal._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  });
  let C14;
  let C15;
  messages$46pb.SongSection = class SongSection extends protobuf.GeneratedMessage {
    static new() {
      return messages$46pb.SongSection.create();
    }
    static fromBuffer(i, r = C0 || CT.C0) {
      let t0;
      t0 = messages$46pb.SongSection.create();
      t0.mergeFromBuffer(i, r);
      return t0;
    }
    static fromJson(i, r = C0 || CT.C0) {
      let t0;
      t0 = messages$46pb.SongSection.create();
      t0.mergeFromJson(i, r);
      return t0;
    }
    clone() {
      let t0;
      t0 = messages$46pb.SongSection.new();
      t0.mergeFromMessage(this);
      return t0;
    }
    copyWith(updates) {
      return messages$46pb.SongSection._check(super.copyWith(dart.fn(message => updates(messages$46pb.SongSection.as(message)), GeneratedMessageTovoid())));
    }
    get info_() {
      return messages$46pb.SongSection._i;
    }
    static create() {
      return new messages$46pb.SongSection.__();
    }
    createEmptyInstance() {
      return messages$46pb.SongSection.create();
    }
    static createRepeated() {
      return new (PbListOfSongSection()).new();
    }
    static getDefault() {
      let t0;
      t0 = messages$46pb.SongSection._defaultInstance;
      return t0 == null ? messages$46pb.SongSection._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(messages$46pb.SongSection, C14 || CT.C14) : t0;
    }
    get section() {
      return this.$_getN(messages$46pbenum.SongSection_Section, 0);
    }
    set section(v) {
      this.setField(1, v);
    }
    hasSection() {
      return this.$_has(0);
    }
    clearSection() {
      return this.clearField(1);
    }
    get number() {
      return this.$_getIZ(1);
    }
    set number(v) {
      this.$_setSignedInt32(1, v);
    }
    hasNumber() {
      return this.$_has(1);
    }
    clearNumber() {
      return this.clearField(2);
    }
  };
  (messages$46pb.SongSection.__ = function() {
    messages$46pb.SongSection.__proto__.new.call(this);
    ;
  }).prototype = messages$46pb.SongSection.prototype;
  dart.addTypeTests(messages$46pb.SongSection);
  dart.setMethodSignature(messages$46pb.SongSection, () => ({
    __proto__: dart.getMethods(messages$46pb.SongSection.__proto__),
    clone: dart.fnType(messages$46pb.SongSection, []),
    copyWith: dart.fnType(messages$46pb.SongSection, [dart.fnType(dart.void, [messages$46pb.SongSection])]),
    createEmptyInstance: dart.fnType(messages$46pb.SongSection, []),
    hasSection: dart.fnType(core.bool, []),
    clearSection: dart.fnType(dart.void, []),
    hasNumber: dart.fnType(core.bool, []),
    clearNumber: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(messages$46pb.SongSection, () => ({
    __proto__: dart.getGetters(messages$46pb.SongSection.__proto__),
    info_: protobuf.BuilderInfo,
    section: messages$46pbenum.SongSection_Section,
    number: core.int
  }));
  dart.setSetterSignature(messages$46pb.SongSection, () => ({
    __proto__: dart.getSetters(messages$46pb.SongSection.__proto__),
    section: messages$46pbenum.SongSection_Section,
    number: core.int
  }));
  dart.setLibraryUri(messages$46pb.SongSection, "package:schord/proto/messages.pb.dart");
  dart.defineLazy(messages$46pb.SongSection, {
    /*messages$46pb.SongSection._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new("SongSection", {package: C2 || CT.C2, createEmptyInstance: C14 || CT.C14}), t0.e(messages$46pbenum.SongSection_Section, 1, "section", 512, {defaultOrMaker: messages$46pbenum.SongSection_Section.UNKNOWN_SECTION, valueOf: C15 || CT.C15, enumValues: messages$46pbenum.SongSection_Section.values}), t0.a(core.int, 2, "number", 2048), t0.hasRequiredFields = false, t0;
    },
    /*messages$46pb.SongSection._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  });
  let C16;
  messages$46pb.Song = class Song extends protobuf.GeneratedMessage {
    static new() {
      return messages$46pb.Song.create();
    }
    static fromBuffer(i, r = C0 || CT.C0) {
      let t0;
      t0 = messages$46pb.Song.create();
      t0.mergeFromBuffer(i, r);
      return t0;
    }
    static fromJson(i, r = C0 || CT.C0) {
      let t0;
      t0 = messages$46pb.Song.create();
      t0.mergeFromJson(i, r);
      return t0;
    }
    clone() {
      let t0;
      t0 = messages$46pb.Song.new();
      t0.mergeFromMessage(this);
      return t0;
    }
    copyWith(updates) {
      return messages$46pb.Song._check(super.copyWith(dart.fn(message => updates(messages$46pb.Song.as(message)), GeneratedMessageTovoid())));
    }
    get info_() {
      return messages$46pb.Song._i;
    }
    static create() {
      return new messages$46pb.Song.__();
    }
    createEmptyInstance() {
      return messages$46pb.Song.create();
    }
    static createRepeated() {
      return new (PbListOfSong()).new();
    }
    static getDefault() {
      let t0;
      t0 = messages$46pb.Song._defaultInstance;
      return t0 == null ? messages$46pb.Song._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(messages$46pb.Song, C16 || CT.C16) : t0;
    }
    get sections() {
      return this.$_getList(messages$46pb.SongSection, 0);
    }
    get instructions() {
      return this.$_getMap(core.String, messages$46pb.Instruction, 1);
    }
    get vocals() {
      return this.$_getMap(core.String, messages$46pb.Vocal, 2);
    }
  };
  (messages$46pb.Song.__ = function() {
    messages$46pb.Song.__proto__.new.call(this);
    ;
  }).prototype = messages$46pb.Song.prototype;
  dart.addTypeTests(messages$46pb.Song);
  dart.setMethodSignature(messages$46pb.Song, () => ({
    __proto__: dart.getMethods(messages$46pb.Song.__proto__),
    clone: dart.fnType(messages$46pb.Song, []),
    copyWith: dart.fnType(messages$46pb.Song, [dart.fnType(dart.void, [messages$46pb.Song])]),
    createEmptyInstance: dart.fnType(messages$46pb.Song, [])
  }));
  dart.setGetterSignature(messages$46pb.Song, () => ({
    __proto__: dart.getGetters(messages$46pb.Song.__proto__),
    info_: protobuf.BuilderInfo,
    sections: core.List$(messages$46pb.SongSection),
    instructions: core.Map$(core.String, messages$46pb.Instruction),
    vocals: core.Map$(core.String, messages$46pb.Vocal)
  }));
  dart.setLibraryUri(messages$46pb.Song, "package:schord/proto/messages.pb.dart");
  dart.defineLazy(messages$46pb.Song, {
    /*messages$46pb.Song._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new("Song", {package: C2 || CT.C2, createEmptyInstance: C16 || CT.C16}), t0.pc(messages$46pb.SongSection, 1, "sections", 2097154, {subBuilder: C14 || CT.C14}), t0.m(core.String, messages$46pb.Instruction, 2, "instructions", {entryClassName: "Song.InstructionsEntry", keyFieldType: 64, valueFieldType: 2097152, valueCreator: C11 || CT.C11, packageName: C2 || CT.C2}), t0.m(core.String, messages$46pb.Vocal, 3, "vocals", {entryClassName: "Song.VocalsEntry", keyFieldType: 64, valueFieldType: 2097152, valueCreator: C13 || CT.C13, packageName: C2 || CT.C2}), t0.hasRequiredFields = false, t0;
    },
    /*messages$46pb.Song._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  });
  dart.trackLibraries("packages/schord/proto/messages.pb", {
    "package:schord/proto/messages.pb.dart": messages$46pb
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["messages.pb.dart"],"names":[],"mappings":"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","file":"messages.pb.ddc.js"}');
  // Exports:
  return {
    proto__messages$46pb: messages$46pb
  };
});

//# sourceMappingURL=messages.pb.ddc.js.map
