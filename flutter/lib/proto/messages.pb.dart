///
//  Generated code. Do not modify.
//  source: proto/messages.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'messages.pbenum.dart';

export 'messages.pbenum.dart';

class StringCombination extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('StringCombination', package: const $pb.PackageName('com.oreflow.schord'), createEmptyInstance: create)
    ..a<$core.int>(1, 'e4', $pb.PbFieldType.O3)
    ..a<$core.int>(2, 'b', $pb.PbFieldType.O3)
    ..a<$core.int>(3, 'g', $pb.PbFieldType.O3)
    ..a<$core.int>(4, 'd', $pb.PbFieldType.O3)
    ..a<$core.int>(5, 'a', $pb.PbFieldType.O3)
    ..a<$core.int>(6, 'e2', $pb.PbFieldType.O3)
    ..aOS(7, 'name')
    ..hasRequiredFields = false
  ;

  StringCombination._() : super();
  factory StringCombination() => create();
  factory StringCombination.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory StringCombination.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  StringCombination clone() => StringCombination()..mergeFromMessage(this);
  StringCombination copyWith(void Function(StringCombination) updates) => super.copyWith((message) => updates(message as StringCombination));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static StringCombination create() => StringCombination._();
  StringCombination createEmptyInstance() => create();
  static $pb.PbList<StringCombination> createRepeated() => $pb.PbList<StringCombination>();
  @$core.pragma('dart2js:noInline')
  static StringCombination getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<StringCombination>(create);
  static StringCombination _defaultInstance;

  @$pb.TagNumber(1)
  $core.int get e4 => $_getIZ(0);
  @$pb.TagNumber(1)
  set e4($core.int v) { $_setSignedInt32(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasE4() => $_has(0);
  @$pb.TagNumber(1)
  void clearE4() => clearField(1);

  @$pb.TagNumber(2)
  $core.int get b => $_getIZ(1);
  @$pb.TagNumber(2)
  set b($core.int v) { $_setSignedInt32(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasB() => $_has(1);
  @$pb.TagNumber(2)
  void clearB() => clearField(2);

  @$pb.TagNumber(3)
  $core.int get g => $_getIZ(2);
  @$pb.TagNumber(3)
  set g($core.int v) { $_setSignedInt32(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasG() => $_has(2);
  @$pb.TagNumber(3)
  void clearG() => clearField(3);

  @$pb.TagNumber(4)
  $core.int get d => $_getIZ(3);
  @$pb.TagNumber(4)
  set d($core.int v) { $_setSignedInt32(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasD() => $_has(3);
  @$pb.TagNumber(4)
  void clearD() => clearField(4);

  @$pb.TagNumber(5)
  $core.int get a => $_getIZ(4);
  @$pb.TagNumber(5)
  set a($core.int v) { $_setSignedInt32(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasA() => $_has(4);
  @$pb.TagNumber(5)
  void clearA() => clearField(5);

  @$pb.TagNumber(6)
  $core.int get e2 => $_getIZ(5);
  @$pb.TagNumber(6)
  set e2($core.int v) { $_setSignedInt32(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasE2() => $_has(5);
  @$pb.TagNumber(6)
  void clearE2() => clearField(6);

  @$pb.TagNumber(7)
  $core.String get name => $_getSZ(6);
  @$pb.TagNumber(7)
  set name($core.String v) { $_setString(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasName() => $_has(6);
  @$pb.TagNumber(7)
  void clearName() => clearField(7);
}

class PickInstruction extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PickInstruction', package: const $pb.PackageName('com.oreflow.schord'), createEmptyInstance: create)
    ..e<PickInstruction_Tempo>(1, 'tempo', $pb.PbFieldType.OE, defaultOrMaker: PickInstruction_Tempo.UNKNOWN_TEMPO, valueOf: PickInstruction_Tempo.valueOf, enumValues: PickInstruction_Tempo.values)
    ..pc<StringCombination>(2, 'picks', $pb.PbFieldType.PM, subBuilder: StringCombination.create)
    ..hasRequiredFields = false
  ;

  PickInstruction._() : super();
  factory PickInstruction() => create();
  factory PickInstruction.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PickInstruction.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PickInstruction clone() => PickInstruction()..mergeFromMessage(this);
  PickInstruction copyWith(void Function(PickInstruction) updates) => super.copyWith((message) => updates(message as PickInstruction));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PickInstruction create() => PickInstruction._();
  PickInstruction createEmptyInstance() => create();
  static $pb.PbList<PickInstruction> createRepeated() => $pb.PbList<PickInstruction>();
  @$core.pragma('dart2js:noInline')
  static PickInstruction getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PickInstruction>(create);
  static PickInstruction _defaultInstance;

  @$pb.TagNumber(1)
  PickInstruction_Tempo get tempo => $_getN(0);
  @$pb.TagNumber(1)
  set tempo(PickInstruction_Tempo v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasTempo() => $_has(0);
  @$pb.TagNumber(1)
  void clearTempo() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<StringCombination> get picks => $_getList(1);
}

class Chord extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Chord', package: const $pb.PackageName('com.oreflow.schord'), createEmptyInstance: create)
    ..aOS(1, 'chordName')
    ..aOM<StringCombination>(2, 'stringCombination', subBuilder: StringCombination.create)
    ..hasRequiredFields = false
  ;

  Chord._() : super();
  factory Chord() => create();
  factory Chord.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Chord.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Chord clone() => Chord()..mergeFromMessage(this);
  Chord copyWith(void Function(Chord) updates) => super.copyWith((message) => updates(message as Chord));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Chord create() => Chord._();
  Chord createEmptyInstance() => create();
  static $pb.PbList<Chord> createRepeated() => $pb.PbList<Chord>();
  @$core.pragma('dart2js:noInline')
  static Chord getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Chord>(create);
  static Chord _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get chordName => $_getSZ(0);
  @$pb.TagNumber(1)
  set chordName($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasChordName() => $_has(0);
  @$pb.TagNumber(1)
  void clearChordName() => clearField(1);

  @$pb.TagNumber(2)
  StringCombination get stringCombination => $_getN(1);
  @$pb.TagNumber(2)
  set stringCombination(StringCombination v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasStringCombination() => $_has(1);
  @$pb.TagNumber(2)
  void clearStringCombination() => clearField(2);
  @$pb.TagNumber(2)
  StringCombination ensureStringCombination() => $_ensure(1);
}

class ChordInstruction extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('ChordInstruction', package: const $pb.PackageName('com.oreflow.schord'), createEmptyInstance: create)
    ..pc<Chord>(1, 'chords', $pb.PbFieldType.PM, subBuilder: Chord.create)
    ..hasRequiredFields = false
  ;

  ChordInstruction._() : super();
  factory ChordInstruction() => create();
  factory ChordInstruction.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ChordInstruction.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  ChordInstruction clone() => ChordInstruction()..mergeFromMessage(this);
  ChordInstruction copyWith(void Function(ChordInstruction) updates) => super.copyWith((message) => updates(message as ChordInstruction));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ChordInstruction create() => ChordInstruction._();
  ChordInstruction createEmptyInstance() => create();
  static $pb.PbList<ChordInstruction> createRepeated() => $pb.PbList<ChordInstruction>();
  @$core.pragma('dart2js:noInline')
  static ChordInstruction getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ChordInstruction>(create);
  static ChordInstruction _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<Chord> get chords => $_getList(0);
}

enum InstructionSection_Instruction {
  pickInstruction, 
  chordInstruction, 
  notSet
}

class InstructionSection extends $pb.GeneratedMessage {
  static const $core.Map<$core.int, InstructionSection_Instruction> _InstructionSection_InstructionByTag = {
    1 : InstructionSection_Instruction.pickInstruction,
    2 : InstructionSection_Instruction.chordInstruction,
    0 : InstructionSection_Instruction.notSet
  };
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('InstructionSection', package: const $pb.PackageName('com.oreflow.schord'), createEmptyInstance: create)
    ..oo(0, [1, 2])
    ..aOM<PickInstruction>(1, 'pickInstruction', subBuilder: PickInstruction.create)
    ..aOM<ChordInstruction>(2, 'chordInstruction', subBuilder: ChordInstruction.create)
    ..hasRequiredFields = false
  ;

  InstructionSection._() : super();
  factory InstructionSection() => create();
  factory InstructionSection.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory InstructionSection.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  InstructionSection clone() => InstructionSection()..mergeFromMessage(this);
  InstructionSection copyWith(void Function(InstructionSection) updates) => super.copyWith((message) => updates(message as InstructionSection));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static InstructionSection create() => InstructionSection._();
  InstructionSection createEmptyInstance() => create();
  static $pb.PbList<InstructionSection> createRepeated() => $pb.PbList<InstructionSection>();
  @$core.pragma('dart2js:noInline')
  static InstructionSection getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<InstructionSection>(create);
  static InstructionSection _defaultInstance;

  InstructionSection_Instruction whichInstruction() => _InstructionSection_InstructionByTag[$_whichOneof(0)];
  void clearInstruction() => clearField($_whichOneof(0));

  @$pb.TagNumber(1)
  PickInstruction get pickInstruction => $_getN(0);
  @$pb.TagNumber(1)
  set pickInstruction(PickInstruction v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasPickInstruction() => $_has(0);
  @$pb.TagNumber(1)
  void clearPickInstruction() => clearField(1);
  @$pb.TagNumber(1)
  PickInstruction ensurePickInstruction() => $_ensure(0);

  @$pb.TagNumber(2)
  ChordInstruction get chordInstruction => $_getN(1);
  @$pb.TagNumber(2)
  set chordInstruction(ChordInstruction v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasChordInstruction() => $_has(1);
  @$pb.TagNumber(2)
  void clearChordInstruction() => clearField(2);
  @$pb.TagNumber(2)
  ChordInstruction ensureChordInstruction() => $_ensure(1);
}

class Instruction extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Instruction', package: const $pb.PackageName('com.oreflow.schord'), createEmptyInstance: create)
    ..pc<InstructionSection>(1, 'sections', $pb.PbFieldType.PM, subBuilder: InstructionSection.create)
    ..hasRequiredFields = false
  ;

  Instruction._() : super();
  factory Instruction() => create();
  factory Instruction.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Instruction.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Instruction clone() => Instruction()..mergeFromMessage(this);
  Instruction copyWith(void Function(Instruction) updates) => super.copyWith((message) => updates(message as Instruction));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Instruction create() => Instruction._();
  Instruction createEmptyInstance() => create();
  static $pb.PbList<Instruction> createRepeated() => $pb.PbList<Instruction>();
  @$core.pragma('dart2js:noInline')
  static Instruction getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Instruction>(create);
  static Instruction _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<InstructionSection> get sections => $_getList(0);
}

class Vocal extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Vocal', package: const $pb.PackageName('com.oreflow.schord'), createEmptyInstance: create)
    ..pPS(1, 'lines')
    ..hasRequiredFields = false
  ;

  Vocal._() : super();
  factory Vocal() => create();
  factory Vocal.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Vocal.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Vocal clone() => Vocal()..mergeFromMessage(this);
  Vocal copyWith(void Function(Vocal) updates) => super.copyWith((message) => updates(message as Vocal));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Vocal create() => Vocal._();
  Vocal createEmptyInstance() => create();
  static $pb.PbList<Vocal> createRepeated() => $pb.PbList<Vocal>();
  @$core.pragma('dart2js:noInline')
  static Vocal getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Vocal>(create);
  static Vocal _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.String> get lines => $_getList(0);
}

class SongSection extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('SongSection', package: const $pb.PackageName('com.oreflow.schord'), createEmptyInstance: create)
    ..e<SongSection_Section>(1, 'section', $pb.PbFieldType.OE, defaultOrMaker: SongSection_Section.UNKNOWN_SECTION, valueOf: SongSection_Section.valueOf, enumValues: SongSection_Section.values)
    ..a<$core.int>(2, 'number', $pb.PbFieldType.O3)
    ..hasRequiredFields = false
  ;

  SongSection._() : super();
  factory SongSection() => create();
  factory SongSection.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory SongSection.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  SongSection clone() => SongSection()..mergeFromMessage(this);
  SongSection copyWith(void Function(SongSection) updates) => super.copyWith((message) => updates(message as SongSection));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static SongSection create() => SongSection._();
  SongSection createEmptyInstance() => create();
  static $pb.PbList<SongSection> createRepeated() => $pb.PbList<SongSection>();
  @$core.pragma('dart2js:noInline')
  static SongSection getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<SongSection>(create);
  static SongSection _defaultInstance;

  @$pb.TagNumber(1)
  SongSection_Section get section => $_getN(0);
  @$pb.TagNumber(1)
  set section(SongSection_Section v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasSection() => $_has(0);
  @$pb.TagNumber(1)
  void clearSection() => clearField(1);

  @$pb.TagNumber(2)
  $core.int get number => $_getIZ(1);
  @$pb.TagNumber(2)
  set number($core.int v) { $_setSignedInt32(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasNumber() => $_has(1);
  @$pb.TagNumber(2)
  void clearNumber() => clearField(2);
}

class Song extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Song', package: const $pb.PackageName('com.oreflow.schord'), createEmptyInstance: create)
    ..pc<SongSection>(1, 'sections', $pb.PbFieldType.PM, subBuilder: SongSection.create)
    ..m<$core.String, Instruction>(2, 'instructions', entryClassName: 'Song.InstructionsEntry', keyFieldType: $pb.PbFieldType.OS, valueFieldType: $pb.PbFieldType.OM, valueCreator: Instruction.create, packageName: const $pb.PackageName('com.oreflow.schord'))
    ..m<$core.String, Vocal>(3, 'vocals', entryClassName: 'Song.VocalsEntry', keyFieldType: $pb.PbFieldType.OS, valueFieldType: $pb.PbFieldType.OM, valueCreator: Vocal.create, packageName: const $pb.PackageName('com.oreflow.schord'))
    ..hasRequiredFields = false
  ;

  Song._() : super();
  factory Song() => create();
  factory Song.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Song.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Song clone() => Song()..mergeFromMessage(this);
  Song copyWith(void Function(Song) updates) => super.copyWith((message) => updates(message as Song));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Song create() => Song._();
  Song createEmptyInstance() => create();
  static $pb.PbList<Song> createRepeated() => $pb.PbList<Song>();
  @$core.pragma('dart2js:noInline')
  static Song getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Song>(create);
  static Song _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<SongSection> get sections => $_getList(0);

  @$pb.TagNumber(2)
  $core.Map<$core.String, Instruction> get instructions => $_getMap(1);

  @$pb.TagNumber(3)
  $core.Map<$core.String, Vocal> get vocals => $_getMap(2);
}

