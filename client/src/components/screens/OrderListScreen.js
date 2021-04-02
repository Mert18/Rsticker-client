import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listOrders } from '../../actions/orderActions.js';
import { NavLink } from 'react-router-dom';
const OrderListScreen = ({ history }) => {
    const dispatch = useDispatch();

    const orderList = useSelector(state => state.userList)
    // eslint-disable-next-line no-unused-vars
    const { loading, error, orders } = orderList

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;


    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listOrders())
        } else {
            history.push('/login');
        }
    }, [dispatch, history, userInfo])
    return (
        <div>
            <h1>Siparişler</h1>
            <div>
                <div>
                    <div>
                        <p>ID</p>
                        <p>Kullanıcı</p>
                        <p>Tarih</p>
                        <p>Ödendi Mi</p>
                        <p>Teslim Edildi Mi</p>
                        <p>Toplam Fiyat</p>
                    </div>
                    <div>
                        {orders.map((order) => (
                            <div key={order._id}>
                                <p>{order._id}</p>
                                <p>{order.user && order.user.name}</p>
                                <p>{order.createdAt.substring(0, 10)}</p>
                                <p>{order.totalPrice}TL</p>
                                <p>{order.isPaid ? (
                                    order.paidAt.substring(0, 10)
                                ) : (
                                    <p>Ödeme yapılmadı</p>
                                )}L</p>
                                <p>{order.isDelivered ? (
                                    order.deliveredAt.substring(0, 10)
                                ) : (
                                    <p>Ödeme yapılmadı</p>
                                )}L</p>
                                <NavLink to={`/order/${order._id}`}>Detaylar</NavLink>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderListScreen
