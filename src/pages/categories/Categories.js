import React, { useEffect, useState } from "react";
import "./Categories.scss";
import Product from "../../components/product/Product";
import { useNavigate, useParams } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  const params = useParams();

  const categoryList = [
    {
      id: "comics",
      value: "Comics",
    },
    {
      id: "sports",
      value: "Sports",
    },
    {
      id: "tvshows",
      value: "TV Shows",
    },
  ];

  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    setCategoryId(params.categoryId);
    console.log("categoryId", categoryId);
  }, [params, categoryId]);

  const updateCategory = (e) => {
    navigate(`/category/${e.target.value}`);
    console.log("name", e.target.name, "value", e.target.id);
  };

  return (
    <div className="categories">
      <div className="container">
        <div className="header">
          <div className="info">
            <h2>Explore All Print and Artwork</h2>
            <p>
              India's largest collection of wall posters for your bedroom,
              living room, kids room, kitchen and posters & art prints at
              highest quality lowest price guaranteed.
            </p>
          </div>
          <div className="sort-header">
            <div className="sort-container">
              <div className="sort-head-text">Sort By</div>
              <select className="sort-by-select" name="sort-by" id="sort-by">
                <option value="relevance">Relevance</option>
                <option value="newest-first">Newest First</option>
                <option value="price">Price Low To High</option>
              </select>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="filter-box">
            <div className="category-fliter">
              <h3>Category</h3>
              {categoryList.map((item) => (
                <div className="filter-radio" key={item.id}>
                  <input
                    type="radio"
                    name="category"
                    onChange={updateCategory}
                    key={item.id}
                    id={item.id}
                    value={item.id}
                    checked={item.id===categoryId}
                  />
                  <label className="radio-label" htmlFor={item.id}>
                    {item.value}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="products-box">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
