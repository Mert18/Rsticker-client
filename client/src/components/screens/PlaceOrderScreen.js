import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { createOrder } from '../../actions/orderActions.js';


const PlaceOrderScreen = ({ history }) => {
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);

    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2)
    }

    cart.itemsPrice = addDecimals(cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0))

    cart.shippingPrice = cart.itemsPrice > 100 ? 0 : 100
    cart.taxPrice = Number((0.15 * cart.itemsPrice).toFixed(2));
    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2);

    const orderCreate = useSelector(state => state.orderCreate)
    const { order, success, error } = orderCreate

    useEffect(() => {
        if (success) {
            history.push(`/order/${order._id}`)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [history, success])



    const placeOrderHandler = () => {
        dispatch(
            createOrder({
                orderItems: cart.cartItems,
                shippingAddress: cart.shippingAddress,
                paymentMethod: cart.paymentMethod,
                itemsPrice: cart.itemsPrice,
                shippingPrice: cart.shippingPrice,
                taxPrice: cart.taxPrice,
                totalPrice: cart.totalPrice,
            })
        )
    }

    return (
        <div>
            {error && { error }}
            <div>
                <h2>Kargo</h2>
                <p>
                    <strong>Adres: </strong>
                    {cart.shippingAddress.address}, {cart.shippingAddress.city}{' '}
                    {cart.shippingAddress.postalCode},{' '}
                </p>
            </div>
            <div>
                <h2>Ödeme</h2>
                <p>
                    <strong>Metod:</strong>
                    {cart.paymentMethod}
                </p>
            </div>
            <div>
                <h2>Sepet</h2>
                {cart.cartItems.length === 0 ? 'Sepetiniz boş.' : (
                    <div>
                        {cart.cartItems.map((item, index) => (
                            <li key={index}>
                                <div>
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div>
                                    <NavLink to={`/product/${item.product}`}>
                                        {item.name}
                                    </NavLink>
                                </div>
                                <div>
                                    ${item.qty} x ${item.price} = ${item.qty * item.price}
                                </div>
                            </li>

                        ))}
                    </div>
                )}
            </div>
            <button onClick={placeOrderHandler}>Onayla</button>
        </div >
    )
}

export default PlaceOrderScreen
