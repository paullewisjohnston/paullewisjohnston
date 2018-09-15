import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './screen/Home';
import Test from './screen/Test';

const MainRouter = () => {
    return(
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/test' component={Test}/>
      </Switch>
    );
}
export default MainRouter;
