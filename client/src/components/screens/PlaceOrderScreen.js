import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../CheckoutSteps";
import { createOrder } from "../../actions/orderActions.js";
import Layout from "../../core/Layout";

const PlaceOrderScreen = ({ history }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  console.log(cart);
  if (!cart.shippingAddress.address) {
    history.push("/shipping");
  }
  //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + 0.5 * item.qty, 0)
  );
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100);
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)));
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
    }
    // eslint-disable-next-line
  }, [history, success]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };
  console.log(cart.cartItems);
  return (
    <Layout>
      <div className="placeorder">
        <div className="checkoutsteps">
          <CheckoutSteps step1 step2 step3 />
        </div>
        <div className="cartscreen__items">
          {cart.cartItems.map((product) => {
            return (
              <div className="item">
                <div className="item__image">
                  <img src={product.image} alt={product.name} width="250px" />
                </div>
                <div>
                  <h3>{product.name}</h3>
                </div>
                <h2>{product.qty} Adet</h2>
              </div>
            );
          })}
        </div>
        <div className="address">
          <p>{cart.shippingAddress.address}</p>
          <p>{cart.shippingAddress.city}</p>
          <p>{cart.shippingAddress.postalCode}</p>
        </div>
        {error && <div>An Error Occured : {error}</div>}

        <button onClick={placeOrderHandler} className="placeorderbtn">
          Tamamla
        </button>
      </div>
    </Layout>
  );
};

export default PlaceOrderScreen;
