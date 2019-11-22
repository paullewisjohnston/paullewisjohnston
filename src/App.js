import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import GlobalNav from './components/GlobalNav'
import Footer from './components/Footer'
import Home from './pages/Home.js'
// import Projects from './pages/Projects.js'
// import Blog from './pages/Blog.js'
import Theme from './assets/data/theme.json'
import './App.css'

function App(){
  return(
    <Router>
    <div className="App">
      <GlobalNav theme={Theme}/>
      <Switch>
        <Route exact path="/">
          <Home theme={Theme}/>
        </Route>
        {/* <Route exact path="/projects">
          <Projects theme={Theme}/>
        </Route>
        <Route exact path="/blog">
          <Blog theme={Theme}/>
        </Route> */}
      </Switch>
      <Footer theme={Theme}/>
    </div>
  </Router>
  );
}
export default App;
