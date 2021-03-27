import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Product from '../Product.js'
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
            <div className="home__content">
                {products.map((product) => (
                    <Product key={product._id} product={product} />
                ))}
            </div>



        </div>
    )
}

export default Home
