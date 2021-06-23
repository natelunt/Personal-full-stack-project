import React, { useState } from 'react';
import axios from 'axios';
import './auth.css';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/userReducer';

function Auth(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] =useState("");
    const [registering, setRegistering] = useState(false);

    const buttonContent = registering ? "Register" : "Login";
    const pContent = registering ? "Already have an account?" : "Don't have and account?";
    const spanContent = registering ? " Click here to login" : " Click here to register";
    

    function handleSubmit() {
        if(registering) {
            props.registerUser(email, password)
        }

        props.loginUser(email, password)
    }
    

    return (
        <div>
            <h1>Login or Register!</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
                setEmail('')
                setPassword('')
            }}>
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button>{buttonContent}</button>
                <p>
                    {pContent}
                    <span onClick={() => setRegistering(!registering)}>{spanContent}</span>
                </p>
            </form>
            {/* <form>
                <input type="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                <input type="password" placeholder="Confirm Password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button>register</button>
            </form> */}
        </div>
    )
}
// const Auth = () => {
//     // const [isLoggedIn, setIsLoggedIn] = useState(false);
//     return (
//         <div className="auth-bdy">
//             <div className="auth-container">
//                 <div className="login-box">
//                     <input className="auth-input">Email input</input>
//                     <input className="auth-input">Password input</input>
//                     <button className="auth-button">Log in button</button>
//                 </div>
//                 <div className="vert-divide">Divider</div>
//                 <div className="register-box">
//                     <input className="auth-input">Email input</input>
//                     <input className="auth-input">Password input</input>
//                     <input className="auth-input">Confirm Password input</input>
//                     <button className="auth-button">Create Account button</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

const mapStateToProps = reduxState => {
    return {

    }
}

const mapDispatchToProps = {
    registerUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);