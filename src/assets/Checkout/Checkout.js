import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { connect } from 'react-redux';
import axios from 'axios';
import FormInput from '../FormInput/FormInput';
import './checkout.css';
import { clearCart } from '../../redux/cartReducer';

const CARD_OPTIONS = {
    iconStyle: 'solid',
    style: {
        base: {
            color: '#32325D',
            fontWeight: 500,
            fontFamily: 'Source Code Pro, Consolas, Menlo, monospace',
            fonstSize: '16px',
            fontSmoothing: 'antialiased',

            '::placeholder': {
                color: '#e39f48',
            },
        },
        invalid: {
            color: '#25950',

            '::placeholder': {
                color: '#FFCCA5',
            }
        }
    }
};

const Checkout = ({ cartItems, user, emptyCart }) => {
    const [success, setSuccess] = useState(false);
    const [email, setEmail] = useState(user.email);
    const [name, setName] = useState(user.name);
    const [city, setCity] = useState('Some City');
    const [line1, setLine1] = useState('1257 Fake Street');
    const [line2, setLine2] = useState('');
    const [phone, setPhone] = useState('+1(xxx)-xxx-xxxx');
    const [myState, setMyState] = useState('AZ');
    const history = useHistory();

    const subtotal = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2);
    const itemList = cartItems.map((item) => {
        return `${item.name} - QTY: ${item.qty}`;
    });
    
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        };

        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: {
                address: {
                    city,
                    country: 'US',
                    line1,
                    line2,
                    state: myState,
                },
                email,
                name,
                phone,
            }
        });

        if (!error) {}
    }
}



const mapDispatchToProps = {
    emptyCart: emptyCart
};

const mapStateToProps = (reduxState) => {
    return {
        user: reduxState.userReducer.user,
        cartItems: reduxState.cartReducer.cartItems
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);