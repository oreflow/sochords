define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/rendering/animated_size', 'packages/schord/proto/messages.pb', 'packages/schord/proto/messages.pbenum', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__flutter__material, packages__flutter__src__rendering__animated_size, packages__schord__proto__messages$46pb, packages__schord__proto__messages$46pbenum, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const colors = packages__flutter__material.src__material__colors;
  const custom_paint = packages__flutter__src__rendering__animated_size.src__rendering__custom_paint;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const messages$46pb = packages__schord__proto__messages$46pb.proto__messages$46pb;
  const messages$46pbenum = packages__schord__proto__messages$46pbenum.proto__messages$46pbenum;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const pick_instruction_widget = Object.create(dart.library);
  const $toString = dartx.toString;
  const $modulo = dartx['%'];
  const $_get = dartx._get;
  const $entries = dartx.entries;
  const $asMap = dartx.asMap;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let MapEntryOfint$StringCombination = () => (MapEntryOfint$StringCombination = dart.constFn(core.MapEntry$(core.int, messages$46pb.StringCombination)))();
  let MapEntryOfint$StringCombinationToColumn = () => (MapEntryOfint$StringCombinationToColumn = dart.constFn(dart.fnType(basic.Column, [MapEntryOfint$StringCombination()])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 21,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "painter",
        [_Location_column]: 21,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/schord/pick_instruction_widget.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 24,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 102,
        [_Location_file]: "org-dartlang-app:///packages/schord/pick_instruction_widget.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/schord/pick_instruction_widget.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 9,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/schord/pick_instruction_widget.dart"
      });
    }
  });
  pick_instruction_widget._PickInstructionPainter = class _PickInstructionPainter extends custom_paint.CustomPainter {
    getFret(string) {
      switch (string) {
        case 1:
        {
          return dart.test(this.stringCombination.hasE4()) ? this.stringCombination.e4 : null;
        }
        case 2:
        {
          return dart.test(this.stringCombination.hasB()) ? this.stringCombination.b : null;
        }
        case 3:
        {
          return dart.test(this.stringCombination.hasG()) ? this.stringCombination.g : null;
        }
        case 4:
        {
          return dart.test(this.stringCombination.hasD()) ? this.stringCombination.d : null;
        }
        case 5:
        {
          return dart.test(this.stringCombination.hasA()) ? this.stringCombination.a : null;
        }
        case 6:
        {
          return dart.test(this.stringCombination.hasE2()) ? this.stringCombination.e2 : null;
        }
        default:
        {
          return null;
        }
      }
    }
    paint(canvas, size) {
      let t0;
      let paint = ui.Paint.new();
      paint.color = colors.Colors.deepPurple;
      paint.strokeWidth = 1;
      let margin = (dart.notNull(size.height) - 6 * 1) / 7.0;
      for (let i = 1; i <= 6; i = i + 1) {
        canvas.drawLine(new ui.Offset.new(5.0, i * margin), new ui.Offset.new(dart.notNull(size.width) - 5, i * margin), paint);
        let fret = this.getFret(i);
        if (fret != null) {
          canvas.drawCircle(new ui.Offset.new(dart.notNull(size.width) / 2, i * margin), dart.notNull(size.width) / 3, paint);
          let textStyle = ui.TextStyle.new({color: colors.Colors.white, fontSize: 24.0});
          let paragraphStyle = ui.ParagraphStyle.new({textDirection: ui.TextDirection.ltr});
          let paragraphBuilder = (t0 = ui.ParagraphBuilder.new(paragraphStyle), t0.pushStyle(textStyle), t0.addText(dart.toString(fret)), t0);
          let constraints = new ui.ParagraphConstraints.new({width: 300.0});
          let paragraph = paragraphBuilder.build();
          paragraph.layout(constraints);
          let offset = new ui.Offset.new(dart.notNull(size.width) / 2 - 7, i * margin - 13);
          canvas.drawParagraph(paragraph, offset);
        }
      }
    }
    shouldRepaint(old) {
      custom_paint.CustomPainter._check(old);
      return false;
    }
  };
  (pick_instruction_widget._PickInstructionPainter.new = function(stringCombination) {
    this.stringCombination = stringCombination;
    pick_instruction_widget._PickInstructionPainter.__proto__.new.call(this);
    ;
  }).prototype = pick_instruction_widget._PickInstructionPainter.prototype;
  dart.addTypeTests(pick_instruction_widget._PickInstructionPainter);
  dart.setMethodSignature(pick_instruction_widget._PickInstructionPainter, () => ({
    __proto__: dart.getMethods(pick_instruction_widget._PickInstructionPainter.__proto__),
    getFret: dart.fnType(core.int, [core.int]),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(pick_instruction_widget._PickInstructionPainter, "package:schord/pick_instruction_widget.dart");
  dart.setFieldSignature(pick_instruction_widget._PickInstructionPainter, () => ({
    __proto__: dart.getFields(pick_instruction_widget._PickInstructionPainter.__proto__),
    stringCombination: dart.finalFieldType(messages$46pb.StringCombination)
  }));
  dart.defineLazy(pick_instruction_widget._PickInstructionPainter, {
    /*pick_instruction_widget._PickInstructionPainter.LINE_THICKNESS*/get LINE_THICKNESS() {
      return 1;
    }
  });
  const _getLabelForIndex = dart.privateName(pick_instruction_widget, "_getLabelForIndex");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C1;
  let C0;
  let C6;
  let C5;
  let C4;
  let C9;
  let C8;
  let C7;
  let C12;
  let C13;
  let C11;
  let C10;
  const eightLabels = dart.privateName(pick_instruction_widget, "PickInstructionWidget.eightLabels");
  const pickInstruction$ = dart.privateName(pick_instruction_widget, "PickInstructionWidget.pickInstruction");
  pick_instruction_widget.PickInstructionWidget = class PickInstructionWidget extends framework.StatelessWidget {
    get eightLabels() {
      return this[eightLabels];
    }
    set eightLabels(value) {
      super.eightLabels = value;
    }
    get pickInstruction() {
      return this[pickInstruction$];
    }
    set pickInstruction(value) {
      super.pickInstruction = value;
    }
    [_getLabelForIndex](index) {
      if (dart.equals(this.pickInstruction.tempo, messages$46pbenum.PickInstruction_Tempo.EIGHT)) {
        return this.eightLabels[$_get](index[$modulo](8));
      }
      return "";
    }
    build(context) {
      return new basic.Row.new({mainAxisSize: flex.MainAxisSize.min, children: this.pickInstruction.picks[$asMap]()[$entries][$map](basic.Column, dart.fn(entry => new basic.Column.new({children: JSArrayOfWidget().of([new basic.CustomPaint.new({size: new ui.Size.new(40.0, 200.0), painter: new pick_instruction_widget._PickInstructionPainter.new(entry.value), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new text.Text.new(this[_getLabelForIndex](entry.key), {$creationLocationd_0dea112b090073317d4: C4 || CT.C4})]), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), MapEntryOfint$StringCombinationToColumn()))[$toList](), $creationLocationd_0dea112b090073317d4: C10 || CT.C10});
    }
  };
  (pick_instruction_widget.PickInstructionWidget.new = function(opts) {
    let pickInstruction = opts && 'pickInstruction' in opts ? opts.pickInstruction : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[eightLabels] = JSArrayOfString().of(["1", "+", "2", "+", "3", "+", "4", "+"]);
    this[pickInstruction$] = pickInstruction;
    pick_instruction_widget.PickInstructionWidget.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = pick_instruction_widget.PickInstructionWidget.prototype;
  dart.addTypeTests(pick_instruction_widget.PickInstructionWidget);
  dart.setMethodSignature(pick_instruction_widget.PickInstructionWidget, () => ({
    __proto__: dart.getMethods(pick_instruction_widget.PickInstructionWidget.__proto__),
    [_getLabelForIndex]: dart.fnType(core.String, [core.int]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(pick_instruction_widget.PickInstructionWidget, "package:schord/pick_instruction_widget.dart");
  dart.setFieldSignature(pick_instruction_widget.PickInstructionWidget, () => ({
    __proto__: dart.getFields(pick_instruction_widget.PickInstructionWidget.__proto__),
    eightLabels: dart.finalFieldType(core.List$(core.String)),
    pickInstruction: dart.finalFieldType(messages$46pb.PickInstruction)
  }));
  dart.trackLibraries("packages/schord/pick_instruction_widget", {
    "package:schord/pick_instruction_widget.dart": pick_instruction_widget
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["pick_instruction_widget.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;YAUkB;AACd,cAAQ,MAAM;;;AAEV,2BAAO,AAAkB,kCAAU,AAAkB,4BAAK;;;;AAE1D,2BAAO,AAAkB,iCAAS,AAAkB,2BAAI;;;;AAExD,2BAAO,AAAkB,iCAAS,AAAkB,2BAAI;;;;AAExD,2BAAO,AAAkB,iCAAS,AAAkB,2BAAI;;;;AAExD,2BAAO,AAAkB,iCAAS,AAAkB,2BAAI;;;;AAExD,2BAAO,AAAkB,kCAAU,AAAkB,4BAAK;;;;AAE1D,gBAAO;;;IAEb;UAGkB,QAAa;;AACzB,kBAAQ;AACmB,MAA/B,AAAM,KAAD,SAAgB;AACa,MAAlC,AAAM,KAAD;AAED,mBAA4C,CAAtB,aAAZ,AAAK,IAAD,WAAU,AAAE,SAAoB;AAElD,eAAS,IAAI,GAAG,AAAE,CAAD,IAAI,GAAG,IAAA,AAAC,CAAA;AAKtB,QAJD,AAAO,MAAD,UACJ,kBAAO,KAAG,AAAE,CAAD,GAAG,MAAM,GACpB,kBAAkB,aAAX,AAAK,IAAD,UAAS,GAAG,AAAE,CAAD,GAAG,MAAM,GACjC,KAAK;AAEH,mBAAO,aAAQ,CAAC;AACpB,YAAI,IAAI,IAAI;AAKT,UAJD,AAAO,MAAD,YACJ,kBAAkB,aAAX,AAAK,IAAD,UAAS,GAAG,AAAE,CAAD,GAAG,MAAM,GACtB,aAAX,AAAK,IAAD,UAAS,GACb,KAAK;AAGD,0BAAe,yBACL,+BACJ;AAEN,+BAAoB,sCACK;AAEzB,uCAAsB,wBAAiB,cAAc,GACvD,aAAU,SAAS,GACnB,WAAa,cAAL,IAAI;AACV,4BAAiB,wCAA4B;AAC7C,0BAAY,AAAiB,gBAAD;AACL,UAA7B,AAAU,SAAD,QAAQ,WAAW;AACtB,uBAAS,kBAAkB,AAAI,aAAf,AAAK,IAAD,UAAS,IAAI,GAAG,AAAE,AAAS,CAAV,GAAG,MAAM,GAAG;AAChB,UAAvC,AAAO,MAAD,eAAe,SAAS,EAAE,MAAM;;;IAG5C;;wCAGiC;AAC/B,YAAO;IACT;;;IAjE6B;AAA7B;;EAA+C;;;;;;;;;;;;;;MAHlC,8DAAc;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwErB;;;;;;IAEgB;;;;;;wBAIO;AAC3B,UAA0B,YAAtB,AAAgB,4BAA+B;AACjD,cAAO,AAAW,yBAAC,AAAM,KAAD,UAAG;;AAE7B,YAAO;IACT;UAE0B;AACxB,YAAO,kCACwB,iCACnB,AAAgB,AACzB,AAAQ,AACJ,AASA,mEATI,QAAC,SAAU,gCACA,sBACR,iCACQ,gBAAK,MAAI,iBACN,wDAAwB,AAAM,KAAD,gEAExC,kBAAK,wBAAkB,AAAM,KAAD;IAK5C;;;QAzB4B;;IAJtB,oBAAc,sBAAC,KAAK,KAAK,KAAK,KAAK,KAAK,KAAK,KAAK;IAI5B;AAA5B;;EAA6C","file":"pick_instruction_widget.ddc.js"}');
  // Exports:
  return {
    pick_instruction_widget: pick_instruction_widget
  };
});

//# sourceMappingURL=pick_instruction_widget.ddc.js.map
