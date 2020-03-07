import * as React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {Subscription} from 'rxjs';

import {InstructionSection, Song, Instruction, Vocal} from 'gen/proto/messages_pb';

import PickInstructionComponent from 'src/components/pickinstruction/pick_instruction_component';
import VocalComponent from 'src/components/vocal/vocal_component';
import {SchordContext} from 'src/context';
import {SchordService} from 'src/service/schord_service';
import {songSectionToString} from 'src/common/common';

import * as styles from 'src/components/schordsong/schord_song.scss';
import SchordSongProps from 'src/components/schordsong/schord_song_props';

interface SchordSongState {
    song: Song;
}

class SchordSongComponent extends React.Component<SchordSongProps, SchordSongState> {
  static contextType = SchordContext;
  readonly subscriptions: Subscription[]  = [];

  componentDidMount() {
    const service = this.context.schordService;

    this.subscriptions.push(
      service.song().subscribe((newSong: Song) => {
        this.setState({ song: newSong, });
      }));
  }

  componentWillUnmount() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  renderSection(instruction: Instruction, vocal: Vocal) {
    return (
      <Box className={styles.sectionWrapper}>
        <Typography>{}</Typography>

        <Box display="flex" flexDirection="row" alignItems="center">
          <Box display="flex" flexDirection="row" alignItems="center" flexWrap="wrap">
            {
              instruction.getSectionsList().map((instructionSection, index) => {
                switch (instructionSection.getInstructionCase()) {
                  case InstructionSection.InstructionCase.CHORD_INSTRUCTION:
                  return <div key={index}> Chord Instruction </div>;
                  case InstructionSection.InstructionCase.PICK_INSTRUCTION:
                  return (<PickInstructionComponent 
                    pickInstruction={instructionSection.getPickInstruction()!} 
                    key={index}>
                    Pick Instruction
                  </PickInstructionComponent>);
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
            const instructionMap = this.state.song.getInstructionsMap();
            const instruction = instructionMap.get(sectionString) ?? new Instruction();
            const vocal = this.state.song.getVocalsMap().get(sectionString) ?? new Vocal();

            return (<Box key={sectionString}>
              {this.renderSection(instruction, vocal)}
            </Box>);
          })
        }
      </Box>
    );
  }
}

export default SchordSongComponent;
