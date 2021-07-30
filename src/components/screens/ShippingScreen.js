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
            <label>Şehir</label>
            <input
              type="text"
              value={city}
              required
              onChange={(e) => e.target.value}
            />
          </div>
          <div className="shipscreen__form__field">
            <label>Adres</label>
            <input
              type="text"
              value={address}
              required
              onChange={(e) => setAddresssetCity(e.target.value)}
            />
          </div>
          <div className="shipscreen__form__field">
            <label>Posta Kodu</label>
            <textarea
              type="text"
              value={postalCode}
              required
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
          <button type="submit" id="submitbutton"></button>
        </form>
      </div>
    </Layout>
  );
};

export default ShippingScreen;
