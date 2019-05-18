import React, { Component } from 'react';
import { HashRouter as Router, Route} from "react-router-dom";
import GlobalNav from './components/GlobalNav';
import Footer from './components/Footer';
import Home from './pages/Home.js';
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <GlobalNav/>
          <Route path="/" exact render={(props) => <Home {...props}/>}/>
          <Route path="/dashboard" exact render={(props) => <Home {...props}/>}/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
