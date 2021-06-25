import React from 'react'
import {Link} from 'react-router-dom';

const Product = ({product}) => {

    return (
        <div className="product">
            <Link to={`/product/${product._id}`}>
                <div className="product__image">
                    <img src={product.image} alt={product.description} width="200px" />
                </div>
                <div className="product__name">
                    <p>{product.name}</p>
                </div>
            </Link>
        </div>
    )
}

export default Product
