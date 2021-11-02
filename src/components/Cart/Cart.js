import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/cartReducer';
import Button from '../../assets/Button/Button';
import './cart.css';

const Cart = ({}) => {
    const history = useHistory();
    const poductId = history.location.pathname.split('/')[2];
    const qty = history.location.search ? Number(history.location.search.split('=')[1]) : 1;
};

const mapDispatchToProps = {
    addToCart: addToCart,
    removeFromCart: removeFromCart
};

const mapStateToProps = (reduxState) => {
    return {
        cartItems: reduxState.cartReducer.cartItems
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);