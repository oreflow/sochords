define(['dart_sdk', 'packages/provider/provider', 'packages/schord/service', 'packages/flutter/src/widgets/actions', 'packages/nested/nested', 'packages/flutter/material', 'packages/schord/schord'], function(dart_sdk, packages__provider__provider, packages__schord__service, packages__flutter__src__widgets__actions, packages__nested__nested, packages__flutter__material, packages__schord__schord) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const provider = packages__provider__provider.src__provider;
  const service = packages__schord__service.service;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const binding = packages__flutter__src__widgets__actions.src__widgets__binding;
  const nested = packages__nested__nested.nested;
  const app = packages__flutter__material.src__material__app;
  const theme_data = packages__flutter__material.src__material__theme_data;
  const colors = packages__flutter__material.src__material__colors;
  const schord = packages__schord__schord.schord;
  const main = Object.create(dart.library);
  let ProviderOfService = () => (ProviderOfService = dart.constFn(provider.Provider$(service.Service)))();
  let BuildContextToService = () => (BuildContextToService = dart.constFn(dart.fnType(service.Service, [framework.BuildContext])))();
  let JSArrayOfSingleChildWidget = () => (JSArrayOfSingleChildWidget = dart.constFn(_interceptors.JSArray$(nested.SingleChildWidget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "create",
        [_Location_column]: 27,
        [_Location_line]: 13,
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
        [_Location_column]: 9,
        [_Location_line]: 13,
        [_Location_file]: "org-dartlang-app:///packages/schord/main.dart"
      });
    },
    get C4() {
      return C4 = dart.constList([], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/schord/main.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "theme",
        [_Location_column]: 9,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 9,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8, C9 || CT.C9], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/schord/main.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "providers",
        [_Location_column]: 7,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 15,
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
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/schord/main.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 6,
        [_Location_file]: "org-dartlang-app:///packages/schord/main.dart"
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
  let C4;
  let C3;
  let C7;
  let C8;
  let C9;
  let C6;
  let C5;
  let C12;
  let C13;
  let C11;
  let C10;
  main.SchordApp = class SchordApp extends framework.StatelessWidget {
    build(context) {
      return new provider.MultiProvider.new({providers: JSArrayOfSingleChildWidget().of([new (ProviderOfService()).new({create: dart.fn(_ => new service.Service.new(), BuildContextToService()), $creationLocationd_0dea112b090073317d4: C0 || CT.C0})]), child: new app.MaterialApp.new({title: "Schord", theme: theme_data.ThemeData.new({primarySwatch: colors.Colors.purple}), home: new schord.Schord.new({$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10});
    }
  };
  (main.SchordApp.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.SchordApp.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.SchordApp.prototype;
  dart.addTypeTests(main.SchordApp);
  dart.setMethodSignature(main.SchordApp, () => ({
    __proto__: dart.getMethods(main.SchordApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.SchordApp, "package:schord/main.dart");
  let C14;
  main.main = function main$() {
    return binding.runApp(new main.SchordApp.new({$creationLocationd_0dea112b090073317d4: C14 || CT.C14}));
  };
  dart.trackLibraries("packages/schord/main", {
    "package:schord/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAS4B;AACxB,YAAO,4CACM,iCACT,uCAA0B,QAAC,KAAM,qHAE5B,gCACE,iBACA,yCACiB,8BAElB;IAGZ;;;;;;EACF;;;;;;;;;AAlBe,0BAAO;EAAY","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
