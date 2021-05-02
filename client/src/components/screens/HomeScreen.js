import React from 'react';
import products from '../../products';
import Product from '../Product';

const HomeScreen = () => {

    return(
        <div className="home">
            <div className="home__products">
                {products.map(product => (
                    <Product product={product} />
                ))}
            </div>
            
        </div>
    )
}

export default HomeScreen;