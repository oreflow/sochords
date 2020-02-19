define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/schord/proto/messages.pb'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__schord__proto__messages$46pb) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const messages$46pb = packages__schord__proto__messages$46pb.proto__messages$46pb;
  const vocal_widget = Object.create(dart.library);
  const $map = dartx.map;
  const $toList = dartx.toList;
  let StringToText = () => (StringToText = dart.constFn(dart.fnType(text.Text, [core.String])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 60,
        [_Location_line]: 11,
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
        [_Location_column]: 55,
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/schord/vocal_widget.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 11,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/schord/vocal_widget.dart"
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
  let C5;
  let C4;
  let C3;
  const vocal$ = dart.privateName(vocal_widget, "VocalWidget.vocal");
  vocal_widget.VocalWidget = class VocalWidget extends framework.StatelessWidget {
    get vocal() {
      return this[vocal$];
    }
    set vocal(value) {
      super.vocal = value;
    }
    build(context) {
      return new basic.Column.new({children: this.vocal.lines[$map](text.Text, dart.fn(line => new text.Text.new(line, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), StringToText()))[$toList](), $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
    }
  };
  (vocal_widget.VocalWidget.new = function(opts) {
    let vocal = opts && 'vocal' in opts ? opts.vocal : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[vocal$] = vocal;
    vocal_widget.VocalWidget.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = vocal_widget.VocalWidget.prototype;
  dart.addTypeTests(vocal_widget.VocalWidget);
  dart.setMethodSignature(vocal_widget.VocalWidget, () => ({
    __proto__: dart.getMethods(vocal_widget.VocalWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(vocal_widget.VocalWidget, "package:schord/vocal_widget.dart");
  dart.setFieldSignature(vocal_widget.VocalWidget, () => ({
    __proto__: dart.getFields(vocal_widget.VocalWidget.__proto__),
    vocal: dart.finalFieldType(messages$46pb.Vocal)
  }));
  dart.trackLibraries("packages/schord/vocal_widget", {
    "package:schord/vocal_widget.dart": vocal_widget
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["vocal_widget.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAIc;;;;;;UAKc;AACxB,YAAO,iCAAiB,AAAM,AAAM,AAA0B,kCAAtB,QAAC,QAAS,kBAAK,IAAI;IAC7D;;;QALkB;;;AAAlB;;EAAyB","file":"vocal_widget.ddc.js"}');
  // Exports:
  return {
    vocal_widget: vocal_widget
  };
});

//# sourceMappingURL=vocal_widget.ddc.js.map
