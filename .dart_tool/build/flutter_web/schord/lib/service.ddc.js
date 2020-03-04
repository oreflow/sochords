define(['dart_sdk', 'packages/schord/proto/messages.pb', 'packages/schord/proto/messages.pbenum'], function(dart_sdk, packages__schord__proto__messages$46pb, packages__schord__proto__messages$46pbenum) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const messages$46pb = packages__schord__proto__messages$46pb.proto__messages$46pb;
  const messages$46pbenum = packages__schord__proto__messages$46pbenum.proto__messages$46pbenum;
  const service = Object.create(dart.library);
  const $add = dartx.add;
  const $_set = dartx._set;
  const CT = Object.create(null);
  service.Service = class Service extends core.Object {
    createSc(opts) {
      let e4 = opts && 'e4' in opts ? opts.e4 : null;
      let b = opts && 'b' in opts ? opts.b : null;
      let g = opts && 'g' in opts ? opts.g : null;
      let d = opts && 'd' in opts ? opts.d : null;
      let a = opts && 'a' in opts ? opts.a : null;
      let e2 = opts && 'e2' in opts ? opts.e2 : null;
      let name = opts && 'name' in opts ? opts.name : null;
      let sc = messages$46pb.StringCombination.create();
      if (e4 != null) sc.e4 = e4;
      if (b != null) sc.b = b;
      if (g != null) sc.g = g;
      if (d != null) sc.d = d;
      if (a != null) sc.a = a;
      if (e2 != null) sc.e2 = e2;
      if (e2 != null) sc.e2 = e2;
      return sc;
    }
    getSong() {
      let t0, t0$, t0$0, t0$1, t0$2, t1, t1$, t1$0, t1$1, t0$3;
      let song = messages$46pb.Song.create();
      let chorusOne = (t0 = messages$46pb.SongSection.create(), t0.section = messages$46pbenum.SongSection_Section.CHORUS, t0.number = 1, t0);
      let chorusTwo = messages$46pb.SongSection.create();
      chorusTwo.section = messages$46pbenum.SongSection_Section.CHORUS;
      chorusTwo.number = 2;
      let pickInstruction1 = (t0$ = messages$46pb.PickInstruction.create(), t0$.picks[$add](this.createSc({e2: 0})), t0$.picks[$add](this.createSc({d: 2})), t0$.picks[$add](this.createSc({b: 3})), t0$.picks[$add](this.createSc({g: 0})), t0$.picks[$add](this.createSc({e2: 2})), t0$.picks[$add](this.createSc({b: 3, g: 2})), t0$.picks[$add](this.createSc()), t0$.picks[$add](this.createSc({b: 3, g: 0, e2: 3, name: "G"})), t0$.tempo = messages$46pbenum.PickInstruction_Tempo.EIGHT, t0$);
      let pickInstruction2 = (t0$0 = messages$46pb.PickInstruction.create(), t0$0.picks[$add](this.createSc()), t0$0.picks[$add](this.createSc()), t0$0.picks[$add](this.createSc()), t0$0.picks[$add](this.createSc()), t0$0.picks[$add](this.createSc()), t0$0.picks[$add](this.createSc()), t0$0.picks[$add](this.createSc()), t0$0.picks[$add](this.createSc()), t0$0.tempo = messages$46pbenum.PickInstruction_Tempo.EIGHT, t0$0);
      let pickInstruction3 = (t0$1 = messages$46pb.PickInstruction.create(), t0$1.picks[$add](this.createSc({a: 3})), t0$1.picks[$add](this.createSc({d: 2})), t0$1.picks[$add](this.createSc({b: 1})), t0$1.picks[$add](this.createSc({g: 0})), t0$1.picks[$add](this.createSc({d: 2})), t0$1.picks[$add](this.createSc({e2: 0})), t0$1.picks[$add](this.createSc({b: 1})), t0$1.picks[$add](this.createSc({g: 0})), t0$1.tempo = messages$46pbenum.PickInstruction_Tempo.EIGHT, t0$1);
      let pickInstruction4 = (t0$2 = messages$46pb.PickInstruction.create(), t0$2.picks[$add](this.createSc({b: 3, g: 0, e2: 3})), t0$2.picks[$add](this.createSc()), t0$2.picks[$add](this.createSc()), t0$2.picks[$add](this.createSc()), t0$2.picks[$add](this.createSc({b: 3, g: 2, d: 0})), t0$2.picks[$add](this.createSc()), t0$2.picks[$add](this.createSc()), t0$2.picks[$add](this.createSc()), t0$2.tempo = messages$46pbenum.PickInstruction_Tempo.EIGHT, t0$2);
      let instruction = (t0$3 = messages$46pb.Instruction.create(), t0$3.sections[$add]((t1 = messages$46pb.InstructionSection.create(), t1.pickInstruction = pickInstruction1, t1)), t0$3.sections[$add]((t1$ = messages$46pb.InstructionSection.create(), t1$.pickInstruction = pickInstruction2, t1$)), t0$3.sections[$add]((t1$0 = messages$46pb.InstructionSection.create(), t1$0.pickInstruction = pickInstruction3, t1$0)), t0$3.sections[$add]((t1$1 = messages$46pb.InstructionSection.create(), t1$1.pickInstruction = pickInstruction4, t1$1)), t0$3);
      let vocal = messages$46pb.Vocal.create();
      vocal.lines[$add]("Tell me somethin', girl\nAre you happy in this modern world?\nOr do you need more?\nIs there somethin' else you're searchin' for?\nI'm falling\nIn all the good times I find myself\nLongin' for change\nAnd in the bad times I fear myself\n\nTell me something, boy\nAren't you tired tryin' to fill that void?\nOr do you need more?\nAin't it hard keeping it so hardcore?\nI'm falling\nIn all the good times I find myself\nLonging for change\nAnd in the bad times I fear myself\n        ");
      song.sections[$add](chorusOne);
      song.instructions[$_set](dart.toString(chorusOne), instruction);
      song.vocals[$_set](dart.toString(chorusOne), messages$46pb.Vocal.create());
      song.sections[$add](chorusTwo);
      song.instructions[$_set](dart.toString(chorusTwo), instruction);
      song.vocals[$_set](dart.toString(chorusTwo), vocal);
      return song;
    }
  };
  (service.Service.new = function() {
    ;
  }).prototype = service.Service.prototype;
  dart.addTypeTests(service.Service);
  dart.setMethodSignature(service.Service, () => ({
    __proto__: dart.getMethods(service.Service.__proto__),
    createSc: dart.fnType(messages$46pb.StringCombination, [], {a: core.int, b: core.int, d: core.int, e2: core.int, e4: core.int, g: core.int, name: core.String}, {}),
    getSong: dart.fnType(messages$46pb.Song, [])
  }));
  dart.setLibraryUri(service.Service, "package:schord/service.dart");
  dart.trackLibraries("packages/schord/service", {
    "package:schord/service.dart": service
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["service.dart"],"names":[],"mappings":";;;;;;;;;;;;;UAIQ;UACA;UACA;UACA;UACA;UACA;UACG;AAEW,eAAuB;AACzC,UAAI,EAAE,IAAI,MAAM,AAAG,AAAO,EAAR,MAAM,EAAE;AAC1B,UAAI,CAAC,IAAI,MAAM,AAAG,AAAK,EAAN,KAAK,CAAC;AACvB,UAAI,CAAC,IAAI,MAAM,AAAG,AAAK,EAAN,KAAK,CAAC;AACvB,UAAI,CAAC,IAAI,MAAM,AAAG,AAAK,EAAN,KAAK,CAAC;AACvB,UAAI,CAAC,IAAI,MAAM,AAAG,AAAK,EAAN,KAAK,CAAC;AACvB,UAAI,EAAE,IAAI,MAAM,AAAG,AAAO,EAAR,MAAM,EAAE;AAC1B,UAAI,EAAE,IAAI,MAAM,AAAG,AAAO,EAAR,MAAM,EAAE;AAC1B,YAAO,GAAE;IACX;;;AAGO,iBAAY;AACL,4BAAwB,oCAChC,aAA8B,8CAC9B,YAAS;AAED,sBAAwB;AACU,MAA9C,AAAU,SAAD,WAA+B;AACpB,MAApB,AAAU,SAAD,UAAU;AAEH,oCAAmC,wCAC/C,AAAM,gBAAI,mBAAa,MACvB,AAAM,gBAAI,kBAAY,MACtB,AAAM,gBAAI,kBAAY,MACtB,AAAM,gBAAI,kBAAY,MACtB,AAAM,gBAAI,mBAAa,MACvB,AAAM,gBAAI,kBAAY,MAAM,MAC5B,AAAM,gBAAI,kBACV,AAAM,gBAAI,kBAAY,MAAM,OAAO,SAAS,QAC5C,YAA8B;AAClB,qCAAmC,wCAC/C,AAAM,iBAAI,kBACV,AAAM,iBAAI,kBACV,AAAM,iBAAI,kBACV,AAAM,iBAAI,kBACV,AAAM,iBAAI,kBACV,AAAM,iBAAI,kBACV,AAAM,iBAAI,kBACV,AAAM,iBAAI,kBACV,aAA8B;AAClB,qCAAmC,wCAC/C,AAAM,iBAAI,kBAAY,MACtB,AAAM,iBAAI,kBAAY,MACtB,AAAM,iBAAI,kBAAY,MACtB,AAAM,iBAAI,kBAAY,MACtB,AAAM,iBAAI,kBAAY,MACtB,AAAM,iBAAI,mBAAa,MACvB,AAAM,iBAAI,kBAAY,MACtB,AAAM,iBAAI,kBAAY,MACtB,aAA8B;AAClB,qCAAmC,wCAC/C,AAAM,iBAAI,kBAAY,MAAM,OAAO,MACnC,AAAM,iBAAI,kBACV,AAAM,iBAAI,kBACV,AAAM,iBAAI,kBACV,AAAM,iBAAI,kBAAY,MAAM,MAAM,MAClC,AAAM,iBAAI,kBACV,AAAM,iBAAI,kBACV,AAAM,iBAAI,kBACV,aAA8B;AAEtB,gCAA0B,oCACpC,AAAS,0BAAuB,2CAAU,qBAAkB,gBAAgB,QAC5E,AAAS,2BAAuB,2CAAU,sBAAkB,gBAAgB,SAC5E,AAAS,4BAAuB,2CAAU,uBAAkB,gBAAgB,UAC5E,AAAS,4BAAuB,2CAAU,uBAAkB,gBAAgB;AAExE,kBAAc;AAmBZ,MAlBR,AAAM,AAAM,KAAP,aAAW;AAoBY,MAA5B,AAAK,AAAS,IAAV,gBAAc,SAAS;AAC0B,MAArD,AAAK,AAAY,IAAb,qBAAwB,cAAV,SAAS,GAAe,WAAW;AACH,MAAlD,AAAK,AAAM,IAAP,eAAkB,cAAV,SAAS,GAAqB;AAEd,MAA5B,AAAK,AAAS,IAAV,gBAAc,SAAS;AAC0B,MAArD,AAAK,AAAY,IAAb,qBAAwB,cAAV,SAAS,GAAe,WAAW;AACZ,MAAzC,AAAK,AAAM,IAAP,eAAkB,cAAV,SAAS,GAAe,KAAK;AAEzC,YAAO,KAAI;IACb;;;;EACF","file":"service.ddc.js"}');
  // Exports:
  return {
    service: service
  };
});

//# sourceMappingURL=service.ddc.js.map
