import React from 'react'

import { NavLink } from "react-router-dom";



const Sidebar = () => {
    return (
        <div className="sidebar">

            <div className="sidebar__title">
                <NavLink exact to="/"><h1>Sticker Ankara</h1></NavLink>
            </div>

            <div className="sidebar__routes">
                <div className="">
                    <NavLink to="/signin" className="p-2">Giriş Yap</NavLink>
                </div>
                <div className="">
                    <NavLink to="/signup" className="p-2">Kayıt Ol</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
