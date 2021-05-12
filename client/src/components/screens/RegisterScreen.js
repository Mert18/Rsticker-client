import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {register} from '../../actions/userActions.js';

const RegisterScreen = ({location, history}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('mertuygur02@gmail.com');
    const [password, setPassword] = useState('123456');
    const [confirmPassword, setConfirmPassword] = useState('123456');
    const [message, setMessage] = useState('');

    const dispatch = useDispatch();

    const userRegister = useSelector(state => state.userRegister);
    const {loading, error, userInfo} = userRegister;

    const redirect = location.search ? location.search.split('=')[1] : '/';

    useEffect(() => {
        if(userInfo){
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            setMessage('Passwords do not match.')
        }else {
            dispatch(register(name, email, password))
        }

    }
    return (
        <div className="login">

            <div className="login__left">
                <div className="login__left__messages">
                    {error && <h2>{error}</h2>}
                    {loading && <h2>Loading...</h2>}
                    <div className="back">
                        <Link to="/"><i class="fas fa-chevron-left"></i>Geri Dön</Link>
                    </div>
                    
                    {message}
                </div>
                <div className="login__left__formcontainer">
                    <form onSubmit={submitHandler} className="form">
                    <div className="form__inputbox">
                            <input id="name" type="name" value={name} onChange={(e) => setName(e.target.value)}></input>
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form__inputbox">
                            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                            <label htmlFor="email">Email</label>
                        </div>

                        <div className="form__inputbox">
                            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                            <label htmlFor="password">Password</label>
                        </div>

                        <div className="form__inputbox">
                            <input id="confirmPassword" type="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                        </div>

                        <div className="form__buttonbox">
                            <button type="submit">Log In</button>
                        </div>
                    </form>
                </div>

                <div className="login__left__redirect">
                    <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Log In Instead</Link>
                </div>
            </div>

            <div className="login__right">

            </div>
        </div>
    )
}

export default RegisterScreen
