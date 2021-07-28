import React, { useEffect, useState } from "react";
import Layout from "../../core/Layout";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../../actions/productActions.js";

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [match, dispatch]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  const handleQty = (e) => {
    setQty(e.target.value);
  };

  return (
    <Layout>
      <div className="productsc">
        <div className="productsc__head">
          <Link to="/">
            <i className="fas fa-arrow-left"></i>Go Back
          </Link>
        </div>

        {loading ? (
          <p>Loading</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="productsc__main">
            <div className="productsc__main__desc">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>{product.dimensions}</p>
              <select onChange={handleQty}>
                <option default>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <button onClick={addToCartHandler}>
                <i className="fas fa-shopping-cart"></i>
              </button>
            </div>
            <div className="productsc__main__image">
              <img
                src={product.image}
                alt={product.description}
                width="350px"
              />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductScreen;
