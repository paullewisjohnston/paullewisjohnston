import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import GlobalNav from './components/GlobalNav'
import Footer from './components/Footer'
import Home from './pages/Home.js'
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
      </Switch>
      <Footer theme={Theme}/>
    </div>
  </Router>
  );
}
export default App;
