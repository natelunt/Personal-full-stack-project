import React, { useState } from 'react';
import axios from 'axios';
import './nav.css';
import { connect } from 'react-redux';
// import { registerUser } from '../redux/userReducer';


const Nav = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className='nav'>
            <div className='nav-links'>
                <button className='explore-button'>explore</button>
                <button className='plan-button'>plan</button>
            </div>
            <div className='nav-img'>On The Rocks</div>
            <button className='nav-avatar'>avatar</button>
        </div>
    )
}

export default Nav