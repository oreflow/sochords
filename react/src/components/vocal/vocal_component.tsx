import * as React from 'react';
import Box from '@material-ui/core/Box';
import {v4 as uuidv4} from 'uuid';

import * as styles from 'src/components/vocal/vocal.scss';
import VocalProps from 'src/components/vocal/vocal_props';


class VocalComponent extends React.Component<VocalProps, {}> {
  render() {
    const lines = this.props.vocal.getLinesList();
    return (
      <Box>
        {
          lines.map((line: string, index: number) => 
            <Box key={uuidv4()} className={styles.vocalLine}>
              {line}
            </Box>)
        }
      </Box>
    );
  }
}

export default VocalComponent;
