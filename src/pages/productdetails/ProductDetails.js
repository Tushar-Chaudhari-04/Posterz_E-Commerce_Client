import React, { useEffect, useState } from "react";
import "./ProductDetails.scss";
//import WallPosterImg from "../../assets/wp3.jpg";
import NarutoImg from "../../assets/Naruto1.webp";
import { axiosClient } from "../../axiosClient";
import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { addToCart, removeFromCart } from "../../redux/slice/cartSlice/CartSlice";

const ProductDetails = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  var [count, setCount] = useState(0);
  const [productData,setProductData]=useState(null);
  const params=useParams();
  const dispatch=useDispatch();
  const cartData=useSelector(state=>state.cartReducer.cart);
  const quantity=cartData.find(item=>(
    item.id==params.productId
  ))?.quantity || 0;

  const fetchData=async()=>{
    const productResponse=await axiosClient.get(`/products?filters[id][$eq]=${params.productId}&populate=image`);
    console.log("productResponse",productResponse.data.data[0])
    if(productResponse){
      setProductData(productResponse.data.data[0]);
    }
  }

  useEffect(() => {
      fetchData();
      
      window.addEventListener("scroll", () => {
        console.log("scroll",window.scrollY);
          if (window.scrollY > 440) {
              setShowTopBtn(true);
              window.scrollTo({
                scrollY: "0",
                behavior: "smooth",
            });
          } else {
              setShowTopBtn(false);
          }
      });
  }, []);


  return (
     (
    <div className="product-details">
      <div className="image-container">
        <div className="product-image">
            <img src={productData?.attributes?.image?.data?.attributes?.url} alt={productData?.attributes?.title}/>
        </div>
      </div>
      <div className="product-info">
        <h1>{productData?.attributes?.title}</h1>
        <h3>₹ {productData?.attributes?.price}</h3>
        <p>
        {productData?.attributes?.desc}
          </p>
        <div className="counter">
          <button
            className="counterBtn"
            name="dec"
            value="dec"
            onClick={()=>{dispatch(removeFromCart(productData))}}
            disabled={quantity<1 || quantity==null?true:false}
          >
            -
          </button>
          <span className="count">{quantity}</span>
          <button
            className="counterBtn"
            name="inc"
            value="inc"
            onClick={()=>{dispatch(addToCart(productData))}}
          >
            +
          </button>
        </div>
        <div className="addBtn">
        <button className="addtocart" onClick={""}>BUY NOW</button>
        <button className="addtocart" onClick={""}>ADD TO CART</button>
        </div>
          
      </div>
    </div>
      )  
  );
}
export default ProductDetails;

/*
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

*/