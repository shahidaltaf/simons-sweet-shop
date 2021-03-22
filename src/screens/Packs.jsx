import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Container, Button, Card } from 'react-bootstrap';

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
        <Header cart />
        <Container>
            <h2 className="h3 mb-4">Rhubarb &amp; Custard</h2>
            <Card>
                <Card.Header className="bg-secondary">
                    <h3 className="h4 mb-0 text-center">Pack Sizes</h3>
                </Card.Header>
                <Card.Body>
                    <p>Add, edit or remove pack sizes below.</p>
                    {
                        packs.map(pack => <PackItem
                            key={pack.id}
                            pack={pack}
                            editHandler={(amount) => { dispatch(editPackItem(amount, pack.id)) }}
                            removeHandler={() => { dispatch(removePackItem(pack.id)) }} />)
                    }
                    <div className="mt-4">
                        <input className="form-control mb-4" type="number" 
                            value={newPackSize} placeholder="Enter another pack size"
                            onChange={(event) => { setNewPackSize(event.target.value) }} />
                        <Button className="btn-block" variant="primary" onClick={() => { handleAddPackSize() }}>Add Pack Size</Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    </>
};

export default Packs;