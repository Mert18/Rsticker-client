import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../actions/userActions.js";
import Layout from "../../core/Layout.js";

const LoginScreen = ({ location, history }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  return (
    <Layout>
      <div className="login">
        <div className="messages">
          <div className="message-error">{error && <p>{error}</p>}</div>
        </div>
        <div className="login__login">
          <div className="formwrapper">
            <div className="title">
              <h2>LOGIN</h2>
            </div>
            <form onSubmit={submitHandler} className="form">
              <div className="inputbox">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                ></input>
              </div>
              <div className="inputbox">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                ></input>
              </div>
              <button type="submit"></button>
            </form>
          </div>
        </div>

        <div className="login__register">
          <div className="formwrapper">
            <div className="title">
              <h2>REGISTER</h2>
            </div>
            <form onSubmit={submitHandler} className="form">
              <div className="inputbox">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="name"
                  value={registerName}
                  onChange={(e) => setRegisterName(e.target.value)}
                ></input>
              </div>

              <div className="inputbox">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                ></input>
              </div>
              <div className="inputbox">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                ></input>
              </div>
              <button type="submit"></button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginScreen;
