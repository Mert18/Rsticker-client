import React, { Fragment, useEffect, useState } from "react";

import Header from "../components/Navbar";
import Footer from "../components/Footer";
import Burger from "../core/Burger";
import useWindowDimensions from "../components/useWindowDimensions";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Layout = ({ children }) => {
  const { height, width } = useWindowDimensions();
  const [widthD, setwidthD] = useState(0);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    setwidthD(width);
  }, [width]);
  return (
    <Fragment>
      {widthD < 900 ? <Burger /> : <Header />}
      <div className="container">{children}</div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
