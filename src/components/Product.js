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
        <img src={product.image} alt={product.description} width="300px" />
      </div>
      <div className="product__bottom">
        <div className="product__name">
          <p>{product.name}</p>
        </div>
        <div className="product__btn">
          <Link to={`/product/${product._id}`}>
            <button>
              <p>İNCELE</p>
            </button>
          </Link>
          <button onClick={addToCartHandler}>
            <p>SEPETE EKLE</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Product);
