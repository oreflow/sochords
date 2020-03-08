import * as React from 'react';
import Box from '@material-ui/core/Box';
import RemoveIcon from '@material-ui/icons/Remove';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Avatar from '@material-ui/core/Avatar';
import {v4 as uuidv4} from 'uuid';

import ChordInstructionProps from 'src/components/chordinstruction/chord_instruction_props';
import { Chord, ChordInstruction, Strum, StrumMap} from 'gen/proto/messages_pb';
import * as styles from 'src/components/chordinstruction/chord_instruction.scss';

interface _StrummingTileAggregate {
  strummingPattern: StrumMap[keyof StrumMap][];
  size: number;
};

class ChordInstructionComponent extends React.Component<ChordInstructionProps, {}> {

  _renderStrumAsIcon(strum: StrumMap[keyof StrumMap]) {
    switch(strum) {
      case Strum.NONE:
        return <RemoveIcon></RemoveIcon>
      case Strum.DOWN:
        return <ArrowDownwardIcon></ArrowDownwardIcon>
      case Strum.UP:
        return <ArrowUpwardIcon></ArrowUpwardIcon>
    }
  }

  _renderStrumTile(strums: StrumMap[keyof StrumMap][], cols: number) {
    return (
      <td key={uuidv4()} colSpan={cols}>
        <Box className={styles.strummingPattern}>
          {strums.map((strum) => this._renderStrumAsIcon(strum))}
        </Box>
      </td>
    );
  }

  _getStrummingTiles(chords: Chord[]): JSX.Element[] {
    return chords
      .reduce((acc: _StrummingTileAggregate[], chord) => {
        const lastPatternString = JSON.stringify(acc[acc.length - 1]?.strummingPattern);
        const thisPatternString = JSON.stringify(chord.getStrummingPatternList());
        if (lastPatternString === thisPatternString) {
          acc[acc.length - 1].size++;
        } else {
          acc.push({strummingPattern: chord.getStrummingPatternList(), size: 1});
        }
        return acc;
      }, [])
      .map((agg) => this._renderStrumTile(agg.strummingPattern, agg.size));
  }

  _renderChordRow(chords: Chord[]): JSX.Element[] {
    return chords.map((chord) => 
    <td key={uuidv4()}>
      <Box className={styles.chord}>
        {chord.getName()}
      </Box>
    </td>
    );
  }

  render() {
    const chords = this.props.chordInstruction.getChordsList();
    return (
      <Box display="flex" justifyContent="center">
        <table>
          <tbody>
            <tr>{this._renderChordRow(chords)}</tr>
            <tr>{this._getStrummingTiles(chords)}</tr>
          </tbody>
        </table>
      </Box>
    );
  }
}

export default ChordInstructionComponent;
