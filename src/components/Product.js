import React from "react";
import { Link, withRouter } from "react-router-dom";

const Product = ({ product, history, match }) => {
  const addToCartHandler = (e) => {
    e.preventDefault();
    history.push(`/cart/${product._id}?qty=1`);
  };
  return (
    <div className="product">
      <div className="product__image">
        <img src={product.image} alt={product.description} width="220px" />
      </div>
      <div className="product__bottom">
        <img src="/icons/cart.svg" width="40px" height="40px" alt="cart" />
      </div>
    </div>
  );
};

export default withRouter(Product);
