import React, { useState, useEffect } from "react";

import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

const Navbar = ({ match }) => {
  const [scrollState, setScrollState] = useState("top");

  const dispatch = useDispatch();

  const scState = (scrollState) => {
    if (scrollState === "transparent") {
      return {
        background: `#fdfdfde1`,
      };
    }
  };
  const isActive = (path) => {
    if (match.path === path) {
      return {
        color: "#da0037",
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

  useEffect(() => {
    let listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 50) {
        if (scrollState !== "transparent") {
          setScrollState("transparent");
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top");
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  return (
    <header className="nav" style={scState(scrollState)}>
      <div className="nav__left"></div>
      <div className="nav__middle">
        <Link to="/" style={isActive("/")}>
          Home
        </Link>
        <Link to="/categories" style={isActive("/categories")}>
          Categories
        </Link>
      </div>
      {userInfo ? (
        <div className="nav__right">
          <Link to="/profile" style={isActive("/profile")}>
            Profile
          </Link>
          <button onClick={logoutHandler}>Çıkış Yap</button>
        </div>
      ) : (
        <div className="nav__right">
          <Link to="/login" style={isActive("/login")}>
            Login / Register
          </Link>
        </div>
      )}
    </header>
  );
};

export default withRouter(Navbar);
