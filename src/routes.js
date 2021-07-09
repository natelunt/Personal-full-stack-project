import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import Explore from './components/Explore/Explore';
import Plan from './components/Plan/Plan';
import Menu from './components/Menu/Menu';

export default (
    <Switch>
        <Route exact path='/' component={Auth}/>
        <Route path='/home' component={Home}/>
        <Route path='/explore' component={Explore}/>
        <Route path='/plan' component={Plan}/>
        <Route path='/menu' component={Menu}/>
    </Switch>
)