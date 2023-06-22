import React, { useState } from "react";
import "./Navbar.scss";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";
const Navbar = () => {
  const navigate = useNavigate();
  const [openCart, setOpenCart] = useState(false);
  const categories = useSelector((state) => state.categoryReducer.categories);
  const cartData = useSelector((state) => state.cartReducer.cart);
  let totalItems = 0;
  cartData.forEach((item) => {
    totalItems += item.quantity;
  });

  return (
    <>
      <nav className="navbar">
        <div className="container nav-container">
          <div className="nav-left">
            <ul className="link-group">
              {categories.map((category) => (
                <li className="hover-link" key={category.id}>
                  <Link
                    className="link"
                    to={`/category/${category.attributes.key}`}
                  >
                    {category.attributes.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav-center">
            <Link to="/">
              <h2 className="banner hover-link">Posterz .</h2>
            </Link>
          </div>
          <div className="nav-right">
            <div
              className="nav-cart"
              onClick={() => {
                setOpenCart(!openCart);
              }}
            >
              <BsFillCartFill className="icon" />
              {totalItems > 0 && (
                <span className="cart-count center">{totalItems}</span>
              )}
            </div>
          </div>
        </div>
      </nav>
      {openCart && (
        <Cart
          onClose={() => {
            setOpenCart(false);
          }}
        />
      )}
    </>
  );
};
//
export default Navbar;
