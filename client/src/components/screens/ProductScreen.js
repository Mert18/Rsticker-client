import React from 'react';
import Layout from '../../core/Layout';
import {Link} from 'react-router-dom';

import products from '../../products';

const ProductScreen = ({match}) => {
    const product = products.find(p => p._id === match.params.id);

    return (
        <Layout>
            <div className="productsc">
                <div className="productsc__head">
                    <div className="productsc__head__goback">
                        <Link to="/"><i class="fas fa-arrow-left"></i>Go Back</Link>
                    </div>
                </div>
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
