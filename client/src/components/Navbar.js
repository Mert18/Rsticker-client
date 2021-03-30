import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {

    const [open, setOpen] = useState(false);
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

                <div className="navbar__nav__right">
                    <ul>
                        <NavLink to="/signup">Kayıt Ol</NavLink>
                        <NavLink to="/signin">Giriş Yap</NavLink>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar
