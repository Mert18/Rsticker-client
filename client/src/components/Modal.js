import React, { useRef } from "react";
import ReactDom from "react-dom";

const Modal = ({ setShowModal, children }) => {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  return ReactDom.createPortal(
    <div className="modalContainer" ref={modalRef}>
      <div className="modal">
        {children}
        <button onClick={() => setShowModal(false)}>X</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
