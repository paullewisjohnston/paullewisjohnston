import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import GlobalNav from './components/GlobalNav';
import SectionContainer from './components/SectionContainer';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import education from './assets/data/education.json';
import jobs from './assets/data/jobs.json';
import skills from './assets/data/skills.json';
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <GlobalNav/>
          <Route path="/" exact render={(props) => <SectionContainer {...props} jobs={jobs} education={education} skills={skills} />}/>
          <Route path="/dashboard" exact render={(props) => <Dashboard {...props} jobs={jobs} education={education} skills={skills} />}/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
