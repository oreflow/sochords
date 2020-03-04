import 'package:schord/proto/messages.pb.dart';
import 'package:schord/pick_instruction_widget.dart';
import 'package:flutter/material.dart';

class InstructionWidget extends StatelessWidget {
  final Instruction instruction;

  InstructionWidget({this.instruction});

  Widget _getWidgetForSection(InstructionSection section) {
    switch (section.whichInstruction()) {
      case InstructionSection_Instruction.pickInstruction:
        return PickInstructionWidget(
            pickInstruction: section.pickInstruction);
      case InstructionSection_Instruction.chordInstruction:
      default:
        return Text('Not supported');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Wrap(spacing: 10.0, runSpacing: 0.0, children: instruction.sections.map(_getWidgetForSection).toList());
  }

}
