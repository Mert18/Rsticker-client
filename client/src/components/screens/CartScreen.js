import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import Layout from '../../core/Layout'
import {addToCart, removeFromCart} from '../../actions/cartActions.js';

const CartScreen = ({match, location, history}) => {
    const productId = match.params.id;
    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)
    const {cartItems} = cart;
    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }
    const checkoutHandler = () => {
        history.push("/login?redirect=shipping")
    }
    return (
        <Layout>
            <div className="cartScreen">
                <div>
                    <h1>Shopping Cart</h1>
                    {cartItems.length === 0 ?
                    (
                    <div>
                        <h2>Your cart is empty.</h2>
                        <Link to="/">Go Back</Link>
                    </div>) :
                    (
                    <div>
                        {cartItems.map(item => (
                            <li key={item.product}>
                                <div>
                                    <img src={item.image} alt={item.name} width="512px" />
                                </div>
                                <div>
                                    <Link to={`/product/${item.product}`}>
                                        {item.name}
                                    </Link>
                                </div>
                                <div>
                                    <h2>${item.price}</h2>
                                </div>
                                <div>
                                    <input type="number" value={item.qty} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))} />
                                </div>
                                <div>
                                    <button type="button" onClick={() => {
                                        removeFromCartHandler(item.product)
                                    }}>

                                    </button>
                                </div>
                            </li>
                        ))}
                    </div>
                    )
                    }
                </div>
                <div>
                    <div>
                        <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0 )} Items</h2>
                    </div>

                    <div>
                        ${cartItems.reduce((acc, item) => acc + item.qty * 0.5, 0)}
                    </div>

                    <div>
                        <button type="button" disabled={cartItems.length === 0} onClick={checkoutHandler}>
                            Proceed To Checkout
                        </button>
                    </div>
                    
                </div>
            </div>
        </Layout>
    )
}

export default CartScreen
