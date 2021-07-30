import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../core/Layout.js";
import { formatDistance, subDays } from "date-fns";

import {
  getUserDetails,
  updateUserProfile,
} from "../../actions/userActions.js";
import { listMyOrders } from "../../actions/orderActions.js";

const ProfileScreen = ({ location, history }) => {
  const [current, setCurrent] = useState("bilgilerim");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("mertuygur02@gmail.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userLogin);
  const { success } = userUpdateProfile;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
        dispatch(listMyOrders());
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [history, userInfo, dispatch, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };
  return (
    <Layout>
      <section className="profile">
        <div className="profile__message">
          <h2>{message}</h2>
        </div>
        <div></div>
        <div className="profile__nav">
          <ul>
            <li
              onClick={() => {
                setCurrent("bilgilerim");
              }}
            >
              Profile Info
            </li>
            <li
              onClick={() => {
                setCurrent("guncelle");
              }}
            >
              Update Profile
            </li>
            <li
              onClick={() => {
                setCurrent("siparislerim");
              }}
            >
              Orders
            </li>
          </ul>
        </div>
        <div className="profile__route">
          {current === "bilgilerim" ? (
            <div className="bilgilerim">
              <div className="name">
                <h1>{name}</h1>
              </div>
              <div className="stats">
                <h3>425 Points</h3>
              </div>
            </div>
          ) : current === "guncelle" ? (
            <div className="profile__form__container">
              <h2 className="profile__form__title">Bilgilerini Güncelle</h2>
              <form onSubmit={submitHandler}>
                <div className="profile__inputbox">
                  <label htmlFor="name">İsim</label>
                  <input
                    id="name"
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>
                <div className="profile__inputbox">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
                <div className="profile__inputbox">
                  <label htmlFor="password">Yeni Şifre</label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>
                <div className="profile__inputbox">
                  <label htmlFor="confirmPassword">Yeni Şifre Yeniden</label>
                  <input
                    id="confirmPassword"
                    type="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  ></input>
                </div>
                <div className="profile__buttonbox">
                  <button type="submit"></button>
                </div>
              </form>
            </div>
          ) : current === "siparislerim" ? (
            <div className="profile__orders">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>DATE</th>
                    <th>TOTAL</th>
                    <th>DELIVERED</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order._id}>
                      <td>{order._id}</td>
                      <td>{order.createdAt.substring(0, 10)}</td>
                      <td>{order.totalPrice}</td>
                      <td>
                        {order.isDelivered ? (
                          <p>Delivered</p>
                        ) : (
                          <p>Not Delivered</p>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ProfileScreen;
