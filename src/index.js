import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Lato", sans-serif',
      '"Open Sans", sans-serif'
    ].join(','),
    textTransform: 'none',
  },
});

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  ,document.getElementById('root'))
