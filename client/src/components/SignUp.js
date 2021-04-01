import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions.js';

const SignUp = ({ location, history }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('')

    const dispatch = useDispatch();
    const userRegister = useSelector((state) => state.userRegister);
    const { loading, error, userInfo } = userRegister;

    const redirect = location.search ? location.search.split('=')[1] : '/';

    useEffect(() => {
        if (userInfo) {
            history.push(redirect);
        }
    }, [history, userInfo, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Şifreler eşleşmiyor.')
        }
        dispatch(register(name, email, password));
    }

    return (
        <div className="signup">

            <div className="signup__title">
                <h2>Kayıt Ol</h2>
            </div>
            {message && { message }}
            {error && { error }}
            {loading && { loading }}


            <form className="signup__form" autoComplete="off" onSubmit={submitHandler}>
                <div className="signup__form__element">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="signup__form__element">
                    <label htmlFor="email">E-mail</label>
                    <input type="text" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>

                <div className="signup__form__element">
                    <label htmlFor="password">Parola</label>
                    <input type="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>

                <div className="signup__form__element">
                    <label htmlFor="conpassword">Yeniden Parola</label>
                    <input type="password" id="conpassword" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
                </div>
                <button type="submit">Kayıt Ol</button>
            </form>
        </div>
    )
}

export default SignUp
