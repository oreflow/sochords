import * as React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import VocalProps from './vocalprops';

class VocalComponent extends React.Component<VocalProps, {}> {

  render() {
    return (
        <Box>
          {
            this.props.vocal.getLinesList().map((line, index) => {
              return <Typography key={index} variant="h5">{line}</Typography>;
            })
          }
        </Box>
    );
  }
}

export default VocalComponent;
