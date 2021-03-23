import React from 'react'

const SignIn = () => {
    return (
        <div className="signin">

            <div className="signin__title">
                <h2>Giriş Yap</h2>
            </div>

            <form className="signin__form" autoComplete="off">
                <div className="signin__form__element">
                    <label htmlFor="email">E-mail</label>
                    <input type="text" id="email" />
                </div>
                <div className="signin__form__element">
                    <label htmlFor="password">Parola</label>
                    <input type="password" id="password" />
                </div>
                <button type="submit">Giriş Yap</button>
            </form>
        </div>
    )
}

export default SignIn
