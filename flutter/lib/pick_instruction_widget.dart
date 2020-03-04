import 'dart:ui' as ui;
import 'package:schord/proto/messages.pb.dart';
import 'package:flutter/material.dart';

class _PickInstructionPainter extends CustomPainter {
  static const LINE_THICKNESS = 1.0;
  final StringCombination stringCombination;

  _PickInstructionPainter(this.stringCombination);

  int getFret(int string) {
    switch (string) {
      case 1:
        return stringCombination.hasE4() ? stringCombination.e4 : null;
      case 2:
        return stringCombination.hasB() ? stringCombination.b : null;
      case 3:
        return stringCombination.hasG() ? stringCombination.g : null;
      case 4:
        return stringCombination.hasD() ? stringCombination.d : null;
      case 5:
        return stringCombination.hasA() ? stringCombination.a : null;
      case 6:
        return stringCombination.hasE2() ? stringCombination.e2 : null;
      default:
        return null;
    }
  }

  @override
  void paint(Canvas canvas, Size size) {
    var paint = Paint();
    paint.color = Colors.deepPurple;
    paint.strokeWidth = LINE_THICKNESS;

    var margin = (size.height - 6 * LINE_THICKNESS) / 7.0;

    for (int i = 1; i <= 6; i++) {
      canvas.drawLine(
        Offset(5, i * margin),
        Offset(size.width - 5, i * margin),
        paint,
      );
      int fret = getFret(i);
      if (fret != null) {
        canvas.drawCircle(
          Offset(size.width / 2, i * margin),
          size.width / 3,
          paint,
        );
        /* Text Drawing */
        final textStyle = ui.TextStyle(
          color: Colors.white,
          fontSize: 24,
        );
        final paragraphStyle = ui.ParagraphStyle(
          textDirection: TextDirection.ltr,
        );
        final paragraphBuilder = ui.ParagraphBuilder(paragraphStyle)
          ..pushStyle(textStyle)
          ..addText(fret.toString());
        final constraints = ui.ParagraphConstraints(width: 300);
        final paragraph = paragraphBuilder.build();
        paragraph.layout(constraints);
        final offset = Offset(size.width / 2 - 7, i * margin - 13);
        canvas.drawParagraph(paragraph, offset);
      }
    }
  }

  @override
  bool shouldRepaint(CustomPainter old) {
    return false;
  }
}

class PickInstructionWidget extends StatelessWidget {
  final eightLabels = ['1', '+', '2', '+', '3', '+', '4', '+'];

  final PickInstruction pickInstruction;

  PickInstructionWidget({this.pickInstruction});

  String _getLabelForIndex(int index) {
    if (pickInstruction.tempo == PickInstruction_Tempo.EIGHT) {
      return eightLabels[index % 8];
    }
    return '';
  }
  @override
  Widget build(BuildContext context) {
    return Row(
        mainAxisSize: MainAxisSize.min,
      children: pickInstruction.picks
      .asMap().entries
          .map((entry) => Column(
                children: [
                  CustomPaint(
                    size: Size(40, 200),
                    painter: _PickInstructionPainter(entry.value),
                  ),
                  Text(_getLabelForIndex(entry.key)),
                ],
              ))
          .toList(),
    );
  }
}
