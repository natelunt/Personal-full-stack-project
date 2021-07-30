import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router';
import './trails.css';

function Trails(props) {
    const [ trails, setTrails ] = useState([]);
    const [ filteredTrails, setFilteredTrails ] = useState([]);
    const [ usingFilter, setUsingFilter ] = useState(false);
    const [ trailRanks, setTrailRanks ] = useState([]);
    const [ rankFilterOpen, setRankFilterOpen ] = useState(false);
    const [ trailLocations, setTrailLocations ] = useState([]);
    const [ trailLocationFilterOpen, setTrailLocationFilterOpen ] = useState(false);
    const [ trailNames, setTrailNames ] = useState([]);
    const [ nameFilterOpen, setNameFilterOpen ] = useState(false);

    useEffect()

    function toggleUsingFilter() {}
}