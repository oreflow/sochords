import * as React from 'react';
import * as ReactDOM from 'react-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import App from './components/App';
import theme from './theme';
import {SchordContext, state} from './schord_context';
console.log(SchordContext);
console.log(state);

ReactDOM.render (
  <SchordContext.Provider value={state}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </SchordContext.Provider>,
  document.getElementById("root")
);
