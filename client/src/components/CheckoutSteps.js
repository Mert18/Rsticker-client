import React from "react";
import { Link } from "react-router-dom";
const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <>
      <div className="step">
        {step1 ? (
          <div>
            <Link className="active" to="/login">
              Sign In
            </Link>
          </div>
        ) : (
          <div>
            <Link className="disabled" to="/login">
              Sign In
            </Link>
          </div>
        )}
      </div>
      <div className="step">
        {step2 ? (
          <div>
            <Link className="active" to="/shipping">
              Shipping
            </Link>
          </div>
        ) : (
          <div>
            <Link className="disabled" to="/shipping">
              Shipping
            </Link>
          </div>
        )}
      </div>
      <div className="step">
        {step3 ? (
          <div>
            <Link className="active" to="/placeorder">
              Place Order
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/placeholder" className="disabled">
              Place Order
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CheckoutSteps;
