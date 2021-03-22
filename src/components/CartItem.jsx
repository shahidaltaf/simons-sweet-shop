import React from 'react';
import { Card } from 'react-bootstrap';

import binIcon from '../assets/images/icon-bin.png';
import binIcon2x from '../assets/images/icon-bin@2x.png';

const CartItem = ({ item, removeHandler }) => {
    return <Card className="mb-4">
        <Card.Body>
            <div className="d-flex">
                <div className="w-50 position-relative">
                    <img className="w-75 rounded" src={`images/${item.image}.png`} />
                    <img className="bg-white rounded-circle p-2 position-absolute sss-bin-icon" 
                        srcSet={`${binIcon}, ${binIcon2x} 2x`}
                        src={binIcon} alt="Remove" onClick={removeHandler} />
                </div>
                <div className="w-50 ">
                    <p className="font-weight-bold mb-2 pr-3">{item.name} x {item.amount.toLocaleString()}</p>
                    {
                        item.packs.map((pack, i) => <p key={i} className="mb-1">{pack.quantity} x {pack.amount}</p>)
                    }
                    <p className="font-weight-bold mt-2 mb-2">Total = {item.total.toLocaleString()}</p>
                </div>
            </div>
        </Card.Body>
    </Card>;
}

export default CartItem;