import * as React from 'react';
import * as ReactDOM from 'react-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import App from 'src/components/app_component';
import theme from 'src/theme';
import {SchordContext, state} from 'src/context';
import 'src/styles.scss';

ReactDOM.render (
  <SchordContext.Provider value={state}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </SchordContext.Provider>,
  document.getElementById("root")
);
