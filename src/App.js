import React from 'react'
import { BrowserRouter, Route, Switch} from "react-router-dom"
import GlobalNav from './components/GlobalNav'
import Footer from './components/Footer'
import Home from './pages/Home.js'
import Theme from './assets/data/theme.json'
import './App.css'
import GoCardless from './pages/GoCardless'
import GoCardlessRedirect from './pages/GoCardlessRedirect'
import GoCardlessSuccess from './pages/GoCardlessSuccess'
import GoCardlessFailed from './pages/GoCardlessFailed'

function App(){
  return(
  <div className="App">
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <GlobalNav theme={Theme}/>
        <Switch> 
          <Route exact path='/'>
            <Home theme={Theme}/>
          </Route>
          <Route exact path='/gocardless'>
            <GoCardless theme={Theme}/>
          </Route>
          <Route exact path='/gocardless-redirect'>
            <GoCardlessRedirect theme={Theme}/>
          </Route>
          <Route exact path='/gocardless-success'>
            <GoCardlessSuccess theme={Theme}/>
          </Route>
          <Route exact path='/gocardless-failed'>
            <GoCardlessFailed theme={Theme}/>
          </Route>
        </Switch>
      <Footer theme={Theme}/>
    </BrowserRouter>
  </div>
  );
}
export default App;
