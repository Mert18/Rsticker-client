import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../../actions/cartActions.js';

const ShippingScreen = ({ history }) => {

    const cart = useSelector(state => state.cart);
    const { shippingAddress } = cart;

    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ address, city, postalCode }))
        history.push('/payment')
    }
    return (
        <div>
            <h1>Kargo</h1>
            <form onSubmit={submitHandler}>
                <div className="shipping__form__element">
                    <label htmlFor="address" >Address</label>
                    <input required type="text" id="address" onChange={(e) => setAddress(e.target.value)} />
                </div>

                <div className="shipping__form__element">
                    <label htmlFor="city">Şehir</label>
                    <input required type="text" id="city" onChange={(e) => setCity(e.target.value)} />
                </div>

                <div className="shipping__form__element">
                    <label htmlFor="postalCode">Posta Kodu</label>
                    <input required type="text" id="postalCode" onChange={(e) => setPostalCode(e.target.value)} />
                </div>

                <button type="submit">Gönder</button>
            </form>
        </div >
    )
}

export default ShippingScreen
