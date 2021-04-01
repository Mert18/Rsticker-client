import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../../actions/cartActions.js';

const PaymentScreen = ({ history }) => {

    const cart = useSelector(state => state.cart);
    const { shippingAddress } = cart;

    if (!shippingAddress) {
        history.push('/shipping')
    }

    // eslint-disable-next-line no-unused-vars
    const [paymentMethod, setPaymentMethod] = useState('');

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }
    return (
        <div>
            <h1>Ödeme</h1>
            <form onSubmit={submitHandler}>
                <div>

                </div>

                <button type="submit">Gönder</button>
            </form>
        </div >
    )
}

export default PaymentScreen
