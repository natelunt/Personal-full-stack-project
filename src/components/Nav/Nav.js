import React from 'react';
import axios from 'axios';
import './nav.css';
import { connect } from 'react-redux';
// import { registerUser } from '../redux/userReducer';

const Nav = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className='nav'>
            <div className='nav-links'>
                <div className='explore-button'>explore</div>
                <div className='plan-button'>plan</div>
            </div>
            <div className='nav-img'>logo</div>
            <div className='nav-avatar'>avatar</div>
        </div>
    )
}

export default Nav