import 'package:schord/proto/messages.pb.dart';

class Service {
  StringCombination createSc({
    int e4,
    int b,
    int g,
    int d,
    int a,
    int e2,
    String name,
  }) {
    StringCombination sc = StringCombination.create();
    if (e4 != null) sc.e4 = e4;
    if (b != null) sc.b = b;
    if (g != null) sc.g = g;
    if (d != null) sc.d = d;
    if (a != null) sc.a = a;
    if (e2 != null) sc.e2 = e2;
    if (e2 != null) sc.e2 = e2;
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

    PickInstruction pickInstruction1 = PickInstruction.create()
      ..picks.add(createSc(e2: 0))
      ..picks.add(createSc(d: 2))
      ..picks.add(createSc(b: 3))
      ..picks.add(createSc(g: 0))
      ..picks.add(createSc(e2: 2))
      ..picks.add(createSc(b: 3, g: 2))
      ..picks.add(createSc())
      ..picks.add(createSc(b: 3, g: 0, e2: 3, name: 'G'))
      ..tempo = PickInstruction_Tempo.EIGHT;
    PickInstruction pickInstruction2 = PickInstruction.create()
      ..picks.add(createSc())
      ..picks.add(createSc())
      ..picks.add(createSc())
      ..picks.add(createSc())
      ..picks.add(createSc())
      ..picks.add(createSc())
      ..picks.add(createSc())
      ..picks.add(createSc())
      ..tempo = PickInstruction_Tempo.EIGHT;
    PickInstruction pickInstruction3 = PickInstruction.create()
      ..picks.add(createSc(a: 3))
      ..picks.add(createSc(d: 2))
      ..picks.add(createSc(b: 1))
      ..picks.add(createSc(g: 0))
      ..picks.add(createSc(d: 2))
      ..picks.add(createSc(e2: 0))
      ..picks.add(createSc(b: 1))
      ..picks.add(createSc(g: 0))
      ..tempo = PickInstruction_Tempo.EIGHT;
    PickInstruction pickInstruction4 = PickInstruction.create()
      ..picks.add(createSc(b: 3, g: 0, e2: 3))
      ..picks.add(createSc())
      ..picks.add(createSc())
      ..picks.add(createSc())
      ..picks.add(createSc(b: 3, g: 2, d: 0))
      ..picks.add(createSc())
      ..picks.add(createSc())
      ..picks.add(createSc())
      ..tempo = PickInstruction_Tempo.EIGHT;

    Instruction instruction = Instruction.create()
    ..sections.add(InstructionSection.create()..pickInstruction = pickInstruction1)
    ..sections.add(InstructionSection.create()..pickInstruction = pickInstruction2)
    ..sections.add(InstructionSection.create()..pickInstruction = pickInstruction3)
    ..sections.add(InstructionSection.create()..pickInstruction = pickInstruction4);

    Vocal vocal = Vocal.create();
    vocal.lines.add('''
Tell me somethin', girl
Are you happy in this modern world?
Or do you need more?
Is there somethin' else you're searchin' for?
I'm falling
In all the good times I find myself
Longin' for change
And in the bad times I fear myself

Tell me something, boy
Aren't you tired tryin' to fill that void?
Or do you need more?
Ain't it hard keeping it so hardcore?
I'm falling
In all the good times I find myself
Longing for change
And in the bad times I fear myself
        ''');

    song.sections.add(chorusOne);
    song.instructions[chorusOne.toString()] = instruction;
    song.vocals[chorusOne.toString()] = Vocal.create();

    song.sections.add(chorusTwo);
    song.instructions[chorusTwo.toString()] = instruction;
    song.vocals[chorusTwo.toString()] = vocal;

    return song;
  }
}
/*
I'm off the deep end, watch as I dive in
I'll never meet the ground
Crash through the surface, where they can't hurt us
We're far from the shallow now
In the shallow, shallow
In the shallow, shallow
In the shallow, shallow
We're far from the shallow now
Oh, oh, oh, oh
Whoah!
I'm off the deep end, watch as I dive in
I'll never meet the ground
Crash through the surface, where they can't hurt us
We're far from the shallow now
In the shallow, shallow
In the shallow, shallow
In the shallow, shallow
We're far from the shallow now

   */
