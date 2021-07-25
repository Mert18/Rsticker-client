import React, { Fragment, useEffect, useState } from "react";

import Header from "../components/Navbar";
import Footer from "../components/Footer";
import Burger from "../core/Burger";
import useWindowDimensions from "../components/useWindowDimensions";

const Layout = ({ children }) => {
  const { height, width } = useWindowDimensions();
  const [widthD, setwidthD] = useState(0);

  useEffect(() => {
    setwidthD(width);
  }, [width]);
  return (
    <Fragment>
      {widthD < 900 ? <Burger /> : <Header />}
      <div className="hero">
        <div className="hero__text">
          <p>Every sticker costs x.</p>
          <p>Ship to x country only.</p>
        </div>
      </div>
      <div className="container">{children}</div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
