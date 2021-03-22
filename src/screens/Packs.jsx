import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { addPackItem, removePackItem, editPackItem } from '../store/actions';
import PackItem from '../components/PackItem';
import Header from '../components/Header';

const Packs = () => {
    const dispatch = useDispatch();
    const packs = useSelector(state => state.packs);
    const [newPackSize, setNewPackSize] = useState('');

    const handleAddPackSize = () => {
        dispatch(addPackItem({
            id: Date.now(),
            quantity: newPackSize
        }));
        setNewPackSize('');
    }

    return <>
        <Header />
        <p><Link to="/cart">View cart</Link></p>
        <h2>Pack Sizes</h2>
        <p>Add, edit or remove pack sizes below.</p>
        {
            packs.map(pack => <PackItem 
                key={pack.id} 
                pack={pack} 
                editHandler={(amount) => { dispatch(editPackItem(amount, pack.id))}}
                removeHandler={() => { dispatch(removePackItem(pack.id))}} />)
        }
        <input type="number" value={newPackSize} onChange={(event) => {setNewPackSize(event.target.value)}} />
        <button onClick={() => { handleAddPackSize() }}>Add Pack Size</button>
    </>
};

export default Packs;