import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { listProducts } from '../../actions/productActions.js';
import Hero from '../Hero';

const Home = () => {

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);
    // eslint-disable-next-line no-unused-vars
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch])

    return (
        <div className="home" >
            {error && { error }}
            <div className="home__hero">
                <Hero />
            </div>
            <div className="home__products">
                {products ? products.map((product) => (
                    <div className="single__product">
                        <div className="single__product__image">
                            <img src={product.image} alt={product.description} width="350px" />
                        </div>
                        <div className="single__product__text">
                            <h2>{product.name}</h2>
                            <h2>{product.price}₺</h2>
                        </div>
                    </div>
                )) : <h2>Ürün Bulunamadı</h2>}
            </div>
        </div>
    )
}

export default Home
