import React from 'react'

const SignUp = () => {
    return (
        <div className="">
            <h2 className="">Kayıt Ol</h2>
            <form className="" autoComplete="off">
                <div className="">
                    <label className="" htmlFor="email">E-mail</label>
                    <input className="" type="text" id="email" />
                </div>
                <div className="">
                    <label className="" htmlFor="password">Parola</label>
                    <input className="" type="text" id="password" />
                </div>

                <button className="" type="submit">Kayıt Ol</button>

            </form>
        </div >
    )
}

export default SignUp
