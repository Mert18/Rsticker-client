import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { listProducts } from '../../actions/productActions.js';
import Hero from '../Hero';

const Home = () => {

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch])

    return (
        <div className="home" >
            <div className="home__hero">
                <Hero />
            </div>
        </div>
    )
}

export default Home
