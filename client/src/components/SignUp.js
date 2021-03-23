import React from 'react'

const SignUp = () => {
    return (
        <div className="signup">

            <div className="signup__title">
                <h2>Kayıt Ol</h2>
            </div>

            <form className="signup__form" autoComplete="off">
                <div className="signup__form__element">
                    <label htmlFor="email">E-mail</label>
                    <input type="text" id="email" />
                </div>
                <div className="signup__form__element">
                    <label htmlFor="password">Parola</label>
                    <input type="password" id="password" />
                </div>
                <button type="submit">Kayıt Ol</button>
            </form>
        </div>
    )
}

export default SignUp
