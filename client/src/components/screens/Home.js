import React from 'react'

import Header from '../Header';
import Footer from '../Footer';
import products from '../products'
import Product from '../Product'

const Home = () => {
    return (
        <div className="" >
            <div className="">
                <Header />
                <div className="flex flex-wrap m-4">
                    {products.map((product) => (
                        <Product product={product} />
                    ))}
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Home
