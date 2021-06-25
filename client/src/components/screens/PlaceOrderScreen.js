import React,{useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import CheckoutSteps from '../CheckoutSteps';
import {createOrder} from '../../actions/orderActions.js';

const PlaceOrderScreen = ({history}) => {

    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)
  
    if (!cart.shippingAddress.address) {
      history.push('/shipping')
    }

    const orderCreate = useSelector((state) => state.orderCreate)

    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2)
    }

    const { order, success, error } = orderCreate

    
  
    cart.itemsPrice = addDecimals(
      cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    )
    cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100)
    cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)))
    cart.totalPrice = (
      Number(cart.itemsPrice) +
      Number(cart.shippingPrice) +
      Number(cart.taxPrice)
    ).toFixed(2)
  
    
  
    useEffect(() => {
      if (success) {
        history.push(`/order/${order._id}`)
        dispatch({ type: USER_DETAILS_RESET })
        dispatch({ type: ORDER_CREATE_RESET })
      }
      // eslint-disable-next-line
    }, [history, success])
  
    const placeOrderHandler = () => {
      dispatch(
        createOrder({
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
          paymentMethod: cart.paymentMethod,
          itemsPrice: cart.itemsPrice,
          shippingPrice: cart.shippingPrice,
          taxPrice: cart.taxPrice,
          totalPrice: cart.totalPrice,
        })
      )
    }
    return (
        <div>
            <CheckoutSteps step1 step2 step3/>

            {/* PLACE ORDER SCREEN HERE. */}
            {/* cart.shippingAddress.address 'city' 'postal code */}
            {/* cart.cartItems.map */}

            {error && <div>An Error Occured : {error}</div>}
            hello place orderd
            {/* Button to run handling. */}
            <button onClick={placeOrderHandler}>hello</button>

            {/* CONSOLE LOGLAR ILE COZERSIN BURADAKI SORUNU
            HADI ASLANIM BENIM. YAPARSIN. */}
        </div>
    )
}

export default PlaceOrderScreen
