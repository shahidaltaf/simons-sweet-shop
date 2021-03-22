import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { addBasketItem } from '../store/actions';
import Header from '../components/Header';

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
        <Header />
        <p>[{sweet.image}]</p>
        <h2>{sweet.name}</h2>
        <h3>Description</h3>
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
        <p><button onClick={addToCart}>Add to Cart</button></p>

        <p><Link to="/packs">Packs</Link></p>
        <p><Link to="/cart">View cart</Link></p>
    </>
};

export default Order;