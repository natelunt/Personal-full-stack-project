import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router';
import './trails.css';

function Trails(props) {
    const [ trails, setTrails ] = useState([]);
    const [ filteredTrails, setFilteredTrails ] = useState([]);
    const [ usingFilter, setUsingFilter ] = useState(false);
    const [ trailLocations, setTrailLocations ] = useState([]);
    const [ trailLocationFilterOpen, setTrailLocationFilterOpen ] = useState(false);

    useEffect(() => {
        axios.get('/api/trails').then(res => {
            console.log(res.data)
            let tempTrails = res.data
            let sortedTrails = tempTrails.sort((a, b) => {
                return a.location > b.location ? 1 : -1
            })
            setTrails(sortedTrails)
        }).catch(error => {
            console.log(error)
        })
        axios.get('/api/trails').then(res => {
            let tempTrailLocations = res.data.sort((a, b) => {
                return a.location > b.location ? 1 : -1
            })
            setTrailLocations(tempTrailLocations)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    function toggleUsingFilter() {}
}