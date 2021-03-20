import React from 'react';
import { Link } from "react-router-dom";

const Order = () => {
    return <>
        <p>Order</p>
        <p><Link to="/packs">Packs</Link></p>
        <p><Link to="/cart">View cart</Link></p>
    </>
};

export default Order;