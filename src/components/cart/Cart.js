import React from "react";
import "./Cart.scss";
import { ImCross } from "react-icons/im";
import CartItem from "../cartItem/CartItem";
import { useSelector } from "react-redux";
import {BsCartXFill} from "react-icons/bs"
import { axiosClient } from "../../axiosClient";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

const Cart = ({ onClose }) => {
  const cartData=useSelector(state=>state.cartReducer.cart);
  var totalAmount=0;
  cartData.map(item=>(
    totalAmount+=item.quantity*item.price
  ));
  console.log("cartData Cart",cartData,totalAmount)
  
  const handleCheckout=async()=>{
    console.log("handleCheckout");
    const checkoutResponse=await axiosClient.post("/orders",{
      products:cartData
    })
    console.log("checkoutResponse",checkoutResponse);
    const stripe=await stripePromise;
    await stripe.redirectToCheckout({
      sessionId:checkoutResponse.data.stripeId
    })
  }

  return (
    <div className="cart">
      <div className="cart-overlay" >
        <div className="cart-content">
          <div className="cart-header">
            <h3>Shopping Cart</h3>
            <div className="close-btn" onClick={onClose}>
              <ImCross /> Close
            </div>
          </div>
          <div className="cart-items">
          {cartData.map(item=>(
            <CartItem data={item}/>
          ))}
          </div>
           {
            cartData.length>0?(
              <div className="cart-checkout">
            <div className="total-amount">
              <h4>Total Price:</h4>
              <h4>₹ {totalAmount}</h4>
            </div>
            <button className="checkout-btn btn-primary" onClick={handleCheckout}>CheckOut Now</button>
          </div>
            ):(
              <div className="empty-cart">
            <div className="empty-cart-icon"><BsCartXFill/></div>
            <div className="empty-cart-header"><h3>Your cart is empty!</h3></div>
            <div className="empty-cart-title">Add items to it now.</div>
          </div>  
            )
           } 
        </div>
      </div>
    </div>
  );
};

export default Cart;
