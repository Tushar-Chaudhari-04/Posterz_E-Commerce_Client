import React from "react";
import "./Cart.scss";
import { ImCross } from "react-icons/im";

const Cart = ({ onClose }) => {
  return (
    <div className="cart">
      <div className="cart-overlay" onClick={onClose}>
        <div className="cart-content">
          <div className="btn-primary " onClick={onClose}>
            <div className="cart-close">
              Close
              {/* <span>
                <ImCross />
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
