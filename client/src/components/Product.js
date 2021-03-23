import React from 'react'

const Product = ({ product }) => {

    return (
        <div className="product">
            <a href={`/product/${product._id}`}>
                <img src={product.image} alt={product.name} width="250px" />
            </a>

            <a href={`/product/${product._id}`}>
                <h3><strong>{product.name}</strong></h3>

                <div>
                    <h4>{product.numReviews} değerlendirme için {product.rating} </h4>
                </div>
            </a>
        </div>
    )
}

export default Product
