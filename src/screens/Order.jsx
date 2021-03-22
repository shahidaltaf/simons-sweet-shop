import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { addBasketItem } from '../store/actions';

const Order = () => {
    const [orderAmount, setOrderAmount] = useState('');
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const history = useHistory();
    const sweet = useSelector(state => state.sweets)[0];

    const addToCart = () => {
        if (orderAmount === '' || orderAmount === '0') {
            setError('Please enter a valid amount');
            return;
        }

        dispatch(addBasketItem({
            id: Date.now(),
            name: sweet.name,
            amount: parseInt(orderAmount)
        }));

        history.push('/cart');
    }

    return <>
        <h2>Order</h2>
        <h3>{sweet.name}</h3>
        <p>[{sweet.image}]</p>
        <h4>Description</h4>
        {
            sweet.description.map((item, index) => <p key={index}>{item}</p>)
        }
        {
            error && <p>{error}</p>
        }
        <label>Select Amount</label> 
        <input type="number" value={orderAmount} onChange={event => {
            setError(null);
            setOrderAmount(event.target.value)
        }} /> 
        <button onClick={addToCart}>Add to Cart</button>
        <p>----</p>
        <p><Link to="/packs">Packs</Link></p>
        <p><Link to="/cart">View cart</Link></p>
    </>
};

export default Order;