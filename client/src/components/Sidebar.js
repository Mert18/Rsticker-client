import React from 'react'

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions.js';


const Sidebar = () => {
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <div className="sidebar">

            <div className="sidebar__title">
                <NavLink exact to="/"><h1>Sticker Ankara</h1></NavLink>
            </div>
            {userInfo ? (
                <div>
                    <NavLink to='/profile'>Profil</NavLink>
                    <h4 onClick={logoutHandler}>Çıkış Yap</h4>
                </div>
            ) :
                (
                    <div className="sidebar__routes">
                        <div className="">
                            <NavLink to="/signin" className="p-2">Giriş Yap</NavLink>
                        </div >
                        <div className="">
                            <NavLink to="/signup" className="p-2">Kayıt Ol</NavLink>
                        </div>
                    </div >
                )}

        </div >
    )
}

export default Sidebar
