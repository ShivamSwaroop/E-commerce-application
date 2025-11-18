import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import "../styles/Cart.css";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const items = useSelector((s) => s.cart.items);
  const total = items.reduce((a, b) => a + b.price * b.qty, 0);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <Link to="/">Continue shopping</Link>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {items.map((it) => <CartItem key={it.id} item={it} />)}
          </div>
          <div className="summary">
            <div>Total: <strong>₹{total}</strong></div>
            <div>
              <button onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}