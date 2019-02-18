import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Token from './components/Token';
import Modules from './components/Modules'

export default (
  <Switch>
    <Route component={Login} exact path='/'/>
    <Route component={Home} path='/Home'/>
    <Route component={Modules} path ='/Modules/:id/:token'/>
    <Route component={Token}/>
  </Switch>
)