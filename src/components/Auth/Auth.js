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
                    {/* <input>Email</input>
                    <input>Password</input>
                    <button>Log in</button> */}
                </div>
                <div className="vert-divide">Divider</div>
                <div className="register-box">
                    {/* <input>Email</input>
                    <input>Password</input>
                    <input>Confirm Password</input>
                    <button>Create Account</button> */}
                </div>
            </div>
        </div>
    )
}

export default Auth