import React, { Component } from 'react';
import GlobalNav from './components/GlobalNav';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <GlobalNav/>
        </div>
      </Provider>
    );
  }
}

export default App;
