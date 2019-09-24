import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/app/login/login';
import Home from './components/app/home/Home';
import Token from './components/app/token/Token';
import Modules from './components/app/modules/Modules'

export default (
  <Switch>
    <Route component={Login} exact path='/' />
    <Route component={Home} path='/Home' />
    <Route component={Modules} path='/Modules/:id/' />
    <Route component={Token} />
  </Switch>
)