import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Arima Madurai, cursive',
      'Open Sans, sans-serif'
    ].join(','),
  },
});

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  ,document.getElementById('root'))
