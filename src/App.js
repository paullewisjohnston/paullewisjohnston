import React from 'react'
import { BrowserRouter, Route, Switch} from "react-router-dom"
import GlobalNav from './components/GlobalNav'
import Footer from './components/Footer'
import Home from './pages/Home.js'
import Products from './pages/Products.js'
import Theme from './assets/data/theme.json'
import './App.css'

function App(){
  return(
  <div className="App">
    <BrowserRouter>
      <GlobalNav theme={Theme}/>
        <Switch> 
          <Route exact path='/'>
            <Home theme={Theme}/>
          </Route>
          <Route exact path='/products'>
            <Products theme={Theme}/>
          </Route>
            {/* <Route path={‘/user/:id’} component={User}/>   */}
        </Switch>
      <Footer theme={Theme}/>
    </BrowserRouter>
  </div>
  );
}
export default App;
