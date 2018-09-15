import React, { Component } from 'react';
import { MuiThemeProvider} from '@material-ui/core/styles';
import theme from './theme';

import AppNavBar from './components/AppNavBar';
import ItemContainer from './components/ItemContainer';
import ItemModal from './components/ItemModal';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App" margin="100px" padding="100px">
          <AppNavBar color="Black"/>
          <ItemModal />
          <ItemContainer />
        </div>
      </Provider>
      </MuiThemeProvider>
    );
  }
}
export default App;
