import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:schord/schord.dart';
import 'package:schord/service.dart';

void main() => runApp(SchordApp());

class SchordApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        Provider<Service>(create: (_) => Service()),
      ],
      child: MaterialApp(
        title: 'Schord',
        theme: ThemeData(
          primarySwatch: Colors.purple,
        ),
        home: Schord(),
      ),
    );
  }
}
