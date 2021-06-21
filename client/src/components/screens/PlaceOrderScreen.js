import React from 'react'
import { useDispatch, useSelector} from 'react-redux';
import CheckoutSteps from '../CheckoutSteps';
import {createOrder} from '../../actions/orderActions.js';

const PlaceOrderScreen = () => {

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);

    const placeOrderHandler = () => {
        dispatch(createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            itemsPrice: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            taxPrice: cart.taxPrice,
            totalPrice: cart.totalPrice
        }))
    {/* Place order button handler */}
    }
    return (
        <div>
            <CheckoutSteps step1 step2 step3/>

            {/* PLACE ORDER SCREEN HERE. */}
            {/* cart.shippingAddress.address 'city' 'postal code */}
            {/* cart.cartItems.map */}
        </div>
    )
}

export default PlaceOrderScreen
