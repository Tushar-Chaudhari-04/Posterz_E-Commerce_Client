import React from "react";
import "./Product.scss";
import NarutoImg from "../../assets/Naruto1.webp";

const Product = () => {
  return (
    <div className="product">
      <div className="image-container">
        <div className="product-image">
            <img src={NarutoImg} alt="Naruto Img"/>
        </div>
      </div>
      <div className="product-info">
      <div className="product-title">
        Naruto Wall Posters,23*23 Solid Color
      </div>
      <div className="product-price">
          ₹499
      </div>
      </div>
    </div>
  );
};

export default Product;
