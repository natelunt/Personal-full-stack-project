import React from 'react';
import axios from 'axios';
// import './nav.css';
import { connect } from 'react-redux';
// import { registerUser } from '../redux/userReducer';

function Nav(props) {

    return (
        <div>
            <h1>On The Rocks</h1>
            <form>
                <input>email</input>
                <input>password</input>
                <button>login/registration</button>
            </form>
        </div>
    )
}
// const Nav = () => {
//     // const [isLoggedIn, setIsLoggedIn] = useState(false);
//     return (
//         <div className='nav'>
//             <div className='nav-links'>
//                 <div className='explore-button'>explore</div>
//                 <div className='plan-button'>plan</div>
//             </div>
//             <div className='nav-img'>logo</div>
//             <div className='nav-avatar'>avatar</div>
//         </div>
//     )
// }

export default Nav