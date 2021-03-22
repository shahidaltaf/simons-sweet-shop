import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { removeBasketItem } from '../store/actions';
import { calculatePacks, accumulatePacks } from '../utils';

import BasketItem from '../components/BasketItem';
import Header from '../components/Header';

const updateCartItemPacks = state => {
    const packSizes = state.packs.map(pack => pack.quantity).sort((a, b) => a - b);
    const cart = state.cart.map(item => {
        const packs = accumulatePacks(calculatePacks([], item.amount, packSizes));

        return {
            ...item,
            packs: packs,
            total: packs.reduce((accumulator, item) => accumulator + (item.amount * item.quantity), 0)
        }
    });

    return cart;
}

const Cart = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const cartItems = useSelector(updateCartItemPacks);

    return <>
        <Header />
        <h2>Cart</h2>
        {
            cartItems.length < 1 ? (
                <p>No items in cart.</p>
            ) : (
                cartItems.map((item, index) => {
                    return <BasketItem 
                        key={item.id} 
                        item={item} 
                        removeHandler={() => { dispatch(removeBasketItem(item.id)) }} />
                })
            )
        }
        <button onClick={() => { history.goBack() }}>Back</button>
    </>
};

export default Cart;