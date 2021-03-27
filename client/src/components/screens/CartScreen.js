import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../actions/cartActions.js';

const CartScreen = ({ match, location, history }) => {
    const productId = match.params.id;

    const qty = location.search ? Number(location.search.split('=')[1]) : 1;

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart;

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty]);

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    }
    const checkoutHandler = () => {
        history.push('/login?redirect=shipping');
    }
    return (
        <div className="cart">
            <div className="cart__title">
                <h1>Sepet</h1>
            </div>

            {cartItems.length === 0 ?
                <div className="cart__empty">
                    <h1 className="cart__empty__text">Your cart is empty</h1>
                    <NavLink to="/">Geri Dön</NavLink>
                </div>
                :
                (
                    <div className="cart__items">
                        {cartItems.map(item => (
                            <li key={item.product} className="cart__items__item">

                                <div className="cart__items__item__first">
                                    <h2>{item.name}</h2>
                                    <img src={item.image} alt={item.name} width="200px" />
                                </div>

                                <div className="cart__items__item__second">
                                    <p>{item.price}TL</p>
                                </div>

                                <div className="cart__items__item__third">
                                    <select type="select" value={item.qty} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                                        {
                                            [...Array(item.countInStock).keys()].map((x) => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))}
                                    </select>
                                </div>

                                <div className="cart__items__item__fourth">
                                    <button onClick={() => removeFromCartHandler(item.product)} >Kaldır</button>
                                </div>
                            </li>
                        ))}

                        <div className="cart__items__price">
                            <h2>Subtotal (
                                {cartItems.reduce((acc, item) => acc + item.qty, 0)})</h2>
                            {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}TL
                            <button onClick={checkoutHandler}> Satın Al</button>
                        </div>

                    </div>
                )}
        </div>
    )
}

export default CartScreen