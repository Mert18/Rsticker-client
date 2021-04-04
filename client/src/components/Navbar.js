import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions.js';
import AdminDropdown from './AdminDropdown.js';

const Navbar = () => {
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout())
    }

    const [open, setOpen] = useState(false);
    const [adminDropdown, setAdminDropdown] = useState(false);

    const handleAdminDropdown = () => {

        setAdminDropdown(!adminDropdown)
    }
    return (
        <header className="navbar">
            <div className="navbar__logo">
                <h2>logo</h2>
            </div>
            <div className="navbar__nav">
                <div className="navbar__nav__left">
                    <ul>
                        <NavLink to="/">Ana Sayfa</NavLink>
                        <NavLink to="/" onClick={() => setOpen(!open)}>Kategoriler</NavLink>
                    </ul>
                </div>
                {open &&
                    <div className="categories">
                        <div className="categories__header">
                            <NavLink to="/" onClick={() => setOpen(!open)}>X</NavLink>
                        </div>
                        <div className="categories__category">
                            <div className="categories__title">
                                <h2>Futbol</h2>
                            </div>
                            <div className="categories__list">
                                <ul>
                                    <NavLink to="/"><li>Tümü</li></NavLink>
                                    <NavLink to="/"><li>Ayakkabı</li></NavLink>
                                    <NavLink to="/"><li>Futbol Topu</li></NavLink>
                                </ul>
                            </div>
                        </div>

                        <div className="categories__category">
                            <div className="categories__title">
                                <h2>Basketbol</h2>
                            </div>
                            <div className="categories__list">
                                <ul>
                                    <NavLink to="/"><li>Tümü</li></NavLink>
                                    <NavLink to="/"><li>Ayakkabı</li></NavLink>
                                    <NavLink to="/"><li>Basketbol Topu</li></NavLink>
                                </ul>
                            </div>
                        </div>

                        <div className="categories__category">
                            <div className="categories__title">
                                <h2>Voleybol</h2>
                            </div>
                            <div className="categories__list">
                                <ul>
                                    <NavLink to="/"><li>Tümü</li></NavLink>
                                    <NavLink to="/"><li>Ayakkabı</li></NavLink>
                                    <NavLink to="/"><li>Voleybol Topu</li></NavLink>
                                </ul>
                            </div>
                        </div>

                        <div className="categories__category">
                            <div className="categories__title">
                                <h2>Fitness</h2>
                            </div>
                            <div className="categories__list">
                                <ul>
                                    <NavLink to="/"><li>Tümü</li></NavLink>
                                </ul>
                            </div>
                        </div>

                    </div>}
                {userInfo ?
                    (
                        <div className="navbar__nav__right">
                            <ul>
                                {userInfo.isAdmin && (
                                    <div className="admin__nav">
                                        <div className="admin__nav__title" onClick={() => { handleAdminDropdown() }}>
                                            <h2>Admin Paneli</h2>
                                        </div>
                                        <div>
                                            {adminDropdown && (
                                                <div className="admin__nav__items">
                                                    <NavLink to={`/admin/orderlist`}>Siparişler</NavLink>
                                                    <NavLink to={`/admin/productlist`}>Ürünler</NavLink>
                                                    <NavLink to={`/admin/userlist`}>Kullanıcılar</NavLink>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )
                                }
                                <NavLink to="/profile">{userInfo.name}</NavLink>
                                <NavLink to="/" onClick={logoutHandler}>Çıkış Yap</NavLink>
                            </ul>
                        </div>
                    ) :
                    <div className="navbar__nav__right">
                        <ul>
                            <NavLink to="/signup">Kayıt Ol</NavLink>
                            <NavLink to="/signin">Giriş Yap</NavLink>
                        </ul>
                    </div>}

            </div>
        </header>
    )
}

export default Navbar
