import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

export default (
  <Switch>
    <Route component={Login} exact path='/'/>
    <Route component={Home} path='/Home'/>
  </Switch>
)