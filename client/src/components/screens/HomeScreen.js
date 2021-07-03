import React, {useEffect} from 'react';
import Product from '../Product';
import { listProducts } from '../../actions/productActions.js';
import {useDispatch, useSelector} from 'react-redux';

const HomeScreen = () => {
    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);
    const {loading, error, products} = productList;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch]);
    
    return(
        <div className="home">
            {loading ?
            <h2>Loading</h2>
             : /* error ? 
             <h3>{error}</h3>
              :  */
            
            <>
                <div className='hero'>
                    <div className='hero__hero'>
                        <h1>Welcome to commerce.com</h1>
                    </div>
                    <div className='hero__text'>
                        <p>Every sticker costs x.</p>
                        <p>Ship to x country only.</p>
                    </div>
                </div>
                <div className='products'>
                    {products.map(product => (
                        <Product key={product._id} product={product} />
                    ))}
                </div>
                
            </>}
            
            
        </div>
    )
}

export default HomeScreen;