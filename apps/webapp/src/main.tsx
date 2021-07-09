import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';
import { ThemeProvider } from "@material-ui/core/styles";
import { setTheme } from './setTheme';
import { CssBaseline } from '@material-ui/core';

// TODO Consider using <CssBaseline /> after looking it up
// TODO Custom Error page or Page under construction page
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={setTheme()}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
