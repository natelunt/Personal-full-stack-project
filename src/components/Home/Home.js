import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import './home.css';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/userReducer';

function Home() {
    const [trails, setTrails] = useState([]);
    const [campgrounds, setCampgrounds] = useState([]);

    useEffect(() => {
        // TODO: do axios call for trails

        setTrails([ {}])
    })



    useEffect(() => {
        // TODO: do axios call for campgrounds

        setCampgrounds(() => {})
    })

    return (
        <div className='home'>
            <div className='topCtnr'>
                <h1>Welcome</h1>
                <input type='search' placeholder='Search by city, park or trail name'/>
            </div>
        </div>
    )
}

export default Home