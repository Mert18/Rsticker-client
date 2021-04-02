import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getOrderDetails } from '../../actions/orderActions.js';


const OrderScreen = ({ match }) => {

    const orderId = match.params.id;

    const dispatch = useDispatch();

    const orderDetails = useSelector((state) => state.orderDetails);
    // eslint-disable-next-line no-unused-vars
    const { order, loading, error } = orderDetails

    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2);
    }

    order.itemsPrice = addDecimals(
        order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    )

    useEffect(() => {
        if (!order || order._id !== orderId) {
            dispatch(getOrderDetails(orderId))

        }
    }, [dispatch, order, orderId])

    return (
        <div>
            <div>
                {error && { error }}
                <h2>Kargo</h2>
                <p><strong>İsim: </strong> {order.user.name}</p>
                <p>
                    <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
                </p>

                <p>
                    <strong>Adres: </strong>
                    {order.shippingAddress.address}, {order.shippingAddress.city}{' '}
                    {order.shippingAddress.postalCode},{' '}
                </p>
            </div>
            <div>
                <h2>Ödeme</h2>
                <p>
                    <strong>Ödeme Metodu:</strong>
                    {order.paymentMethod}
                    {order.isPaid ? <strong>Ödeme yapıldı.</strong> : <strong>Ödeme Henüz Yapılmadı.</strong>}
                </p>

                <p>
                    <strong>Ödeme Metodu:</strong>
                    {order.paymentMethod}
                    {order.isDelivered ? <strong>Teslim edildi.</strong> : <strong>Henüz Teslim Edilmedi.</strong>}
                </p>
            </div>
            <div>
                <h2>Sepet</h2>
                {order.orderItems.length === 0 ? 'Sepetiniz boş.' : (
                    <div>
                        {order.orderItems.map((item, index) => (
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
        </div>
    )
}

export default OrderScreen
