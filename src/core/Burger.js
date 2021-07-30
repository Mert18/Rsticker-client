import React, { useState } from "react";
import { Link } from "react-router-dom";

const Burger = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="burger">
      <div className="burger__logo">
        <Link to="/">commerce.com</Link>
      </div>
      <div className="burger__user">
        <Link to="/profile">
          <i className="fas fa-user"></i>
        </Link>
        <Link to="/cart">
          <i className="fas fa-shopping-cart"></i>
        </Link>
      </div>
    </div>
  );
};

export default Burger;
