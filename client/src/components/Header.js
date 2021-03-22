import React from 'react';
import search from '../assets/search.png'

const Header = () => {
    return (
        <header className="w-1/1 flex justify-center mt-5 text-white">
            <div className="relative">
                <img className="absolute -inset-x-4 inset-y-3" src={search} alt="search-icon" />
                <input type="text" placeholder="Bul" className="w-48 h-12 mr-6 ml-4 text-center text-black" />
            </div>
            <button className="mr-8 outline-none bg-pink-300 pr-4 pl-4 rounded-3xl h-10 hover:bg-pink-400">Revaçta</button>
            <button className="outline-none bg-pink-300 pr-4 pl-4 rounded-3xl h-10 hover:bg-pink-400">Yeni Gelen</button>
        </header>
    )
}

export default Header;