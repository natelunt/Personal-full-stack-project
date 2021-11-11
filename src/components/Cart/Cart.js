import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/cartReducer';
import Button from '../../assets/Button/Button';
import './cart.css';

const Cart = ({ addToCart, removeFromCart, cartItems }) => {
    const history = useHistory();
    const productId = history.location.pathname.split('/')[2];
    const qty = history.location.search ? Number(history.location.search.split('=')[1]) : 1;

    useEffect(() => {
        if (productId) {
            addToCart(productId, qty);
            history.push('/cart');
        }
    }, [addToCart, history, productId, qty]);

    const removeFromCartHandler = (id) => {
        removeFromCart(id)
    };

    const handleClick = (e) => {
        const { product_id } = cartItems.find(
            (item) => item.name === e.target.innerText
        );
        history.push(`/products/${product_id}`);
    };

    const checkoutHandler = () => {
        history.push('/login?redirect=checkout')
    };

    return (
        <div className='cart'>
            <section className='cart-items'>
                <div className='item-heading'>
                    <p>Product</p>
                    <p>Description</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Remove</p>
                </div>
                {cartItems.length === 0 ? (
                    <h1>Nothing in cart</h1>
                ) : (
                    cartItems.map(({ product_id, name, price, url, count_in_stock, qty }) => (
                        <div className='cart-item' key={product_id}>
                            <img src={url} alt={name}/>
                            <p className='item-link' onClick={(e) => handleClick(e)}>{name}</p>
                            <p className='drop-down'>
                                <select value={qty} onChange={(e) => { addToCart(product_id, Number(e.target.value))}} name='qty' id='qty-select'>
                                    {[...Array(count_in_stock).keys()].map((x) => (
                                        <option key={x + 1} value={x + 1}>
                                            {x + 1}
                                        </option>
                                    ))}
                                </select>
                            </p>
                            <Button styleName='remove' label={<i className='trash'></i>} handleClick={() => removeFromCartHandler(product_id)}/>
                        </div>
                    ))
                )}
            </section>
            <section className='cart-details'>
                <h2 className='subtotal'>
                    Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                </h2>
                {cartItems.length !== 0 && (
                    <Button styleName='submit' label='Checkout' handleClick={checkoutHandler}/>
                )}
            </section>
        </div>
    );
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