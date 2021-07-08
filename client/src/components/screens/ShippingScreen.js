import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../../actions/cartActions.js";
import CheckoutSteps from "../CheckoutSteps.js";

import Layout from "../../core/Layout.js";

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode }));
    history.push("/placeorder");
  };
  return (
    <Layout>
      <div className="shipscreen">
        <div className="checkoutsteps">
          <CheckoutSteps step1 step2 />
        </div>
        <h1>Shipping</h1>

        <form onSubmit={submitHandler} className="shipscreen__form">
          <div className="shipscreen__form__field">
            <label>City</label>
            <input
              type="text"
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="shipscreen__form__field">
            <label>Postal Code</label>
            <input
              type="text"
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="shipscreen__form__field">
            <label>Address</label>
            <textarea
              type="text"
              value={postalCode}
              required
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
          <button type="submit">SEND</button>
        </form>
      </div>
    </Layout>
  );
};

export default ShippingScreen;
