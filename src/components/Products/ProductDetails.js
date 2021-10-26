import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProductByID } from '../../redux/productDetailsReducer';
import Button from '../../assets/Button/Button';
import './productDetails.ccs';

const ProductDetails = ({ getProductByID, product }) => {
    const history = useHistory;
    const productId = history.location.pathname.split('/')[2];
    const [itemQty, setItemQty] = useState(1);

    useEffect(() => {
        getProductByID(productId);
    }, [getProductByID, productId]);

    const addToCartHandler = () => {
        history.push(`/cart/${productId}?qty=${itemQty}`)
    };

    const { category, price, description, name, url, count_in_stock, qty } = product;

    return (
        <>
            <section className='product-details'>
                <div className='name-image'>
                    <h2>{name}</h2>
                    <img src={url} alt={name}/>
                    <p>Description: {description}</p>
                </div>
                <div className='product-price'>
                    <div>
                        <p>Price: ${price}</p>
                        {count_in_stock > 0 ? (
                            <div className='dropdown'>
                                <span>Qty: </span>
                                <select value={qty} onChange={(e) => setItemQty(e.target.value)} name='qty' id='qty-select'>
                                    {[...Array(count_in_stock).keys()].map((x) => (
                                        <option key={x +1} value={x + 1}>
                                            {x + 1}
                                        </option>
                                    ))};
                                </select>
                            </div>
                        ) : (
                            <p>Out of stock</p>
                        )};
                    </div>
                    {count_in_stock > 0 && (
                    <Button styleName='submit add-to-cart' label='Add to Cart' handleClick={addToCartHandler}/>
                )};
                </div>
            </section>
        </>
    );
};

const mapDispatchToProps = {
    getProductByID: getProductByID,
};

const mapStateToPrps = (reduxState) => {
    return {
        product: reduxState.productDetailsReducer.product,
    }
};


export default connect(mapStateToPrps, mapDispatchToProps)(ProductDetails);