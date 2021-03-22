import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import binIcon from '../assets/images/icon-bin.png';
import binIcon2x from '../assets/images/icon-bin@2x.png';

const PackItem = ({ pack, editHandler, removeHandler }) => {
    const [amount, setAmount] = useState(pack.quantity);

    return <div className="mb-3 d-flex align-items-center ">
        <input className="form-control mr-3" type="number" value={amount} onChange={(event) => { setAmount(event.target.value) }} />
        <Button variant="secondary mr-3" onClick={() => { editHandler(amount) }}>Edit</Button>
        <img srcSet={`${binIcon}, ${binIcon2x} 2x`} 
            src={binIcon} alt="Remove" onClick={removeHandler} />
    </div>
}

export default PackItem;