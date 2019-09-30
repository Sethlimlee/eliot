import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../components/app/login/login';
import Home from '../components/app/home/home';
import Token from '../components/app/token/Token';
import Modules from '../components/app/modules/Modules'
import Scenes from '../components/app/scenes/index'

export default (
  <Switch>
    <Route component={Login} exact path='/' />
    <Route component={Home} path='/Home' />
    <Route component={Modules} path='/Modules/:id/' />
    <Route component={Modules} path='/Modules' />
    <Route component={Scenes} path='/scenes' />
    <Route component={Token} />
  </Switch>
)