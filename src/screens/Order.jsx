import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Button, Card } from 'react-bootstrap';

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
            setError('Please enter a valid amount.');
            return;
        }

        dispatch(addBasketItem({
            id: Date.now(),
            name: sweet.name,
            image: sweet.image,
            amount: parseInt(orderAmount)
        }));

        history.push('/cart');
    }

    return <>
        <Header admin />
        <Container style={{ width: '25.875rem' }}>
            <div className="justify-content-center align-items-center">
                <h2 className="h3 mb-4">{sweet.name}</h2>
                <Card className="mb-4">
                    <Card.Img variant="top" src={`images/${sweet.image}.png`} />
                    <Card.Body>
                        <h3 className="h4 mb-4">Description</h3>

                        {
                            sweet.description.map((item, index) => <p key={index}>{item}</p>)
                        }
                        {
                            error && <p className="text-danger">{error}</p>
                        }
                        <div className="d-flex justify-content-between align-items-center">
                            <label className="font-weight-bold">Select Amount</label>
                            <input className="form-control w-50" type="number" value={orderAmount} onChange={event => {
                                setError(null);
                                setOrderAmount(event.target.value)
                            }} />
                        </div>
                    </Card.Body>
                </Card>
                <Button variant="primary" className="btn-block mb-4 p-2" onClick={addToCart}>Add to Cart</Button>
            </div>
        </Container>
    </>
};

export default Order;