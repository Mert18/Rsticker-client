import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Rating from '../Rating';
import { listProductDetails } from '../../actions/productActions.js'

const ProductScreen = ({ history, match }) => {
    const [qty, setQty] = useState(1)
    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.productDetails);
    const { loading, error, product } = productDetails
    useEffect(() => {

        dispatch(listProductDetails(match.params.id))
    }, [dispatch, match]);

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

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
                {product.countInStock > 0 && (
                    <div>
                        <select type="select" value={qty} onChange={(e) => setQty(e.target.value)}>
                            {
                                [...Array(product.countInStock).keys()].map((x) => (
                                    <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                    </option>
                                ))}
                        </select>

                    </div>
                )}
                <button
                    onClick={addToCartHandler}
                >Add to cart</button>
            </div>
        </div>
    )
}

export default ProductScreen
