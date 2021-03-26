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
        <div className="singleproduct">
            <div className="singleproduct__back">
                <Link to="/">Geri Dön</Link>
            </div>

            <div className="singleproduct__image">
                <img src={product.image} alt={product.name} width="350px" />
            </div>

            <div className="singleproduct__text">
                <div className="singleproduct__text__name">
                    <h2>{product.name}</h2>
                </div>
                <div className="singleproduct__text__rating">
                    <Rating value={product.rating} text={`${product.numReviews} Reviews`} />
                </div>
                <div className="singleproduct__text__sub">
                    <h2>2 TL / ADET</h2>
                    <h2>Category: {product.category}</h2>
                    <h2>Stok Adedi: {product.countInStock}</h2>
                </div>

                {product.countInStock > 0 && (
                    <div className="singleproduct__text__stock">
                        <h3>Adet</h3>
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
                <div className="singleproduct__text__btn">
                    <button onClick={addToCartHandler}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen
