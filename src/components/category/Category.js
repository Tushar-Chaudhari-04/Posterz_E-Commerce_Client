import React, { useEffect } from "react";
import "./Category.scss";
import { Link, useNavigate } from "react-router-dom";

const Category = ({ props }) => {
  const navigate=useNavigate();
  useEffect(() => {
    console.log("data", props);
  }, []);


  return (
    <div
      className="category"
      style={{
        backgroundImage: `url(${props?.attributes?.image.data.attributes.url})`,
      }}
      onClick={()=>navigate(`/category/${props?.attributes?.key}`)}
      >
     
      <h2 className="category-head center">{props?.attributes?.title}</h2>
    </div>
  );
};

export default Category;
