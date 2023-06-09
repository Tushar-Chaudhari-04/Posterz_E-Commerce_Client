import React, { useState } from "react";
import "./Navbar.scss";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import Cart from "../cart/Cart";
const Navbar = () => {
  const navigate=useNavigate();
  const [openCart,setOpenCart]=useState(false);

  return (
    <>
    <nav className="navbar">
      <div className="container nav-container">
        <div className="nav-left">
          <ul className="link-group">
            <li className="hover-link">
              <Link className="link" to="/products?category=comics">
                Comics
              </Link>
            </li>
            <li className="hover-link">
              <Link className="link" to="/products?category=tvshows">
                TVShows
              </Link>
            </li>
            <li className="hover-link">
              <Link className="link" to="/products?category=sports">
                Sports
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-center">
          <Link to="/">
            <h2 className="banner hover-link">Posterz .</h2>
          </Link>
        </div>
        <div className="nav-right">
          <div className="nav-cart" onClick={()=>{setOpenCart(!openCart)}}>
            <BsFillCartFill className="icon" />
            <span className="cart-count center">10</span>
          </div>
        </div>
      </div>
    </nav>
    {openCart && <Cart onClose={()=>{setOpenCart(false)}}/> }
    </>
  );
};

export default Navbar;
