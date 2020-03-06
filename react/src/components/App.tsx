import * as React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import {Instruction} from '../../gen/proto/messages_pb';

import SchordSongComponent from './schordsong/schordsongcomponent';

class App extends React.Component<{}, {}> {

  render() {
    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Schord
            </Typography>
          </Toolbar>
        </AppBar>

        <Box display="flex" justifyContent="center">
          <SchordSongComponent />
        </Box>
      </React.Fragment>
    );
  }
}

export default App;
