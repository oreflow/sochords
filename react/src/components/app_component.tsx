import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { SoChordSong, SoChordSongMap } from 'gen/proto/messages_pb';
import {SchordContext} from 'src/context';
import SchordSongComponent from 'src/components/schordsong/schord_song_component';
import * as styles from 'src/components/app.scss';

class App extends React.Component<{}, {}> {
  static contextType = SchordContext;

  _selectSong(song: SoChordSongMap[keyof SoChordSongMap]) {
    this.context.schordService.selectSong(song);
  }

  render() {
    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Schord
            </Typography>
            <Button 
              onClick={() => this._selectSong(SoChordSong.SHALLOW)} 
              color="inherit" 
              className={styles.songButton}>
              Shallow
            </Button>
            <Button 
              onClick={() => this._selectSong(SoChordSong.GOOD_RIDDANCE)} 
              color="inherit" 
              className={styles.songButton}>
              Good Riddance
            </Button>
            <Button 
              onClick={() => this._selectSong(SoChordSong.THE_PARTING_GLASS)} 
              color="inherit" 
              className={styles.songButton}>
              The Parting Glass
            </Button>
          </Toolbar>
        </AppBar>

        <Box className={styles.schordSongWrapper}>
          <SchordSongComponent/>
        </Box>
      </React.Fragment>
    );
  }
}

export default App;
