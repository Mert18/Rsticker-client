import React from 'react'

const SignUp = () => {
    return (
        <div className="w-1/1 h-1/1 relative">
            <h2 className="absolute inset-24 text-6xl text-gray-300">Kayıt Ol</h2>
            <form className="inset-center bg-pink-600 rounded-md p-9" autoComplete="off">
                <div className="p-2 flex flex-col">
                    <label className="text-white" htmlFor="email">E-mail</label>
                    <input className="bg-pink-200 h-12 w-72 text-center" type="text" id="email" />
                </div>
                <div className="p-2 flex flex-col">
                    <label className="text-white" htmlFor="password">Parola</label>
                    <input className="bg-pink-200 h-12 w-72 text-center" type="text" id="password" />
                </div>

                <button className="p-2 bg-pink-300 m-2 hover:bg-pink-400" type="submit">Kayıt Ol</button>

            </form>
        </div >
    )
}

export default SignUp
