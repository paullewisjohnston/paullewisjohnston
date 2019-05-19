import React, { Component } from 'react';
import { HashRouter as Router, Route} from "react-router-dom";
import GlobalNav from './components/GlobalNav';
import Footer from './components/Footer';
import Home from './pages/Home.js';
import theme from './assets/data/theme.json';
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <GlobalNav theme={theme}/>
          <Route path="/" exact render={(props) => <Home {...props} theme={theme}/>}/>
          <Route path="/dashboard" exact render={(props) => <Home {...props} theme={theme}/>}/>
          <Footer theme={theme}/>
        </div>
      </Router>
    );
  }
}

export default App;
