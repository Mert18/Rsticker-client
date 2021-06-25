import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { saveShippingAddress } from '../../actions/cartActions.js';
import CheckoutSteps from '../CheckoutSteps.js';

import Layout from '../../core/Layout.js';

const ShippingScreen = ({history}) => {
    const cart = useSelector((state) => state.cart);
    const {shippingAddress} = cart;

    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({address, city, postalCode}));
        history.push('/placeorder');
    }
    return (
        <Layout>
            <div>
                <CheckoutSteps step1 step2 />
                <h1>Shipping</h1>

                <form onSubmit={submitHandler}>
                    <div>
                        <label>Address</label>
                        <input 
                        type='text'
                        value={address}
                        required
                        onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Address</label>
                        <input 
                        type='text'
                        value={city}
                        required
                        onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Address</label>
                        <input 
                        type='text'
                        value={postalCode}
                        required
                        onChange={(e) => setPostalCode(e.target.value)}
                        />
                    </div>
                    <button type='submit'>SEND</button>
                </form>

            </div>
        </Layout>
    )
}

export default ShippingScreen
