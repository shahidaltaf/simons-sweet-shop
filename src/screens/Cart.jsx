import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { removeBasketItem } from '../store/actions';
import { calculatePacks, accumulatePacks } from '../utils';

const updateCartItemPacks = state => {
    const packValues = state.packs.map(pack => pack.quantity).sort((a, b) => a - b);
    const cart = state.cart.map(item => {
        const packs = accumulatePacks(calculatePacks([], item.amount, packValues));

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
        <h2>Cart</h2>
        {
            cartItems.length < 1 ? (
                <p>No items in cart.</p>
            ) : (
                cartItems.map((item, index) => {
                    return <div key={index} style={{ border: '1px solid #ccc' }}>
                        <p>[image {item.image}]</p>
                        {
                            // @todo: sweet image
                        }
                        <p>{item.name} x {item.amount}</p>
                        <button onClick={() => { dispatch(removeBasketItem(item.id)) }}>Remove</button>
                        {
                            item.packs.map((pack, i) => <p key={i}>{pack.quantity} x {pack.amount}</p>)
                        }
                        <p>Total = {item.total}</p>
                    </div>
                })
            )
        }

        <button onClick={() => { history.goBack() }}>Back</button>
    </>
};

export default Cart;