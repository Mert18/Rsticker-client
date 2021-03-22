import React from 'react'

import { NavLink } from "react-router-dom";


const Sidebar = () => {
    return (
        <div className="border-2 h-screen relative">
            <div className="absolute bg-pink-200 text-black w-12 h-11 text-center -inset-x-5 text-3xl cursor-pointer inset-y-20 ">
                &#8594;
            </div>
            <div className="text-center text-3xl p-5">
                <NavLink exact to="/"><h1>Sticker Ankara</h1></NavLink>
            </div>
            <div className="flex justify-center align-middle mt-8">
                <div className="p-2">
                    <NavLink to="/signin" className="p-2">Giriş Yap</NavLink>
                </div>
                <div className="p-2">
                    <NavLink to="/signup" className="p-2">Kayıt Ol</NavLink>
                </div>

            </div>
        </div>
    )
}

export default Sidebar
