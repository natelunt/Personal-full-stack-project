import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router';
import './campgrounds.css';

function Campgrounds(props) {
    const [ campgrounds, setCampgrounds ] = useState([]);
    const [ filteredCampgrounds, setFilteredCampgrounds ] = useState([]);
    const [ usingFilter, setUsingFilter ] = useState(false);

    useEffect()

    function toggleUsingFilter() {}
}