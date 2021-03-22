import React from 'react';

const BasketItem = ({ item, removeHandler }) => {
    return <div style={{ border: '1px solid #ccc' }}>
        <p>[image {item.image}]</p>
        {
            // @todo: sweet image
        }
        <p>{item.name} x {item.amount.toLocaleString()}</p>
        <button onClick={removeHandler}>Remove</button>
        {
            item.packs.map((pack, i) => <p key={i}>{pack.quantity} x {pack.amount}</p>)
        }
        <p>Total = {item.total.toLocaleString()}</p>
    </div>
}

export default BasketItem;