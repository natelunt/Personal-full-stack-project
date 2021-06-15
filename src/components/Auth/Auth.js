import React from 'react';
import axios from 'axios';
import './auth.css';
import { connect } from 'react-redux';
// import { registerUser } from '../redux/userReducer';


const Auth = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="auth-bdy">
            <div className="auth-container">
                <div className="login-box">
                    <input className="auth-input">Email input</input>
                    <input className="auth-input">Password input</input>
                    <button className="auth-button">Log in button</button>
                </div>
                <div className="vert-divide">Divider</div>
                <div className="register-box">
                    <input className="auth-input">Email input</input>
                    <input className="auth-input">Password input</input>
                    <input className="auth-input">Confirm Password input</input>
                    <button className="auth-button">Create Account button</button>
                </div>
            </div>
        </div>
    )
}

export default Auth