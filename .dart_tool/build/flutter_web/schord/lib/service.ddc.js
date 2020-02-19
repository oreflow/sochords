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
      let sc = messages$46pb.StringCombination.create();
      if (e4 != null) sc.e4 = e4;
      if (b != null) sc.b = b;
      if (g != null) sc.g = g;
      if (d != null) sc.d = d;
      if (a != null) sc.a = a;
      if (e2 != null) sc.e2 = e2;
      return sc;
    }
    getSong() {
      let t0, t0$;
      let song = messages$46pb.Song.create();
      let chorusOne = (t0 = messages$46pb.SongSection.create(), t0.section = messages$46pbenum.SongSection_Section.CHORUS, t0.number = 1, t0);
      let chorusTwo = messages$46pb.SongSection.create();
      chorusTwo.section = messages$46pbenum.SongSection_Section.CHORUS;
      chorusTwo.number = 2;
      let pi = (t0$ = messages$46pb.PickInstruction.create(), t0$.picks[$add](this.createSc({e2: 0})), t0$.picks[$add](this.createSc({d: 2})), t0$.picks[$add](this.createSc({b: 3})), t0$.picks[$add](this.createSc({g: 0})), t0$.picks[$add](this.createSc({e2: 2})), t0$.picks[$add](this.createSc({b: 3, g: 2})), t0$.picks[$add](this.createSc()), t0$.picks[$add](this.createSc({b: 3, g: 0, e2: 3})), t0$.picks[$add](this.createSc()), t0$.picks[$add](this.createSc()), t0$.picks[$add](this.createSc()), t0$.picks[$add](this.createSc()), t0$.picks[$add](this.createSc()), t0$.picks[$add](this.createSc()), t0$.picks[$add](this.createSc()), t0$.picks[$add](this.createSc()), t0$.picks[$add](this.createSc({a: 3})), t0$.picks[$add](this.createSc({d: 2})), t0$.picks[$add](this.createSc({b: 1})), t0$.picks[$add](this.createSc({g: 0})), t0$.picks[$add](this.createSc({d: 2})), t0$.picks[$add](this.createSc({e2: 0})), t0$.picks[$add](this.createSc({b: 1})), t0$.picks[$add](this.createSc({g: 0})), t0$.picks[$add](this.createSc({b: 3, g: 0, e2: 3})), t0$.picks[$add](this.createSc()), t0$.picks[$add](this.createSc()), t0$.picks[$add](this.createSc()), t0$.picks[$add](this.createSc({b: 3, g: 2, d: 0})), t0$.picks[$add](this.createSc()), t0$.picks[$add](this.createSc()), t0$.picks[$add](this.createSc()), t0$.tempo = messages$46pbenum.PickInstruction_Tempo.EIGHT, t0$);
      let instruction = messages$46pb.Instruction.create();
      instruction.pickInstruction = pi;
      let vocal = messages$46pb.Vocal.create();
      vocal.lines[$add]("La lalalal lalalalallalala lala");
      song.sections[$add](chorusOne);
      song.instructions[$_set](dart.toString(chorusOne), instruction);
      song.vocals[$_set](dart.toString(chorusOne), vocal);
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
    createSc: dart.fnType(messages$46pb.StringCombination, [], {a: core.int, b: core.int, d: core.int, e2: core.int, e4: core.int, g: core.int}, {}),
    getSong: dart.fnType(messages$46pb.Song, [])
  }));
  dart.setLibraryUri(service.Service, "package:schord/service.dart");
  dart.trackLibraries("packages/schord/service", {
    "package:schord/service.dart": service
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["service.dart"],"names":[],"mappings":";;;;;;;;;;;;;UAGkC;UAAQ;UAAO;UAAO;UAAO;UAAO;AAChD,eAAuB;AACzC,UAAI,EAAE,IAAI,MAAM,AAAG,AAAO,EAAR,MAAM,EAAE;AAC1B,UAAI,CAAC,IAAK,MAAM,AAAG,AAAK,EAAN,KAAK,CAAC;AACxB,UAAI,CAAC,IAAK,MAAM,AAAG,AAAK,EAAN,KAAK,CAAC;AACxB,UAAI,CAAC,IAAK,MAAM,AAAG,AAAK,EAAN,KAAK,CAAC;AACxB,UAAI,CAAC,IAAK,MAAM,AAAG,AAAK,EAAN,KAAK,CAAC;AACxB,UAAI,EAAE,IAAK,MAAM,AAAG,AAAO,EAAR,MAAM,EAAE;AAC3B,YAAO,GAAE;IACX;;;AAGO,iBAAY;AACL,4BAAwB,oCAClC,aAA8B,8CAC9B,YAAS;AAEC,sBAAwB;AACU,MAA9C,AAAU,SAAD,WAA+B;AACpB,MAApB,AAAU,SAAD,UAAU;AAEH,sBAAqB,wCACnC,AAAM,gBAAI,mBAAa,MACvB,AAAM,gBAAI,kBAAY,MACtB,AAAM,gBAAI,kBAAY,MACtB,AAAM,gBAAI,kBAAY,MACtB,AAAM,gBAAI,mBAAa,MACvB,AAAM,gBAAI,kBAAY,MAAM,MAC5B,AAAM,gBAAI,kBACV,AAAM,gBAAI,kBAAY,MAAM,OAAO,MAEnC,AAAM,gBAAI,kBACV,AAAM,gBAAI,kBACV,AAAM,gBAAI,kBACV,AAAM,gBAAI,kBACV,AAAM,gBAAI,kBACV,AAAM,gBAAI,kBACV,AAAM,gBAAI,kBACV,AAAM,gBAAI,kBAEV,AAAM,gBAAI,kBAAY,MACtB,AAAM,gBAAI,kBAAY,MACtB,AAAM,gBAAI,kBAAY,MACtB,AAAM,gBAAI,kBAAY,MACtB,AAAM,gBAAI,kBAAY,MACtB,AAAM,gBAAI,mBAAa,MACvB,AAAM,gBAAI,kBAAY,MACtB,AAAM,gBAAI,kBAAY,MAEtB,AAAM,gBAAI,kBAAY,MAAM,OAAO,MACnC,AAAM,gBAAI,kBACV,AAAM,gBAAI,kBACV,AAAM,gBAAI,kBACV,AAAM,gBAAI,kBAAY,MAAM,MAAM,MAClC,AAAM,gBAAI,kBACV,AAAM,gBAAI,kBACV,AAAM,gBAAI,kBACV,YAA8B;AAEpB,wBAA0B;AACN,MAAhC,AAAY,WAAD,mBAAmB,EAAE;AAE1B,kBAAc;AAC8B,MAAlD,AAAM,AAAM,KAAP,aAAW;AAEY,MAA5B,AAAK,AAAS,IAAV,gBAAc,SAAS;AAC0B,MAArD,AAAK,AAAY,IAAb,qBAAwB,cAAV,SAAS,GAAe,WAAW;AACZ,MAAzC,AAAK,AAAM,IAAP,eAAkB,cAAV,SAAS,GAAe,KAAK;AAEb,MAA5B,AAAK,AAAS,IAAV,gBAAc,SAAS;AAC0B,MAArD,AAAK,AAAY,IAAb,qBAAwB,cAAV,SAAS,GAAe,WAAW;AACZ,MAAzC,AAAK,AAAM,IAAP,eAAkB,cAAV,SAAS,GAAe,KAAK;AAEzC,YAAO,KAAI;IACb;;;;EACF","file":"service.ddc.js"}');
  // Exports:
  return {
    service: service
  };
});

//# sourceMappingURL=service.ddc.js.map
