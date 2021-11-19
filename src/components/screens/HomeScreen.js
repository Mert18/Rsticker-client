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
