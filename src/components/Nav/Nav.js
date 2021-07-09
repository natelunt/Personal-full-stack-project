import React, { useState } from 'react';
import axios from 'axios';
import './nav.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { registerUser } from '../redux/userReducer';


const Nav = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className='nav'>
            <div className='nav-links'>
                <Link to='/explore'><button className='explore-button'>explore</button></Link>
                <Link to='/plan'><button className='plan-button'>plan</button></Link>
            </div>
            <Link to='/home'><div className='nav-img'>On The Rocks</div></Link>
            <Link to='/menu'><button className='nav-avatar'>avatar</button></Link>
        </div>
    )
}

export default Nav