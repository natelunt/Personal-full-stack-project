import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ProductList from '../Products/ProductList';
// import Search from '../../assets/Search/SearchBar';
import Categories from '../../assets/Categories/Categories';
import { getProducts, getProductsByCategory } from '../../redux/productsReducer'
import './shop.css';



const Shop = ({ getProducts, getProductsByCategory }) => {
    return (
        <div>
            shop
        </div>
    )
}

export default Shop