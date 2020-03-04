import 'package:schord/proto/messages.pb.dart';
import 'package:flutter/material.dart';

class VocalWidget extends StatelessWidget {
  final Vocal vocal;

  VocalWidget({this.vocal});

  @override
  Widget build(BuildContext context) {
    return Column(
        children: vocal.lines
            .map(
              (line) => Text(
                line,
                style: TextStyle(fontSize: 24),
                softWrap: true,
              ),
            )
            .toList());
  }
}
