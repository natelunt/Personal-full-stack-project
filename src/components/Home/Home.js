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
            <section className='topCtnr'>
                <h1>Welcome</h1>
                <input type='search' placeholder='Search by city, park or trail name'/>
            </section>
            <section className='btmCtnr'>
                <div className='trails-container'>
                    <div className='containers-title'></div>
                    <div className='river-container'>
                        <div className='river-class'>
                            <div className='river-track'>
                                <div className='river-item'>
                                    <div className='item-card-container'>
                                        <div className='container'>
                                            <a></a>
                                            <div className='backround'></div>
                                            <div className='card-content'>
                                                <div className='name'></div>
                                                <a className='location'></a>
                                                <div className='info'>
                                                    <span className='trail-challenge'></span>
                                                    <span className='rating'>
                                                        <span className='liked-icon'></span>
                                                        <span className='like-count'>(0)</span>
                                                        <span className='disliked-icon'></span>
                                                        <span className='dislike-count'>(0)</span>
                                                    </span>
                                                </div>
                                                <div className='info'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='campgrounds-container'>
                    <div className='containers-title'></div>
                    <div className='river-container'>
                        <div className='river-class'>
                            <div className='river-track'>
                                <div className='river-item'>
                                    <div className='item-card-container'>
                                        <div className='container'>
                                            <a></a>
                                            <div className='backround'></div>
                                            <div className='card-content'>
                                                <div className='name'></div>
                                                <a className='location'></a>
                                                <div className='info'>
                                                    <span className='campground-quality'></span>
                                                    <span className='rating'>
                                                        <span className='liked-icon'></span>
                                                        <span className='like-count'>(0)</span>
                                                        <span className='disliked-icon'></span>
                                                        <span className='dislike-count'>(0)</span>
                                                    </span>
                                                </div>
                                                <div className='info'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home