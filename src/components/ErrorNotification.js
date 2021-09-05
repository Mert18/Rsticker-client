import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ErrorNotification = () => {
  const isOpen = useSelector((state) => state.errorMy.isOpen);
  const error = useSelector((state) => state.errorMy.error);

  const dispatch = useDispatch();
  console.log(error);

  const handleClose = () => {
    dispatch({ type: HIDE_ERROR });
  };

  return (
    <>
      {isOpen && error && (
        <div className="errorwrapper">
          <button onClick={handleClose}>Kapat</button>
          <span>{error}</span>
        </div>
      )}
    </>
  );
};

export default ErrorNotification;
