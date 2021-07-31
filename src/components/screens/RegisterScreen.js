import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { register } from "../../actions/userActions.js";
import Layout from "../../core/Layout.js";

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
    } else {
      dispatch(register(name, email, password));
    }
  };
  return (
    <Layout>
      <div className="register">
        <div className="formwrapper">
          <div className="messages">
            {error && <h2>{error}</h2>}
            {loading && <h2>Loading...</h2>}
            {message}
          </div>

          <div className="formwrapper">
            <div className="title">
              <h2>Kayıt Ol</h2>
            </div>
            <form onSubmit={submitHandler} className="form">
              <div className="inputbox">
                <label htmlFor="name">İsim</label>
                <input
                  id="name"
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <div className="inputbox">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>

              <div className="inputbox">
                <label htmlFor="password">Şifre</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>

              <div className="inputbox">
                <label htmlFor="confirmPassword">Şifre Yeniden</label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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

export default RegisterScreen;
