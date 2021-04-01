
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUserDetails, updateUserProfile } from '../../actions/userActions.js';
import { listMyOrders } from '../../actions/orderActions.js';

const ProfileScreen = ({ history }) => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [message, setMessage] = useState('')

    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const userUpdateProfile = useSelector((state) => state.userLogin);
    const { success } = userUpdateProfile;

    const orderListMy = useSelector((state) => state.orderListMy);
    const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

    useEffect(() => {
        if (!userInfo) {
            history.push('/login');
        } else {
            if (!user.name) {
                dispatch(getUserDetails('profile'))
                dispatch(listMyOrders())
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }

    }, [dispatch, history, userInfo, user])

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage("Şifreler eşleşmiyor.")
        } else {
            dispatch(updateUserProfile({ id: user._id, name, email, password }))
        }
    }

    return (
        <div>
            {message}
            {success}
            <form className="signup__form" autoComplete="off" onSubmit={submitHandler}>
                <div className="signup__form__element">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="signup__form__element">
                    <label htmlFor="email">E-mail</label>
                    <input type="text" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>

                <div className="signup__form__element">
                    <label htmlFor="password">Parola</label>
                    <input type="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>

                <div className="signup__form__element">
                    <label htmlFor="conpassword">Yeniden Parola</label>
                    <input type="password" id="conpassword" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
                </div>
                <button type="submit">Güncelle</button>
            </form>

            <div>
                <h2>Siparişler</h2>
                <div>
                    {orders ? orders.map(order => (
                        <div>
                            <h2>{order._id}</h2>
                            <p>{order.createdAt.substring(0, 10)}</p>
                            <p>{order.totalPrice}</p>
                            <p>{order.isPaid ? <strong>Ödeme Yapıldı.</strong> : <strong>Ödeme Henüz Yapılmadı</strong>}</p>
                            <p>{order.isDelivered ? <strong>Teslim Edildi.</strong> : <strong>Henüz Teslim Edilmedi.</strong>}</p>
                            <NavLink to={`/order/${order._id}`}><h2>Göz At</h2></NavLink>
                        </div>
                    )) : <h2>Sipariş bulunamadı.</h2>}
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
