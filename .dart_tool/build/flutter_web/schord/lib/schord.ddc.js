define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/painting/_network_image_web', 'packages/schord/instruction_widget', 'packages/schord/vocal_widget', 'packages/schord/proto/messages.pb', 'packages/provider/provider', 'packages/schord/service'], function(dart_sdk, packages__flutter__material, packages__flutter__src__widgets__actions, packages__flutter__src__rendering__animated_size, packages__flutter__src__painting___network_image_web, packages__schord__instruction_widget, packages__schord__vocal_widget, packages__schord__proto__messages$46pb, packages__provider__provider, packages__schord__service) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const card = packages__flutter__material.src__material__card;
  const divider = packages__flutter__material.src__material__divider;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const single_child_scroll_view = packages__flutter__src__widgets__actions.src__widgets__single_child_scroll_view;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const instruction_widget = packages__schord__instruction_widget.instruction_widget;
  const vocal_widget = packages__schord__vocal_widget.vocal_widget;
  const messages$46pb = packages__schord__proto__messages$46pb.proto__messages$46pb;
  const provider = packages__provider__provider.src__provider;
  const service = packages__schord__service.service;
  const schord = Object.create(dart.library);
  const $_get = dartx._get;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let SongSectionToCard = () => (SongSectionToCard = dart.constFn(dart.fnType(card.Card, [messages$46pb.SongSection])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "instruction",
        [_Location_column]: 23,
        [_Location_line]: 20,
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
        [_Location_column]: 26,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/schord/schord.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/schord/schord.dart"
      });
    },
    get C8() {
      return C8 = dart.constList([], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/schord/schord.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "vocal",
        [_Location_column]: 38,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/schord/schord.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/schord/schord.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 15,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 15,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19, C20 || CT.C20], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 13,
        [_Location_file]: "org-dartlang-app:///packages/schord/schord.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/schord/schord.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/schord/schord.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/schord/schord.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32, C33 || CT.C33, C34 || CT.C34], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/schord/schord.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/schord/schord.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C39 || CT.C39,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/schord/schord.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43, C44 || CT.C44], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/schord/schord.dart"
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
  let C6;
  let C4;
  let C3;
  let C8;
  let C7;
  let C11;
  let C10;
  let C9;
  let C14;
  let C15;
  let C13;
  let C12;
  let C18;
  let C19;
  let C20;
  let C17;
  let C16;
  let C23;
  let C22;
  let C21;
  const _getSongRows = dart.privateName(schord, "_getSongRows");
  let C26;
  let C25;
  let C24;
  let C29;
  let C28;
  let C27;
  let C32;
  let C33;
  let C34;
  let C31;
  let C30;
  let C37;
  let C36;
  let C35;
  let C40;
  let C39;
  let C38;
  let C43;
  let C44;
  let C42;
  let C41;
  schord.Schord = class Schord extends framework.StatelessWidget {
    [_getSongRows](song) {
      return song.sections[$map](card.Card, dart.fn(section => new card.Card.new({child: new basic.Row.new({mainAxisSize: flex.MainAxisSize.min, mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Padding.new({padding: new edge_insets.EdgeInsets.all(20.0), child: new instruction_widget.InstructionWidget.new({instruction: song.instructions[$_get](dart.toString(section)), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), new divider.VerticalDivider.new({$creationLocationd_0dea112b090073317d4: C7 || CT.C7}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.all(20.0), child: new vocal_widget.VocalWidget.new({vocal: song.vocals[$_get](dart.toString(section)), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12})]), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), SongSectionToCard()))[$toList]();
    }
    build(context) {
      let song = provider.Provider.of(service.Service, context).getSong();
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Schord", {$creationLocationd_0dea112b090073317d4: C24 || CT.C24}), $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), body: new single_child_scroll_view.SingleChildScrollView.new({child: new basic.Center.new({child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.center, mainAxisAlignment: flex.MainAxisAlignment.center, children: this[_getSongRows](song), $creationLocationd_0dea112b090073317d4: C30 || CT.C30}), $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), $creationLocationd_0dea112b090073317d4: C38 || CT.C38}), $creationLocationd_0dea112b090073317d4: C41 || CT.C41});
    }
  };
  (schord.Schord.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    schord.Schord.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = schord.Schord.prototype;
  dart.addTypeTests(schord.Schord);
  dart.setMethodSignature(schord.Schord, () => ({
    __proto__: dart.getMethods(schord.Schord.__proto__),
    [_getSongRows]: dart.fnType(core.List$(framework.Widget), [messages$46pb.Song]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(schord.Schord, "package:schord/schord.dart");
  dart.trackLibraries("packages/schord/schord", {
    "package:schord/schord.dart": schord
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["schord.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;mBAQiC;AAC7B,YAAO,AAAK,AACP,AAoBA,KArBM,2BAEL,QAAC,WAAY,0BACJ,iCACsB,0CACU,yCAC3B,sBACR,gCACsB,+BAAI,cACjB,2DACU,AAAK,AAAY,IAAb,qBAAsB,cAAR,OAAO,kHAE5C,wFACA,gCACsB,+BAAI,cACjB,yCAAmB,AAAK,AAAM,IAAP,eAAgB,cAAR,OAAO;IAO7D;UAG0B;AACnB,iBAAgB,AAAqB,sCAAT,OAAO;AAExC,YAAO,oCACG,+BACC,kBAAK,mIAER,+DACK,6BACF,0CACkC,mDACF,yCAC3B,mBAAa,IAAI;IAInC;;;;;;EACF","file":"schord.ddc.js"}');
  // Exports:
  return {
    schord: schord
  };
});

//# sourceMappingURL=schord.ddc.js.map
