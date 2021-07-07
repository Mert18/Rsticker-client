import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {login} from '../../actions/userActions.js';
import Layout from '../../core/Layout.js';

const LoginScreen = ({location, history}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const {loading, error, userInfo} = userLogin;

    const redirect = location.search ? location.search.split('=')[1] : '/';

    useEffect(() => {
        if(userInfo){
            history.push(redirect)
        }
    }, [history, userInfo, redirect])
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))

    }
    return (
        <Layout>
            <div className="login">
                <div className="messages">
                    {error && <h2>{error}</h2>}
                    {loading && <h2>Loading...</h2>}
                </div>
                <div className="login__hero">
                    <h2>Log In</h2>
                </div>

                <div className="login__formcontainer">
                    <form onSubmit={submitHandler} className="form">
                        <div className="form__inputbox">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div className="form__inputbox">
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                        <div className="form__buttonbox">
                            <button type="submit">Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default LoginScreen

