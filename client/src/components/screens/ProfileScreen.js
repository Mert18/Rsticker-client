import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Layout from '../../core/Layout.js';

import {getUserDetails, updateUserProfile} from '../../actions/userActions.js';
import { listMyOrders } from '../../actions/orderActions.js'
import { userUpdateProfileReducer } from '../../reducers/userReducers.js';

const ProfileScreen = ({location, history}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('mertuygur02@gmail.com');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const dispatch = useDispatch();

    const userDetails = useSelector(state => state.userDetails);
    const {loading, error, user} = userDetails;

    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;
    
    const userUpdateProfile = useSelector(state => state.userLogin);
    const {success} = userUpdateProfile;

    const orderListMy = useSelector(state => state.orderListMy);
    const {loading: loadingOrders, error: errorOrders, orders} = orderListMy;

    useEffect(() => {
        if(!userInfo){
            history.push('/login')
        }else {
            if(!user.name){
                dispatch(getUserDetails('profile'))
                dispatch(listMyOrders());
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [history, userInfo, dispatch, user])

    const submitHandler = (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            setMessage('Passwords do not match.')
        }else {
            dispatch(updateUserProfile({id: user._id, name, email, password}))
        }

    }
    return (
    <Layout>
        <div className="profile">
            <div className="profile__message">
                <h2>{message}</h2>
            </div>
            <div className="profile__form__container">
                <h2 className="profile__form__title">Change Profile</h2>
                <form onSubmit={submitHandler}>
                <div className="profile__inputbox">
                    <label htmlFor="name">Name</label>
                        <input id="name" type="name" value={name} onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div className="profile__inputbox">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className="profile__inputbox">
                        <label htmlFor="password">New Password</label>
                        <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div className="profile__inputbox">
                        <label htmlFor="confirmPassword">Confirm New Password</label>
                        <input id="confirmPassword" type="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
                    </div>
                    <div className="profile__buttonbox">
                        <button type="submit">CHANGE</button>
                    </div>
                    </form>
                </div>
            {/* ORDERS */}
            {/* ADDRESS */}
        </div>
    </Layout>
    )
}

export default ProfileScreen
