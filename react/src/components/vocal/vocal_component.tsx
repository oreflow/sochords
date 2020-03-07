import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import  VocalProps  from 'src/components/vocal/vocal_props';


class VocalComponent extends React.Component<VocalProps, {}> {
  render() {
    return (
        <Box>
          {
            this.props.vocal.getLinesList().map((line: string, index: number) => {
              return <Typography key={index} variant="h5">{line}</Typography>;
            })
          }
        </Box>
    );
  }
}

export default VocalComponent;
