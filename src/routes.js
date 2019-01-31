import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Token from './components/Token';

export default (
  <Switch>
    <Route component={Login} exact path='/'/>
    <Route component={Home} path='/Home'/>
    <Route component={Token}/>
  </Switch>
)