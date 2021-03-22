import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Button, Card } from 'react-bootstrap';

import { removeBasketItem } from '../store/actions';
import { calculatePacks, accumulatePacks } from '../utils';

import CartItem from '../components/CartItem';
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
        <Container>
            <h2 className="h3 mb-4">Cart</h2>
            {
                cartItems.length < 1 ? (
                    <Card className="mb-4">
                        <Card.Body><p className="mb-0">No items in cart.</p></Card.Body>
                    </Card>
                ) : (
                    cartItems.map((item, index) => {
                        return <CartItem
                            key={item.id}
                            item={item}
                            removeHandler={() => { dispatch(removeBasketItem(item.id)) }} />
                    })
                )
            }
            <Button variant="primary" className="btn-block mb-4 p-2" onClick={() => { history.goBack() }}>Back</Button>
        </Container>
    </>
};

export default Cart;