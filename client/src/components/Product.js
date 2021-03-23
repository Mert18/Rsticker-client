import React from 'react'

import Rating from './Rating';

const Product = ({ product }) => {

    return (
        <div className="product">
            <a href={`/product/${product._id}`}>
                <img src={product.image} alt={product.name} width="250px" />
            </a>

            <a href={`/product/${product._id}`}>
                <h3><strong>{product.name}</strong></h3>

                <div>
                    <Rating value={product.rating} text={`${product.numReviews} değerlendirme`} />
                </div>
            </a>
        </div>
    )
}

export default Product
