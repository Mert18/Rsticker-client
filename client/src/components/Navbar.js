import React from "react";

import { Link, withRouter } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

const Navbar = ({ match }) => {
  const dispatch = useDispatch();
  const isActive = (path) => {
    if (match.path === path) {
      return {
        textDecoration: `#2cf6ba underline`,
        textDecorationThickness: "6px",
      };
    } else {
      return { color: "black" };
    }
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header className="nav">
      <div className="nav__left">
        <div className="nav__left__back"></div>
        <div className="nav__left__front">
          <Link to="/">commerce.com</Link>
        </div>
      </div>
      <div className="nav__middle">
        <Link to="/" style={isActive("/")}>
          Ana Sayfa
        </Link>
        <Link to="/custom" style={isActive("/custom")}>
          Özel Yapım
        </Link>
      </div>
      {userInfo ? (
        <div className="nav__right">
          <Link to="/profile" style={isActive("/profile")}>
            Profil
          </Link>
          <Link to="/cart" style={isActive("/cart")}>
            Sepet
          </Link>
          <button onClick={logoutHandler}>Logout</button>
        </div>
      ) : (
        <div className="nav__right">
          <Link to="/login" style={isActive("/login")}>
            Giriş Yap
          </Link>
          <Link to="/register" style={isActive("/register")}>
            Kayıt Ol
          </Link>
        </div>
      )}
    </header>
  );
};

export default withRouter(Navbar);
