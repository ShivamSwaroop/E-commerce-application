import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/Header.css";

export default function Header() {
  const cartCount = useSelector((s) => s.cart.items.reduce((a, b) => a + b.qty, 0));
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="brand" onClick={() => navigate("/")}>ShoppyGlobe</div>
      <nav className="navlinks">
        <NavLink to="/" end className={({isActive})=>isActive?"active":""}>Home</NavLink>
        <NavLink to="/cart" className={({isActive})=>isActive?"active":""}>Cart</NavLink>
        <NavLink to="/checkout" className={({isActive})=>isActive?"active":""}>Checkout</NavLink>
      </nav>
      <div className="cart-icon" onClick={() => navigate("/cart")}>
        🛒 <span className="count">{cartCount}</span>
      </div>
    </header>
  );
}