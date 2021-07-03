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
        <div>
            I'm the home page
        </div>
    )
}

export default Home