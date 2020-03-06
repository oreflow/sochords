import * as React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import PickInstructionProps from './pickinstructionprops';
import StringCombinationComponent from '../stringcombination/stringcombinationcomponent';

class PickInstructionComponent extends React.Component<PickInstructionProps, {}> {

  render() {
    return (
      <Box display="flex" justifyContent="center">
        {this.props.pickInstruction.getPicksList().map((stringCombination, index) => {
          return (<StringCombinationComponent key={index} stringCombination={stringCombination}></StringCombinationComponent>);
        })}
      </Box>
    );
  }
}

export default PickInstructionComponent;
