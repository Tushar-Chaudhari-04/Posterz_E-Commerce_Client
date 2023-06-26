import React, { useState } from "react";
import "./CartItem.scss";
import Africantree from "../../assets/Naruto1.webp";
import {RxCross2} from "react-icons/rx"
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, removeItem } from "../../redux/slice/cartSlice/CartSlice";

const CartItem = (data) => {
  const dispatch=useDispatch();
  console.log("data",data.data)
  const cartAllData=useSelector(state=>state.cartReducer.cart);
  console.log("cartAllData",cartAllData);
  const cartData=cartAllData.find(item=>item.id==data.data.id);
  const quantity=cartAllData.find(item=>item.id==data.data.id)?.quantity|| 0;
  console.log("cartData 123321",cartAllData,cartData,quantity);

  return (
    <div className="cart-item">
      <div className="item-desc">
        <h3>{data.data.title}</h3>
        <img src={data.data.image} alt="item-img" />
      </div>
      {/* <div className="single-item-price">
        {data.data.price}
      </div> */}
      <div className="item-qty">
        <div className="counter">
          <button
            className="counterBtn"
            name="dec"
            value="dec"
            onClick={()=>{dispatch(removeFromCart(cartData))}}
            disabled={quantity===1?true:false}
          >
            -
          </button>
          <span className="count">{quantity}</span>
          <button
            className="counterBtn"
            name="inc"
            value="inc"
            onClick={()=>{dispatch(addToCart(cartData))}}
          >
            +
          </button>
        </div>
      </div>
      <div className="item-price">₹ {data.data.price*quantity}</div>
      <RxCross2 className="item-cancel" onClick={()=>{dispatch(removeItem(cartData))}}/>
    </div>
  );
};

export default CartItem;

/*
  // const handleDecCount = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // };

  // const handleIncCount = () => {
  //   setCount(count + 1);
  // };
  ----------------------------------------------------------------
*/