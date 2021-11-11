import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { connect } from 'react-redux';
import axios from 'axios';
import FormInput from '../../assets/FormInput/FormInput';
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

const Checkout = ({ cartItems, user, clearCart }) => {
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

        if (!error) {
            try {
                const { id } = paymentMethod;
                const res = await axios.post('/api/payment', {
                    id,
                    amount: Math.round(subtotal * 100)
                });
                const message = `Your purchase was successful! Thank you for your patronage and have an awesome day! \nItems purchased: \n${itemList}`;

                if (res.data.success) {
                    setSuccess(true)
                    axios.post('/api/send', {
                        name: user.name,
                        email: user.email,
                        message,
                    });
                    clearCart();
                    setTimeout(() => {
                        history.push('/')
                    }, 2000);
                }
            } catch (error) {
                console.log('Error', error)
            }
        } else {
            console.log(error.message);
        }
    };

    return (
        <section className='container'>
            {!success ? (
                <>
                    <form className='checkout' onSubmit={handleSubmit}>
                        <fieldset className='checkoutGroup'>
                            <div className='checkoutRow'>
                                <FormInput name='name' label='' type='text' placeholder='name...' onChange={(e) => setName(e.target.value)} value={name} className='input' required={true}/>
                            </div>
                            <div className='checkoutRow'>
                                <FormInput name='email' label='*Email' type='email' placeholder='email...' onChange={(e) => setEmail(e.target.value)} value={email} className='input' required={true}/>
                            </div>
                            <div className='checkoutRow'>
                                <FormInput name='phone' label='*Phone' type='tel' placeholder='phone number...' onChange={(e) => setPhone(e.target.value)} value={phone} className='input' required={true}/>
                            </div>
                            <div className='checkoutRow'>
                                <FormInput name='line1' label='address1' type='text' placeholder='address...' onChange={(e) => setLine1(e.target.value)} value={line1} className='input' required={true}/>
                            </div>
                            <div className='checkoutRow'>
                                <FormInput name='line2' label='address2' type='text' placeholder='address...' onChange={(e) => setLine2(e.target.value)} value={line2} className='input'/>
                            </div>
                            <div className='checkoutRow'>
                                <FormInput name='city' label='*City' type='text' placeholder='city...' onChange={(e) => setCity(e.target.value)} value={city} className='input' required={true}/>
                            </div>
                            <div className='checkoutRow'>
                                <FormInput name='state' label='*State' type='text' placeholder='state...' onChange={(e) => setMyState(e.target.value)} value={myState} className='input' required={true}/>
                            </div>
                            <div className='checkoutRow'>
                                <CardElement options={CARD_OPTIONS}/>
                            </div>
                        </fieldset>
                    </form>
                </>
            ) : (
                <>
                    <h2 className='payment-successful'>You just bought some sweet gear! Sending you back to the home page now...</h2>
                </>
            )}
        </section>
    )
}



const mapDispatchToProps = {
    clearCart: clearCart
};

const mapStateToProps = (reduxState) => {
    return {
        user: reduxState.userReducer.user,
        cartItems: reduxState.cartReducer.cartItems
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);