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
      <article className="search">
        <div className="search__input">
          <input
            type="text"
            placeholder="Ara"
            value={filt}
            onChange={(e) => setFilt(e.target.value)}
          />
        </div>
        <div className="search__filters">
          <p>Categories</p>
          <p>New</p>
          <p>Popular</p>
        </div>
      </article>
      {loading ? (
        <h2>Loading</h2>
      ) : (
        /* error ? 
             <h3>{error}</h3>
              :  */

        <>
          <article className="products">
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </article>
        </>
      )}
    </section>
  );
};

export default HomeScreen;
