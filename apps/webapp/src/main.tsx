import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';
import { setTheme } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';


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
