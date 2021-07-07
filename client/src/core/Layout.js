import React, { Fragment } from "react";

import Header from "../components/Navbar";
import Footer from "../components/Footer";
import Burger from "../core/Burger";
const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
