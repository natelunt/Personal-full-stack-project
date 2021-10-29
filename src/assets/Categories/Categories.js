import React from 'react';
import { Link } from 'react-router-dom';
import './categories.css';

const Categories = () => {
    return (
        <>
            <div className='categories'>
            <Link to='/shop'>All</Link>
            <Link to='/shop/Apparel'>Apparel</Link>
            <Link to='/shop/Footwear'>Footwear</Link>
            <Link to='/shop/Backpacks'>Backpacks</Link>
            <Link to='/shop/Tents'>Tents</Link>
            <Link to='/shop/SleepingBags'>Sleeping Bags</Link>
            <Link to='/shop/Accessories'>Accessories</Link>
            </div>
            <hr />
        </>
    )
}

export default Categories;