import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../../core/Layout";
import { addToCart, removeFromCart } from "../../actions/cartActions.js";

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };
  return (
    <Layout>
      <div className="cartscreen">
        <h1 className="cartscreen__title">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <div className="cartscreen__info">
            <h2>Your cart is empty.</h2>
            <Link to="/">Go Back</Link>
          </div>
        ) : (
          <div className="cartscreen__items">
            {cartItems.map((item) => (
              <li key={item.product} className="item">
                <div className="item__image">
                  <img src={item.image} alt={item.name} width="250px" />
                </div>
                <div>
                  <h3>{item.name}</h3>
                </div>
                <input
                  type="number"
                  value={item.qty}
                  onChange={(e) =>
                    dispatch(addToCart(item.product, Number(e.target.value)))
                  }
                />
                <button
                  type="button"
                  onClick={() => {
                    removeFromCartHandler(item.product);
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </div>
        )}
        <div className="cartscreen__footer">
          <div>
            <h2>
              Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}){" "}
              Items
            </h2>
          </div>

          <div className="cartscreen__footer__total">
            ${cartItems.reduce((acc, item) => acc + item.qty * 0.5, 0)}
          </div>

          <div className="cartscreen__footer__proceed">
            <button
              type="button"
              disabled={cartItems.length === 0}
              onClick={checkoutHandler}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartScreen;
