import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import ProductDetails from './components/Products/ProductDetails';
import Cart from './components/Cart/Cart';
import Menu from './components/Menu/Menu';
import Checkout from './components/Checkout/Checkout';

export default (
    <Switch>
        <Route exact path='/' component={Auth}/>
        <Route path='/home' component={Home}/>
        <Route path='/shop' component={Shop}/>
        <Route path='/products/:id' component={ProductDetails}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/menu' component={Menu}/>
        <Route path='/checkout' component={Checkout}/>
    </Switch>
)