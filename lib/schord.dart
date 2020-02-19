import 'package:schord/proto/messages.pb.dart';
import 'package:provider/provider.dart';
import 'package:schord/service.dart';
import 'package:schord/instruction_widget.dart';
import 'package:schord/vocal_widget.dart';
import 'package:flutter/material.dart';

class Schord extends StatelessWidget {
  List<Widget> _getSongRows(Song song) {
    return song.sections
        .map(
          (section) => Card(
            child: Row(
              mainAxisSize: MainAxisSize.min,
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Padding(
                  padding: EdgeInsets.all(20.0),
                  child: InstructionWidget(
                      instruction: song.instructions[section.toString()]),
                ),
                VerticalDivider(),
                Padding(
                  padding: EdgeInsets.all(20.0),
                  child: VocalWidget(vocal: song.vocals[section.toString()]),
                ),
              ],
            ),
          ),
        )
        .toList();
  }

  @override
  Widget build(BuildContext context) {
    Song song = Provider.of<Service>(context).getSong();

    return Scaffold(
      appBar: AppBar(
        title: Text('Schord'),
      ),
      body: SingleChildScrollView(
          child: Center(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.center,
          children: _getSongRows(song),
        ),
      ),),
    );
  }
}
