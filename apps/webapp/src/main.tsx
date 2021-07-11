import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';
import { ThemeProvider } from "@material-ui/core/styles";
import { setTheme } from './theme';
import { CssBaseline } from '@material-ui/core';

// TODO Custom Error page or Page under construction page
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={setTheme(true)}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
