import React, { useEffect, useState } from "react";
import "./Collection.scss";
import Product from "../../components/product/Product";
import { useNavigate, useParams } from "react-router-dom";
import { axiosClient } from "../../axiosClient";
import { useSelector } from "react-redux";

const Categories = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [categoryId, setCategoryId] = useState("");
  const [products, setProducts] = useState(null);
  const sortOption = [
    {
      key: "newest-first",
      value: "Newest First",
      sort: "createdAt",
    },
    {
      key: "price-asc",
      value: "Price - Low To High",
      sort: "price",
    },
  ];

  const [sortBy,setSortBy]=useState(sortOption[0].sort);
  const categories = useSelector((state) => state.categoryReducer.categories);



  const fetcSortData = async () => {
    navigate(`/category/${categoryId}`);

    const productFilterResponse = await axiosClient.get(
      `/products?filters[category][key][$eq]=${categoryId}&populate=category,image&sort=${sortBy}`
    );
    setProducts(null);
    setProducts(productFilterResponse.data.data);
    console.log("products123", products);
  };

  const updateCategory = async (e) => {
    navigate(`/category/${e.target.value}`);

    const productFilterResponse = await axiosClient.get(
      `/products?filters[category][key][$eq]=${e.target.value}&populate=category,image&sort=${sortBy}`
    );
    setProducts(null);
    setProducts(productFilterResponse.data.data);
    console.log("products123", products);
  };

  const updateCategoryOnNavigate = async () => {
    const productFilterResponse = await axiosClient.get(
      `/products?filters[category][key][$eq]=${params.categoryId}&populate=category,image&sort=${sortBy}`
    );
    setProducts(null);
    setProducts(productFilterResponse.data.data);
    console.log("products123", products);
  };

  const fetchData = async () => {
    const productResponse = await axiosClient.get(`/products?populate=image`);
    setProducts(null);
    setProducts(productResponse.data.data);
  };

  useEffect(() => {
    console.log("params", params);
    console.log("params.categoryId", params.categoryId);
    setCategoryId(params.categoryId);
    if (categoryId) {
      updateCategoryOnNavigate();
    } else if (!products) {
      if (categoryId == null) {
        fetchData();
      }
    }

    console.log("products", products);

    console.log("categoryId", categoryId);
  }, [params, categoryId]);

  const handleSortChange = (e) => {
    const sortData=sortOption.filter(item=>(
      item.key===e.target.value
    ));
    setSortBy(sortData[0].sort)
    fetcSortData();
    
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
              <select
                className="sort-by-select"
                name="sort-by"
                id="sort-by"
                onChange={handleSortChange}
              >
                {sortOption?.map((option) => (
                  <option value={option.key}>{option.value}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="filter-box">
            <div className="category-fliter">
              <h3>Category</h3>
              {categories?.map((item) => (
                <div className="filter-radio" key={item.id}>
                  <input
                    type="radio"
                    name="category"
                    onChange={updateCategory}
                    id={item.id}
                    value={item.attributes.key}
                    checked={item.attributes.key === categoryId}
                  />
                  <label className="radio-label" htmlFor={item.id}>
                    {item.attributes.title}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="products-box">
            {products?.map((item) => (
              <Product data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;

/*---------------------------------------------------------------------

//Radio Btn Code

const categoryList = [    
    {
      id: "anime",
      value: "Anime",

    },
    {
      id: "sports",
      value: "Sports",
    },
    {
      id: "motivation",
      value: "Motivation",
    },
  ];
------------------------------------------------------------------------------


*/
