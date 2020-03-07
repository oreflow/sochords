import * as React from 'react';
import Box from '@material-ui/core/Box';

import StringCombinationComponent from 'src/components/stringcombination/string_combination_component';
import PickInstructionProps from 'src/components/pickinstruction/pick_instruction_props';
import { StringCombination } from 'gen/proto/messages_pb';
import * as styles from 'src/components/pickinstruction/pick_instruction.scss';

class PickInstructionComponent extends React.Component<PickInstructionProps, {}> {

  render() {
    return (
      <Box display="flex" justifyContent="center">
        <Box className={styles.beforeStringCombination}></Box>
      {
        this.props.pickInstruction.getPicksList()
        .map((stringCombination: StringCombination, index: number) => {
          return (
            <StringCombinationComponent 
              key={index} 
              stringCombination={stringCombination}>
            </StringCombinationComponent>
          );
        })
      }
        <Box className={styles.afterStringCombination}></Box>
    </Box>
    );
  }
}

export default PickInstructionComponent;
