import React,{useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import {getOrderDetails} from '../../actions/orderActions.js';

const OrderScreen = ({match}) => {

    const dispatch = useDispatch()
    const orderId = match.params.id;
  
    const orderDetails = useSelector((state) => state.orderDetails)
    const { order, success, error } = orderDetails
  
    useEffect(() => {
        if(!order || order._id !== orderId) {
            dispatch(getOrderDefails(orderId))
        }
    }, [order, orderId]) 
  
  
    return (
        <div>
            some information about the order.
        </div>
    )
}

export default OrderScreen
