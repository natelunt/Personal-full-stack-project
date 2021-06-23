import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './home.css';
import { connect } from 'react-redux';
// import { registerUser } from '../redux/userReducer';

function Home() {
    const [trails, setTrails] = useState([]);

    useEffect(() => {
        // TODO: do axios call for trails

        setTrails([ {}])
    })

    const [campgrounds, setCampgrounds] = useState([]);

    useEffect(() => {
        // TODO: do axios call for trails

        setCampgrounds(() => {})
    })

    return (
        <div>
            home
        </div>
    )
}

export default Home