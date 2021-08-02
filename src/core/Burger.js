import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

const Burger = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div className="burger">
      <div className="burger__logo">
        <Link to="/">commerce.com</Link>
      </div>
      {userInfo ? (
        <div className="burger__user">
          <Link to="/profile">
            <i className="fas fa-user"></i>
          </Link>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
          </Link>
          <Link onClick={logoutHandler}>
            <i className="fas fa-sign-out-alt"></i>
          </Link>
        </div>
      ) : (
        <div className="nav__right">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      )}
    </div>
  );
};

export default Burger;
