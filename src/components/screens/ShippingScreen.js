import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../../actions/cartActions.js";
import cities from "../../cities.json";

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
        <div className="formwrapper">
          <div className="title">
            <h2>Kargo</h2>
          </div>
          <form onSubmit={submitHandler} className="form">
            <div className="inputbox">
              <label>Şehir</label>
              <select
                className="select"
                onChange={(e) => setCity(e.target.value)}
              >
                {cities.map((city) => (
                  <option key={city.id}>{city.name}</option>
                ))}
              </select>
            </div>
            <div className="inputbox">
              <label>Adres</label>
              <textarea
                id="textarea"
                type="text"
                value={address}
                required
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="inputbox">
              <label>Posta Kodu</label>
              <input
                type="text"
                value={postalCode}
                required
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
            <button type="submit"></button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ShippingScreen;
