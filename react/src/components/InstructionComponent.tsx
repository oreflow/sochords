import * as React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import InstructionProps from './InstructionProps';

class InstructionComponent extends React.Component<InstructionProps, {}> {

  render() {
    return (
      <React.Fragment>
        <Box display="flex" justifyContent="center">
          <span>
            Instructions
          </span>
        </Box>
      </React.Fragment>
    );
  }
}

export default InstructionComponent;
