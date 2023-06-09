import React, { useState } from "react";
import "./ProductDetails.scss";
import WallPosterImg from "../../assets/wp3.jpg";

const ProductDetails = () => {
  var [count, setCount] = useState(0);
  const handleDecCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleIncCount = () => {
    setCount(count + 1);
  };

  const handleSubmit=()=>{
    console.log("Hi")
  }

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={WallPosterImg} alt="WallPoster Img" className="productImg" />
      </div>
      <div className="product-info">
        <h1>Art Picture Black And White Canvas Prints Wall Art</h1>
        <h3>₹ 599</h3>
        <p>
          I get really excited about creative collaborations, especially when it
          involves two favourites like Kate & Kate and Superette . No strange...
          / image source // The final count down until our move in is ON! If all
          goes according to plan, we will be moving next weekend!!!
          </p>
        <div className="counter">
          <button
            className="counterBtn"
            name="dec"
            value="dec"
            onClick={handleDecCount}
          >
            -
          </button>
          <span className="count">{count}</span>
          <button
            className="counterBtn"
            name="inc"
            value="inc"
            onClick={handleIncCount}
          >
            +
          </button>
        </div>
        <div className="addBtn">
        <button className="addtocart" onClick={handleSubmit}>BUY NOW</button>
        <button className="addtocart" onClick={handleSubmit}>ADD TO CART</button>
        </div>
          
      </div>
    </div>
  );
};

export default ProductDetails;
