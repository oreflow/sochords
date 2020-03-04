///
//  Generated code. Do not modify.
//  source: proto/messages.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

const StringCombination$json = const {
  '1': 'StringCombination',
  '2': const [
    const {'1': 'e4', '3': 1, '4': 1, '5': 5, '10': 'e4'},
    const {'1': 'b', '3': 2, '4': 1, '5': 5, '10': 'b'},
    const {'1': 'g', '3': 3, '4': 1, '5': 5, '10': 'g'},
    const {'1': 'd', '3': 4, '4': 1, '5': 5, '10': 'd'},
    const {'1': 'a', '3': 5, '4': 1, '5': 5, '10': 'a'},
    const {'1': 'e2', '3': 6, '4': 1, '5': 5, '10': 'e2'},
    const {'1': 'name', '3': 7, '4': 1, '5': 9, '10': 'name'},
  ],
};

const PickInstruction$json = const {
  '1': 'PickInstruction',
  '2': const [
    const {'1': 'tempo', '3': 1, '4': 1, '5': 14, '6': '.com.oreflow.schord.PickInstruction.Tempo', '10': 'tempo'},
    const {'1': 'picks', '3': 2, '4': 3, '5': 11, '6': '.com.oreflow.schord.StringCombination', '10': 'picks'},
  ],
  '4': const [PickInstruction_Tempo$json],
};

const PickInstruction_Tempo$json = const {
  '1': 'Tempo',
  '2': const [
    const {'1': 'UNKNOWN_TEMPO', '2': 0},
    const {'1': 'EIGHT', '2': 1},
  ],
};

const Chord$json = const {
  '1': 'Chord',
  '2': const [
    const {'1': 'chord_name', '3': 1, '4': 1, '5': 9, '10': 'chordName'},
    const {'1': 'string_combination', '3': 2, '4': 1, '5': 11, '6': '.com.oreflow.schord.StringCombination', '10': 'stringCombination'},
  ],
};

const ChordInstruction$json = const {
  '1': 'ChordInstruction',
  '2': const [
    const {'1': 'chords', '3': 1, '4': 3, '5': 11, '6': '.com.oreflow.schord.Chord', '10': 'chords'},
  ],
};

const InstructionSection$json = const {
  '1': 'InstructionSection',
  '2': const [
    const {'1': 'pick_instruction', '3': 1, '4': 1, '5': 11, '6': '.com.oreflow.schord.PickInstruction', '9': 0, '10': 'pickInstruction'},
    const {'1': 'chord_instruction', '3': 2, '4': 1, '5': 11, '6': '.com.oreflow.schord.ChordInstruction', '9': 0, '10': 'chordInstruction'},
  ],
  '8': const [
    const {'1': 'instruction'},
  ],
};

const Instruction$json = const {
  '1': 'Instruction',
  '2': const [
    const {'1': 'sections', '3': 1, '4': 3, '5': 11, '6': '.com.oreflow.schord.InstructionSection', '10': 'sections'},
  ],
};

const Vocal$json = const {
  '1': 'Vocal',
  '2': const [
    const {'1': 'lines', '3': 1, '4': 3, '5': 9, '10': 'lines'},
  ],
};

const SongSection$json = const {
  '1': 'SongSection',
  '2': const [
    const {'1': 'section', '3': 1, '4': 1, '5': 14, '6': '.com.oreflow.schord.SongSection.Section', '10': 'section'},
    const {'1': 'number', '3': 2, '4': 1, '5': 5, '10': 'number'},
  ],
  '4': const [SongSection_Section$json],
};

const SongSection_Section$json = const {
  '1': 'Section',
  '2': const [
    const {'1': 'UNKNOWN_SECTION', '2': 0},
    const {'1': 'INTRO', '2': 1},
    const {'1': 'VERSE', '2': 2},
    const {'1': 'PRE_CHORUS', '2': 3},
    const {'1': 'CHORUS', '2': 4},
    const {'1': 'BRIDGE', '2': 5},
    const {'1': 'OUTRO', '2': 6},
    const {'1': 'POST_CHORUS', '2': 7},
    const {'1': 'SOLO', '2': 8},
  ],
};

const Song$json = const {
  '1': 'Song',
  '2': const [
    const {'1': 'sections', '3': 1, '4': 3, '5': 11, '6': '.com.oreflow.schord.SongSection', '10': 'sections'},
    const {'1': 'instructions', '3': 2, '4': 3, '5': 11, '6': '.com.oreflow.schord.Song.InstructionsEntry', '10': 'instructions'},
    const {'1': 'vocals', '3': 3, '4': 3, '5': 11, '6': '.com.oreflow.schord.Song.VocalsEntry', '10': 'vocals'},
  ],
  '3': const [Song_InstructionsEntry$json, Song_VocalsEntry$json],
};

const Song_InstructionsEntry$json = const {
  '1': 'InstructionsEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 11, '6': '.com.oreflow.schord.Instruction', '10': 'value'},
  ],
  '7': const {'7': true},
};

const Song_VocalsEntry$json = const {
  '1': 'VocalsEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 11, '6': '.com.oreflow.schord.Vocal', '10': 'value'},
  ],
  '7': const {'7': true},
};

