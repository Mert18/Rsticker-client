import React, { useEffect, useState } from "react";
import Product from "../Product";
import { listProducts } from "../../actions/productActions.js";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal.js";

const HomeScreen = () => {
  const [filt, setFilt] = useState("");
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <section className="home">
      <article className="home__bg">
        <img src="/images/stickers/herobg.svg" alt="sale banner" />
      </article>
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
        {showModal ? (
          <Modal setShowModal={setShowModal}>
            <div></div>
          </Modal>
        ) : null}
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
