define(['dart_sdk', 'packages/schord/pick_instruction_widget', 'packages/flutter/src/widgets/actions', 'packages/schord/proto/messages.pb'], function(dart_sdk, packages__schord__pick_instruction_widget, packages__flutter__src__widgets__actions, packages__schord__proto__messages$46pb) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const pick_instruction_widget = packages__schord__pick_instruction_widget.pick_instruction_widget;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const messages$46pb = packages__schord__proto__messages$46pb.proto__messages$46pb;
  const instruction_widget = Object.create(dart.library);
  const $map = dartx.map;
  const $toList = dartx.toList;
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "pickInstruction",
        [_Location_column]: 13,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 13,
        [_Location_file]: "org-dartlang-app:///packages/schord/instruction_widget.dart"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: messages$46pb.InstructionSection_Instruction.prototype,
        [_name]: "InstructionSection_Instruction.pickInstruction",
        index: 0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 17,
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
        [_Location_column]: 16,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/schord/instruction_widget.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: messages$46pb.InstructionSection_Instruction.prototype,
        [_name]: "InstructionSection_Instruction.chordInstruction",
        index: 1
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "spacing",
        [_Location_column]: 17,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "runSpacing",
        [_Location_column]: 32,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 49,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11, C12 || CT.C12], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/schord/instruction_widget.dart"
      });
    }
  });
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  const _name = dart.privateName(messages$46pb, "_name");
  let C3;
  let C6;
  let C5;
  let C4;
  let C7;
  const _getWidgetForSection = dart.privateName(instruction_widget, "_getWidgetForSection");
  let C10;
  let C11;
  let C12;
  let C9;
  let C8;
  const instruction$ = dart.privateName(instruction_widget, "InstructionWidget.instruction");
  instruction_widget.InstructionWidget = class InstructionWidget extends framework.StatelessWidget {
    get instruction() {
      return this[instruction$];
    }
    set instruction(value) {
      super.instruction = value;
    }
    [_getWidgetForSection](section) {
      switch (section.whichInstruction()) {
        case C3 || CT.C3:
        {
          return new pick_instruction_widget.PickInstructionWidget.new({pickInstruction: section.pickInstruction, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
        }
        case C7 || CT.C7:
        default:
        {
          return new text.Text.new("Not supported", {$creationLocationd_0dea112b090073317d4: C4 || CT.C4});
        }
      }
    }
    build(context) {
      return new basic.Wrap.new({spacing: 10.0, runSpacing: 0.0, children: this.instruction.sections[$map](framework.Widget, dart.bind(this, _getWidgetForSection))[$toList](), $creationLocationd_0dea112b090073317d4: C8 || CT.C8});
    }
  };
  (instruction_widget.InstructionWidget.new = function(opts) {
    let instruction = opts && 'instruction' in opts ? opts.instruction : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[instruction$] = instruction;
    instruction_widget.InstructionWidget.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = instruction_widget.InstructionWidget.prototype;
  dart.addTypeTests(instruction_widget.InstructionWidget);
  dart.setMethodSignature(instruction_widget.InstructionWidget, () => ({
    __proto__: dart.getMethods(instruction_widget.InstructionWidget.__proto__),
    [_getWidgetForSection]: dart.fnType(framework.Widget, [messages$46pb.InstructionSection]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(instruction_widget.InstructionWidget, "package:schord/instruction_widget.dart");
  dart.setFieldSignature(instruction_widget.InstructionWidget, () => ({
    __proto__: dart.getFields(instruction_widget.InstructionWidget.__proto__),
    instruction: dart.finalFieldType(messages$46pb.Instruction)
  }));
  dart.trackLibraries("packages/schord/instruction_widget", {
    "package:schord/instruction_widget.dart": instruction_widget
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["instruction_widget.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAKoB;;;;;;2BAI6B;AAC7C,cAAQ,AAAQ,OAAD;;;AAEX,gBAAO,yEACc,AAAQ,OAAD;;;;;AAG5B,gBAAO,mBAAK;;;IAElB;UAG0B;AACxB,YAAO,8BAAc,kBAAkB,eAAe,AAAY,AAAS,AAA0B,4DAAtB;IACjF;;;QAhBwB;;;AAAxB;;EAAqC","file":"instruction_widget.ddc.js"}');
  // Exports:
  return {
    instruction_widget: instruction_widget
  };
});

//# sourceMappingURL=instruction_widget.ddc.js.map
