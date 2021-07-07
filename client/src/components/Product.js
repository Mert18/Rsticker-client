import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="product">
      <div className="product__image">
        <img src={product.image} alt={product.description} width="200px" />
      </div>
      <div className="product__name">
        <p>{product.name}</p>
      </div>
      <div className="product__btn">
        <Link to={`/product/${product._id}`}>
          <button>
            <i class="fas fa-search"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
