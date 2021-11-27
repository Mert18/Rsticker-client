import React, { useEffect, useState } from "react";
import Product from "../Product";
import { listProducts } from "../../actions/productActions.js";
import { useDispatch, useSelector } from "react-redux";

const HomeScreen = () => {
  const [filt, setFilt] = useState("");
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <section className="home">
      <div className="home__hero">
        <p>
          In order to add an item to your cart, simply click on the sticker. You
          will be selecting the amount later. Each sticker costs 0.50$.
        </p>
      </div>
      <div className="home__gocart">
        <p>(x) items present in your cart.</p>
        <button>Cart</button>
      </div>
      <div className="products">
        {loading ? (
          <h2>Loading</h2>
        ) : (
          /* error ? 
             <h3>{error}</h3>
              :  */
          <>
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default HomeScreen;
