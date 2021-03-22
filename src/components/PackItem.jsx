import React, { useState } from 'react';

const PackItem = ({ pack, editHandler, removeHandler }) => {
    const [amount, setAmount] = useState(pack.quantity);

    return <div style={{ border: '1px solid #ccc' }}>
        <input type="number" value={amount} onChange={(event) => { setAmount(event.target.value) }} />
        <button onClick={() => { editHandler(amount) }}>Edit</button>
        <button onClick={removeHandler}>Remove</button>
    </div>
}

export default PackItem;