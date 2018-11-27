import React, { Component } from 'react';
import GlobalNav from './components/GlobalNav';
import SectionContainer from './components/SectionContainer';
import Footer from './components/Footer';
import education from './assets/data/education.json';
import jobs from './assets/data/jobs.json';
import skills from './assets/data/skills.json';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalNav/>
        <SectionContainer jobs={jobs} education={education} skills={skills}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
