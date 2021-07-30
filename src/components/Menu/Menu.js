import React, { useState } from 'react';
import axios from 'axios';
import './menu.css';
import { connect } from 'react-redux'
import { logoutUser } from '../../redux/userReducer';
import { withRouter, Link } from 'react-router-dom';


function Menu(props) {

    function closeMenu() {
        props.toggleMenu()
    }

    function signOut() {
        axios.delete('/api/logout').then(res => {
            console.log('User has logged out')
            props.logoutUser()
        }).catch(error => {
            console.log(error)
        })
    }


    return (
        <section className='userMenu'>
            <button onClick={closeMenu}>Close Menu</button>
            <Link to='/Plan' style={{textDecoration: 'none'}} onClick={closeMenu}><h4>My Plan</h4></Link>
            <br></br>
            <button onClick={signOut}>Sign Out</button>
        </section>
    )
}


const mapStateToProps = (state) => {
    console.log('State', state)
    return state
}

const mapDispatchToProps = {
    logoutUser
}


export default connect(mapStateToProps, mapDispatchToProps)(Menu);