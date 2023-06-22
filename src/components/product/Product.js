import React, { useEffect, useState } from "react";
import "./Product.scss";
import NarutoImg from "../../assets/Naruto1.webp";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

const Product = (data) => {
  const navigate=useNavigate();
useEffect(() => {
  console.log("product",data)
}, [])

  return (
     (
    <div className="product" onClick={()=>{navigate(`/products/${data?.data?.id}`)}}>
    
      <div className="image-container">
        <div className="product-image">
            <img src={data?.data?.attributes?.image?.data?.attributes?.url} alt="Naruto Img"/>
        </div>
      </div>
      <div className="product-info">
      <div className="product-title">
      {data?.data?.attributes?.title}
      </div>
      <div className="product-price">
          ₹{data?.data?.attributes?.price}
      </div>
      </div>
    </div>
  ))
};

export default Product;
