import React, {useEffect} from 'react';
import Layout from '../../core/Layout';
import {Link} from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';
import {listProductDetails} from '../../actions/productActions.js';

const ProductScreen = ({match}) => {
    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.productDetails);
    const {loading, error, product} = productDetails;

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
    }, [match, dispatch]);


    return (
        <Layout>
            <div className="productsc">
                <div className="productsc__head">
                    <div className="productsc__head__goback">
                        <Link to="/"><i className="fas fa-arrow-left"></i>Go Back</Link>
                    </div>
                </div>

                {loading ? 
                <p>Loading
                </p> :
                error ? 
                <p>{error}</p> : (
                    <div className="productsc__main">
                        <div className="productsc__main__desc">
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p>{product.dimensions}</p>
                            <button>ADD TO CART</button>
                        </div>
                        <div className="productsc__main__image">
                            <img src={product.image} alt={product.description} width="350px" />
                        </div>
                    </div>
                )}
                
                <div className="productsc__foot">
                    <div className="productsc__foot__title">
                        <h3>Every sticker have the following properties.</h3>
                        <ul>
                            <li>Every sticker's price is $0.50.</li>

                        </ul>
                    </div>
                </div>
            </div>        
        </Layout>
    )
}

export default ProductScreen
