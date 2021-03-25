import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../Header';
import Product from '../Product'
import { listProducts } from '../../actions/productActions.js';

const Home = () => {

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch])

    return (
        <div className="home" >
            <div className="home__header">
                <Header />
            </div>

            <div className="home__content">
                {products.map((product) => (
                    <Product key={product._id} product={product} />
                ))}
            </div>



        </div>
    )
}

export default Home
