import 'package:schord/proto/messages.pb.dart';

class Service {
  StringCombination createSc({int e4, int b, int g, int d, int a, int e2}) {
    StringCombination sc = StringCombination.create();
    if (e4 != null) sc.e4 = e4;
    if (b  != null) sc.b = b;
    if (g  != null) sc.g = g;
    if (d  != null) sc.d = d;
    if (a  != null) sc.a = a;
    if (e2  != null) sc.e2 = e2;
    return sc;
  }

  Song getSong() {
    Song song = Song.create();
    SongSection chorusOne = SongSection.create()
    ..section = SongSection_Section.CHORUS
    ..number = 1;

    SongSection chorusTwo = SongSection.create();
    chorusTwo.section = SongSection_Section.CHORUS;
    chorusTwo.number = 2;

    PickInstruction pi = PickInstruction.create()
    ..picks.add(createSc(e2: 0))
    ..picks.add(createSc(d: 2))
    ..picks.add(createSc(b: 3))
    ..picks.add(createSc(g: 0))
    ..picks.add(createSc(e2: 2))
    ..picks.add(createSc(b: 3, g: 2))
    ..picks.add(createSc())
    ..picks.add(createSc(b: 3, g: 0, e2: 3))

    ..picks.add(createSc())
    ..picks.add(createSc())
    ..picks.add(createSc())
    ..picks.add(createSc())
    ..picks.add(createSc())
    ..picks.add(createSc())
    ..picks.add(createSc())
    ..picks.add(createSc())

    ..picks.add(createSc(a: 3))
    ..picks.add(createSc(d: 2))
    ..picks.add(createSc(b: 1))
    ..picks.add(createSc(g: 0))
    ..picks.add(createSc(d: 2))
    ..picks.add(createSc(e2: 0))
    ..picks.add(createSc(b: 1))
    ..picks.add(createSc(g: 0))

    ..picks.add(createSc(b: 3, g: 0, e2: 3))
    ..picks.add(createSc())
    ..picks.add(createSc())
    ..picks.add(createSc())
    ..picks.add(createSc(b: 3, g: 2, d: 0))
    ..picks.add(createSc())
    ..picks.add(createSc())
    ..picks.add(createSc())
    ..tempo = PickInstruction_Tempo.EIGHT;

    Instruction instruction = Instruction.create();
    instruction.pickInstruction = pi;

    Vocal vocal = Vocal.create();
    vocal.lines.add('La lalalal lalalalallalala lala');

    song.sections.add(chorusOne);
    song.instructions[chorusOne.toString()] = instruction;
    song.vocals[chorusOne.toString()] = vocal;

    song.sections.add(chorusTwo);
    song.instructions[chorusTwo.toString()] = instruction;
    song.vocals[chorusTwo.toString()] = vocal;

    return song;
  }
}
