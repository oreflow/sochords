import 'package:schord/proto/messages.pb.dart';
import 'package:schord/pick_instruction_widget.dart';
import 'package:flutter/material.dart';

class InstructionWidget extends StatelessWidget {
  final Instruction instruction;

  InstructionWidget({this.instruction});

  @override
  Widget build(BuildContext context) {

    switch (instruction.whichInstruction()) {
      case Instruction_Instruction.pickInstruction:
        return PickInstructionWidget(
            pickInstruction: instruction.pickInstruction);
      case Instruction_Instruction.chordInstruction:
      default:
        return Text('Not supported');
    }
  }
}
