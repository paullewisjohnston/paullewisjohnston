import React, { Component } from 'react';
import GlobalNav from './components/GlobalNav';
import SectionContainer from './components/SectionContainer';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalNav/>
        <SectionContainer/>
      </div>
    );
  }
}

export default App;
