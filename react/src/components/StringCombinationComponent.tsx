import * as React from 'react';

import RemoveIcon from '@material-ui/icons/Remove';
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';


import StringCombinationProps from './StringCombinationProps';
import styles from '../styles';

class StringCombinationComponent extends React.Component<StringCombinationProps, {}> {

  renderChord(name: string) {
    return (<Avatar style={styles.fretAvatar}>{name}</Avatar>); 
  }


  renderFretAvatar(fretNumber: number) {
    return fretNumber >= 0 ? 
      <Avatar style={styles.fretAvatar}>{fretNumber}</Avatar> : 
      <RemoveIcon style={styles.fretAvatar}>-</RemoveIcon>;
  }

  render() {
    return (
      <Box display="flex" flexDirection="column" flexWrap="nowrap">
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
