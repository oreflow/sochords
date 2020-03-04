import {deepPurple, lightBlue} from '@material-ui/core/colors';
import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple.A400,
    },
    secondary: {
      main: lightBlue.A400,
    },
    background: {
      default: '#eee',
    },
  },
});

export default theme;
