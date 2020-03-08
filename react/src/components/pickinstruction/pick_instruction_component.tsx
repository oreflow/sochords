import * as React from 'react';
import Box from '@material-ui/core/Box';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import RemoveIcon from '@material-ui/icons/Remove';
import Avatar from '@material-ui/core/Avatar';
import {v4 as uuidv4} from 'uuid';

import PickInstructionProps from 'src/components/pickinstruction/pick_instruction_props';
import { PickInstruction, TempoMap, Tempo, StringCombination } from 'gen/proto/messages_pb';
import * as styles from 'src/components/pickinstruction/pick_instruction.scss';

interface _ChordTileAggregate {
  chord: string;
  size: number;
}

class PickInstructionComponent extends React.Component<PickInstructionProps, {}> {

  _renderChordTile(chord: string, cols: number) {
    return (
      <td key={uuidv4()} colSpan={cols}>
        <Box className={styles.fretCell}>{chord}</Box>
      </td>
    );
  }
  
  _getChordTiles(stringCombinations: StringCombination[]): JSX.Element[] {
    return stringCombinations
      .reduce((acc: _ChordTileAggregate[], stringCombination) => {
        if (acc[acc.length - 1]?.chord === stringCombination.getName()) {
          acc[acc.length - 1].size++;
        } else {
          acc.push({chord: stringCombination.getName(), size: 1});
        }
        return acc;
      }, [])
      .map((aggregated) => this._renderChordTile(aggregated.chord, aggregated.size));
  }

  _renderFretAvatar(fretNumber: number): JSX.Element {
    return (
      <td key={uuidv4()}>
        {
          fretNumber >= 0 ? 
          <Box className={`${styles.fretCell} ${styles.fretInstruction}`}>{fretNumber}</Box> : 
          <RemoveIcon className={styles.fretCell}>-</RemoveIcon>
        }
      </td>);
  }

  _renderTempoTiles(tempo: TempoMap[keyof TempoMap]): JSX.Element[] {
    let tempoStrings: string[] = [];
    switch(tempo) {
      case Tempo.EIGHT:
        tempoStrings = ['1', '+', '2', '+', '3', '+', '4', '+'];
        break;
    }
    return tempoStrings.map(label => (
        <td key={uuidv4()}>
          <Box className={styles.fretCell}>{label}</Box> 
        </td>));
  }

  render() {
    const picks = this.props.pickInstruction.getPicksList();
    return (
      <Box display="flex" justifyContent="center">
        <Box className={styles.beforeStringCombination}></Box>
        <table>
          <tbody>
            <tr className={styles.fretRow}>
              {this._getChordTiles(picks)}
            </tr>
            <tr className={styles.fretRow}>
              {picks.map((pick) => this._renderFretAvatar(pick.getE4()))}
            </tr>
            <tr className={styles.fretRow}>
              {picks.map((pick) => this._renderFretAvatar(pick.getB()))}
            </tr>
            <tr className={styles.fretRow}>
              {picks.map((pick) => this._renderFretAvatar(pick.getG()))}
            </tr>
            <tr className={styles.fretRow}>
              {picks.map((pick) => this._renderFretAvatar(pick.getD()))}
            </tr>
            <tr className={styles.fretRow}>
              {picks.map((pick) => this._renderFretAvatar(pick.getA()))}
            </tr>
            <tr className={styles.fretRow}>
              {picks.map((pick) => this._renderFretAvatar(pick.getE2()))}
            </tr>
            <tr className={styles.fretRow}>
              {this._renderTempoTiles(this.props.pickInstruction.getTempo())}
            </tr>
          </tbody>
        </table>
        <Box className={styles.afterStringCombination}></Box>
      </Box>
    );
  }
}

export default PickInstructionComponent;
