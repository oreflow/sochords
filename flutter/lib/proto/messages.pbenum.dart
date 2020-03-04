///
//  Generated code. Do not modify.
//  source: proto/messages.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

// ignore_for_file: UNDEFINED_SHOWN_NAME,UNUSED_SHOWN_NAME
import 'dart:core' as $core;
import 'package:protobuf/protobuf.dart' as $pb;

class PickInstruction_Tempo extends $pb.ProtobufEnum {
  static const PickInstruction_Tempo UNKNOWN_TEMPO = PickInstruction_Tempo._(0, 'UNKNOWN_TEMPO');
  static const PickInstruction_Tempo EIGHT = PickInstruction_Tempo._(1, 'EIGHT');

  static const $core.List<PickInstruction_Tempo> values = <PickInstruction_Tempo> [
    UNKNOWN_TEMPO,
    EIGHT,
  ];

  static final $core.Map<$core.int, PickInstruction_Tempo> _byValue = $pb.ProtobufEnum.initByValue(values);
  static PickInstruction_Tempo valueOf($core.int value) => _byValue[value];

  const PickInstruction_Tempo._($core.int v, $core.String n) : super(v, n);
}

class SongSection_Section extends $pb.ProtobufEnum {
  static const SongSection_Section UNKNOWN_SECTION = SongSection_Section._(0, 'UNKNOWN_SECTION');
  static const SongSection_Section INTRO = SongSection_Section._(1, 'INTRO');
  static const SongSection_Section VERSE = SongSection_Section._(2, 'VERSE');
  static const SongSection_Section PRE_CHORUS = SongSection_Section._(3, 'PRE_CHORUS');
  static const SongSection_Section CHORUS = SongSection_Section._(4, 'CHORUS');
  static const SongSection_Section BRIDGE = SongSection_Section._(5, 'BRIDGE');
  static const SongSection_Section OUTRO = SongSection_Section._(6, 'OUTRO');
  static const SongSection_Section POST_CHORUS = SongSection_Section._(7, 'POST_CHORUS');
  static const SongSection_Section SOLO = SongSection_Section._(8, 'SOLO');

  static const $core.List<SongSection_Section> values = <SongSection_Section> [
    UNKNOWN_SECTION,
    INTRO,
    VERSE,
    PRE_CHORUS,
    CHORUS,
    BRIDGE,
    OUTRO,
    POST_CHORUS,
    SOLO,
  ];

  static final $core.Map<$core.int, SongSection_Section> _byValue = $pb.ProtobufEnum.initByValue(values);
  static SongSection_Section valueOf($core.int value) => _byValue[value];

  const SongSection_Section._($core.int v, $core.String n) : super(v, n);
}

