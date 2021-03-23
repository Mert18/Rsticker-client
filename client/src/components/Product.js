import React from 'react'

const Product = ({ product }) => {

    return (
        <div className="m-4">
            <a href={`/product/${product._id}`}>
                <img src={product.image} alt="maskot tux" width="350px" />
            </a>
        </div>
    )
}

export default Product
