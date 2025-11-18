import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/Checkout.css";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const items = useSelector((s) => s.cart.items);
  const total = items.reduce((a, b) => a + b.price * b.qty, 0);
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [placed, setPlaced] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();
    // validation
    if (!form.name || !form.email || !form.address) {
      alert("Please fill all details");
      return;
    }
    
    setPlaced(true);
    dispatch(clearCart());
    setTimeout(() => navigate("/"), 1800); // redirect to home
  }

  if (items.length === 0 && !placed) return <div>Your cart is empty. Add items to checkout.</div>;

  return (
    <div className="checkout">
      {!placed ? (
        <>
          <h2>Checkout</h2>
          <form onSubmit={submit} className="cform">
            <label>Name</label>
            <input value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} />
            <label>Email</label>
            <input value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} />
            <label>Address</label>
            <textarea value={form.address} onChange={(e)=>setForm({...form, address: e.target.value})} />
            <div className="order-summary">
              <div>Items: {items.length}</div>
              <div>Total: ₹{total}</div>
            </div>
            <button type="submit">Place Order</button>
          </form>
        </>
      ) : (
        <div className="placed">
          <h3>Order placed</h3>
          <p>Thank you! Redirecting to Home...</p>
        </div>
      )}
    </div>
  );
}