import * as React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Subscription} from 'rxjs';

import {InstructionSection, SongSection, Song, Instruction, Vocal, PickInstruction} from '../../../gen/proto/messages_pb';

import PickSongSectionComponent from '../pickinstruction/pickinstructioncomponent';
import VocalComponent from '../vocal/vocalcomponent';
import SchordSongProps from './schordsongprops';
import {SchordContext} from '../../service/schord_context';
import {SchordService} from '../../service/schord_service';
import {songSectionToString} from '../../common/common';


class SchordSongComponent extends React.Component<SchordSongProps, 
  {
    song: Song;
  }> {
    static contextType = SchordContext;

    readonly subscriptions: Subscription[]  = [];

    componentDidMount() {
      const service = this.context.schordService;

      const sub = 
        service.song().subscribe((newSong: Song) => {
          console.log('new song is', newSong.toObject());
          this.setState({
            song: newSong,
          });
        });
      this.subscriptions.push(sub);
    }

    componentWillUnmount() {
      this.subscriptions.forEach((sub) => sub.unsubscribe());
    }

    renderSection(instruction: Instruction, vocal: Vocal) {
      return (
        <Box display="flex" flexDirection="row" alignItems="center" border="4px dashed gray" padding="10px" margin="5px">
          <Typography>{}</Typography>

          <Box display="flex" flexDirection="row" alignItems="center">
            <Box display="flex" flexDirection="row" alignItems="center" flexWrap="wrap">
              {
                instruction.getSectionsList().map((instructionSection, index) => {
                  switch (instructionSection.getInstructionCase()) {
                    case InstructionSection.InstructionCase.CHORD_INSTRUCTION:
                    return <div key={index}> Chord Instruction </div>;
                    case InstructionSection.InstructionCase.PICK_INSTRUCTION:
                    return (<PickSongSectionComponent 
                      pickInstruction={instructionSection.getPickInstruction()!} 
                      key={index}>
                      Pick Instruction
                    </PickSongSectionComponent>);
                    default: 
                      return <div key={index}> Unsupported Instruction Type </div>
                  }
                })
              }
            </Box>
            <VocalComponent vocal={vocal}></VocalComponent>
          </Box>
        </Box>
        );
    }

    render() {
      if (!this.state?.song) return <div>Loading...</div>;

      return (
        <Box display="flex" justifyContent="center" flexDirection="column">
          {
            this.state.song.getSectionsList().map(section => {
              const sectionString = songSectionToString(section);
              const instruction = this.state.song.getInstructionsMap().get(sectionString) ?? new Instruction();
              const vocal = this.state.song.getVocalsMap().get(sectionString) ?? new Vocal();
              return (<Box key={sectionString}>
                {this.renderSection(instruction, vocal)}
              </Box>);
            })
          }
          <span>
            Instructions
          </span>
        </Box>
      );
    }
  }

export default SchordSongComponent;
