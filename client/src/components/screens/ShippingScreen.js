import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { saveShippingAddress } from '../../actions/cartActions.js';

import Layout from '../../core/Layout.js';

const ShippingScreen = ({history}) => {
    const cart = useSelector(state => state.cart);
    const {shippingAddress} = cart;

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        {/* 
            DISPATCH FORM 
            saveShippingAddress({address, city, postalCode})
        */}
        history.push('payment')
    }
    return (
        <div>
            {/* FORM COMES HERE. */}
        </div>
    )
}

export default ShippingScreen
