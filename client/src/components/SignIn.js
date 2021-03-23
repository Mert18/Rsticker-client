import React from 'react'

const SignIn = () => {
    return (
        <div className="">
            <h2 className="">Giriş Yap</h2>
            <form className="" autoComplete="off">
                <div className="">
                    <label className="" htmlFor="email">E-mail</label>
                    <input className="" type="text" id="email" />
                </div>
                <div className="">
                    <label className="" htmlFor="password">Parola</label>
                    <input className="" type="text" id="password" />
                </div>

                <button className="" type="submit">Giriş Yap</button>

            </form>
        </div >
    )
}

export default SignIn
