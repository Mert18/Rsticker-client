import React from 'react'

import { Link } from 'react-router-dom';
import Rating from '../Rating';
import products from '../../products';

const ProductScreen = ({ match }) => {
    const product = products.find(p => p._id === match.params.id);
    return (
        <div>
            <div>
                <Link to="/">Geri Dön</Link>
            </div>

            <div>
                <img src={product.image} alt={product.name} />
            </div>

            <div>
                <h2>{product.name}</h2>
                <Rating value={product.rating} text={`${product.numReviews} Reviews`} />
                <h2>2 TL / ADET</h2>
                <h2>Category: {product.category}</h2>
                <h2>Stok Adedi: {product.countInStock}</h2>
            </div>
        </div>
    )
}

export default ProductScreen
