import React from 'react';
import axios from 'axios';
import './nav.css';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logoutUser } from '../../redux/userReducer';
import Button from '../../assets/Button/Button'


const Nav = ({ user,logoutUser, cartItems }) => {
    const history = useHistory();
    
    const logout = async () => {
        try {
            await axios.delete('/api/logout');
            logoutUser();
            history.push('/logout');
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <nav>
            <ul classname='nav-links'>
                <Link to='/'>Home</Link>
                {user.email && <Link to={`/profile/${user.user_id}`}>Profile</Link>}
                {!user.email && <Link to='/'>Login/Register</Link>}
                <Link to='/shop'>Shop</Link>
                <Link to='/cart'>Cart ({cartItems.reduce((acc, item) => acc + item.qty, 0)})</Link>
                {user.email && <Button styleName='logout' label='Logout' handleClick={logout}/>}
            </ul>
        </nav>
    );
};

const mapDispatchToProps = {
    logoutUser: logoutUser
};

const mapStateToProps = (reduxState) => {
    return {
        user: reduxState.userReducer.user,
        cartItems: reduxState.cartReducer.cartItems
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);