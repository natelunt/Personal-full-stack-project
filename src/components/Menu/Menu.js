import React, {useState} from 'react';
import axios from 'axios';
import './menu.css';
import { connect } from 'react-redux'
import { logoutUser } from '../../redux/userReducer';
import { Redirect } from 'react-router-dom';


function Menu(props) {

    function closeMenu() {
        props.toggleMenu()
    }

    function logout() {
        axios.delete('/api/logout').then(res => {
            console.log('User has logged out')
            props.logout()
        }).catch(error => {
            console.log(error)
        })
    }


    return (
        <div className='userMenu'>
            I am the user profile menu!
        </div>
    )
}


const mapStateToProps = (state) => {
    console.log('State', state)
    return state
}

const mapDispatchToProps = {
    logout
}


export default connect(mapStateToProps, mapDispatchToProps)(Menu);