define(['dart_sdk', 'packages/protobuf/protobuf'], function(dart_sdk, packages__protobuf__protobuf) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const protobuf = packages__protobuf__protobuf.protobuf;
  const messages$46pbenum = Object.create(dart.library);
  const $_get = dartx._get;
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: messages$46pbenum.PickInstruction_Tempo.prototype,
        [ProtobufEnum_name]: "UNKNOWN_TEMPO",
        [ProtobufEnum_value]: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: messages$46pbenum.PickInstruction_Tempo.prototype,
        [ProtobufEnum_name]: "EIGHT",
        [ProtobufEnum_value]: 1
      });
    },
    get C2() {
      return C2 = dart.constList([C0 || CT.C0, C1 || CT.C1], messages$46pbenum.PickInstruction_Tempo);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: messages$46pbenum.SongSection_Section.prototype,
        [ProtobufEnum_name]: "UNKNOWN_SECTION",
        [ProtobufEnum_value]: 0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: messages$46pbenum.SongSection_Section.prototype,
        [ProtobufEnum_name]: "INTRO",
        [ProtobufEnum_value]: 1
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: messages$46pbenum.SongSection_Section.prototype,
        [ProtobufEnum_name]: "VERSE",
        [ProtobufEnum_value]: 2
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: messages$46pbenum.SongSection_Section.prototype,
        [ProtobufEnum_name]: "PRE_CHORUS",
        [ProtobufEnum_value]: 3
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: messages$46pbenum.SongSection_Section.prototype,
        [ProtobufEnum_name]: "CHORUS",
        [ProtobufEnum_value]: 4
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: messages$46pbenum.SongSection_Section.prototype,
        [ProtobufEnum_name]: "BRIDGE",
        [ProtobufEnum_value]: 5
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: messages$46pbenum.SongSection_Section.prototype,
        [ProtobufEnum_name]: "OUTRO",
        [ProtobufEnum_value]: 6
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: messages$46pbenum.SongSection_Section.prototype,
        [ProtobufEnum_name]: "POST_CHORUS",
        [ProtobufEnum_value]: 7
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: messages$46pbenum.SongSection_Section.prototype,
        [ProtobufEnum_name]: "SOLO",
        [ProtobufEnum_value]: 8
      });
    },
    get C12() {
      return C12 = dart.constList([C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10, C11 || CT.C11], messages$46pbenum.SongSection_Section);
    }
  });
  const ProtobufEnum_name = dart.privateName(protobuf, "ProtobufEnum.name");
  const ProtobufEnum_value = dart.privateName(protobuf, "ProtobufEnum.value");
  let C0;
  let C1;
  let C2;
  messages$46pbenum.PickInstruction_Tempo = class PickInstruction_Tempo extends protobuf.ProtobufEnum {
    static valueOf(value) {
      return messages$46pbenum.PickInstruction_Tempo._byValue[$_get](value);
    }
  };
  (messages$46pbenum.PickInstruction_Tempo.__ = function(v, n) {
    messages$46pbenum.PickInstruction_Tempo.__proto__.new.call(this, v, n);
    ;
  }).prototype = messages$46pbenum.PickInstruction_Tempo.prototype;
  dart.addTypeTests(messages$46pbenum.PickInstruction_Tempo);
  dart.setLibraryUri(messages$46pbenum.PickInstruction_Tempo, "package:schord/proto/messages.pbenum.dart");
  dart.defineLazy(messages$46pbenum.PickInstruction_Tempo, {
    /*messages$46pbenum.PickInstruction_Tempo.UNKNOWN_TEMPO*/get UNKNOWN_TEMPO() {
      return C0 || CT.C0;
    },
    /*messages$46pbenum.PickInstruction_Tempo.EIGHT*/get EIGHT() {
      return C1 || CT.C1;
    },
    /*messages$46pbenum.PickInstruction_Tempo.values*/get values() {
      return C2 || CT.C2;
    },
    /*messages$46pbenum.PickInstruction_Tempo._byValue*/get _byValue() {
      return protobuf.ProtobufEnum.initByValue(messages$46pbenum.PickInstruction_Tempo, messages$46pbenum.PickInstruction_Tempo.values);
    }
  });
  let C3;
  let C4;
  let C5;
  let C6;
  let C7;
  let C8;
  let C9;
  let C10;
  let C11;
  let C12;
  messages$46pbenum.SongSection_Section = class SongSection_Section extends protobuf.ProtobufEnum {
    static valueOf(value) {
      return messages$46pbenum.SongSection_Section._byValue[$_get](value);
    }
  };
  (messages$46pbenum.SongSection_Section.__ = function(v, n) {
    messages$46pbenum.SongSection_Section.__proto__.new.call(this, v, n);
    ;
  }).prototype = messages$46pbenum.SongSection_Section.prototype;
  dart.addTypeTests(messages$46pbenum.SongSection_Section);
  dart.setLibraryUri(messages$46pbenum.SongSection_Section, "package:schord/proto/messages.pbenum.dart");
  dart.defineLazy(messages$46pbenum.SongSection_Section, {
    /*messages$46pbenum.SongSection_Section.UNKNOWN_SECTION*/get UNKNOWN_SECTION() {
      return C3 || CT.C3;
    },
    /*messages$46pbenum.SongSection_Section.INTRO*/get INTRO() {
      return C4 || CT.C4;
    },
    /*messages$46pbenum.SongSection_Section.VERSE*/get VERSE() {
      return C5 || CT.C5;
    },
    /*messages$46pbenum.SongSection_Section.PRE_CHORUS*/get PRE_CHORUS() {
      return C6 || CT.C6;
    },
    /*messages$46pbenum.SongSection_Section.CHORUS*/get CHORUS() {
      return C7 || CT.C7;
    },
    /*messages$46pbenum.SongSection_Section.BRIDGE*/get BRIDGE() {
      return C8 || CT.C8;
    },
    /*messages$46pbenum.SongSection_Section.OUTRO*/get OUTRO() {
      return C9 || CT.C9;
    },
    /*messages$46pbenum.SongSection_Section.POST_CHORUS*/get POST_CHORUS() {
      return C10 || CT.C10;
    },
    /*messages$46pbenum.SongSection_Section.SOLO*/get SOLO() {
      return C11 || CT.C11;
    },
    /*messages$46pbenum.SongSection_Section.values*/get values() {
      return C12 || CT.C12;
    },
    /*messages$46pbenum.SongSection_Section._byValue*/get _byValue() {
      return protobuf.ProtobufEnum.initByValue(messages$46pbenum.SongSection_Section, messages$46pbenum.SongSection_Section.values);
    }
  });
  dart.trackLibraries("packages/schord/proto/messages.pbenum", {
    "package:schord/proto/messages.pbenum.dart": messages$46pbenum
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["messages.pbenum.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;mBAqBiD;AAAU,YAAA,AAAQ,yDAAC,KAAK;IAAC;;yDAEhC,GAAgB;AAAK,qEAAM,CAAC,EAAE,CAAC;;EAAC;;;;MAXrC,qDAAa;;;MACb,6CAAK;;;MAEO,8CAAM;;;MAKI,gDAAQ;YAAoB,4EAAY;;;;;;;;;;;;;;mBA8BpD;AAAU,YAAA,AAAQ,uDAAC,KAAK;IAAC;;uDAEhC,GAAgB;AAAK,mEAAM,CAAC,EAAE,CAAC;;EAAC;;;;MAzBrC,qDAAe;;;MACf,2CAAK;;;MACL,2CAAK;;;MACL,gDAAU;;;MACV,4CAAM;;;MACN,4CAAM;;;MACN,2CAAK;;;MACL,iDAAW;;;MACX,0CAAI;;;MAEQ,4CAAM;;;MAYI,8CAAQ;YAAoB,0EAAY","file":"messages.pbenum.ddc.js"}');
  // Exports:
  return {
    proto__messages$46pbenum: messages$46pbenum
  };
});

//# sourceMappingURL=messages.pbenum.ddc.js.map
