import React from 'react'

import Rating from './Rating';

import { NavLink } from "react-router-dom";


const Product = ({ product }) => {

    return (
        <div className="product">
            <NavLink to={`/product/${product._id}`}>
                <img src={product.image} alt={product.name} width="250px" />
            </NavLink>

            <NavLink to={`/product/${product._id}`}>
                <h3><strong>{product.name}</strong></h3>

                <div>
                    <Rating value={product.rating} text={`${product.numReviews} değerlendirme`} />
                </div>
            </NavLink>
        </div>
    )
}

export default Product
