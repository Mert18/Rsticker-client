import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions.js';

const SignIn = ({ location, history }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    const redirect = location.search ? location.search.split('=')[1] : '/';

    useEffect(() => {
        if (userInfo) {
            history.push(redirect);
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }
    return (
        <div className="signin">

            <div className="signin__title">
                <h2>Giriş Yap</h2>
            </div>

            {error && <h1>{error}</h1>}
            {loading && <h1>{loading}</h1>}
            <form className="signin__form" autoComplete="off" onSubmit={submitHandler}>
                <div className="signin__form__element">
                    <label htmlFor="email" >E-mail</label>
                    <input type="text" id="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="signin__form__element">
                    <label htmlFor="password" >Parola</label>
                    <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Giriş Yap</button>
            </form>
        </div >
    )
}

export default SignIn
