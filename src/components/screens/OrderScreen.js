import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails } from "../../actions/orderActions.js";
import Layout from "../../core/Layout.js";

const OrderScreen = ({ match }) => {
  const dispatch = useDispatch();
  const orderId = match.params.id;

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, success, error } = orderDetails;

  useEffect(() => {
    if (!order || order._id !== orderId) {
      dispatch(getOrderDetails(orderId));
    }
  }, [order, orderId]);

  return (
    <Layout>
      <div className="orderscreen">
        <h3>
          <i className="fas fa-check-circle"></i>Your order has been accepted.
        </h3>
        <div className="track">
          <a href="/">
            <i className="fas fa-info"></i>Order Details
          </a>
          <a href="/">
            <i className="fas fa-truck-moving"></i>Parcel Tracking
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default OrderScreen;
