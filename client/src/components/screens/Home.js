import React from 'react'

import Header from '../Header';
import products from '../products'
import Product from '../Product'

const Home = () => {
    return (
        <div className="home" >
            <div className="home__header">
                <Header />
            </div>

            <div className="home__content">
                {products.map((product) => (
                    <Product product={product} />
                ))}
            </div>



        </div>
    )
}

export default Home
