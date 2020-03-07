import * as React from 'react';
import RemoveIcon from '@material-ui/icons/Remove';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';

import * as styles from 'src/components/stringcombination/string_combination.scss';
import StringCombinationProps from 'src/components/stringcombination/string_combination_props';

class StringCombinationComponent extends React.Component<StringCombinationProps, {}> {

  renderChord(name: string) {
    return (<Box className={styles.stringCombinationCell}>{name}</Box>); 
  }


  renderFretAvatar(fretNumber: number) {
    return fretNumber >= 0 ? 
      <Box  className={`${styles.stringCombinationCell} ${styles.fretInstruction}`}>{fretNumber}</Box> : 
      <RemoveIcon className={styles.stringCombinationCell}>-</RemoveIcon>;
  }

  render() {
    return (
      <Box className={styles.stringCombinationColumn}>
        { this.renderChord(this.props.stringCombination.getName()) }
        { this.renderFretAvatar(this.props.stringCombination.getE4()) }
        { this.renderFretAvatar(this.props.stringCombination.getB()) }
        { this.renderFretAvatar(this.props.stringCombination.getG()) }
        { this.renderFretAvatar(this.props.stringCombination.getD()) }
        { this.renderFretAvatar(this.props.stringCombination.getA()) }
        { this.renderFretAvatar(this.props.stringCombination.getE2()) }
      </Box>
    );
  }
}

export default StringCombinationComponent;
