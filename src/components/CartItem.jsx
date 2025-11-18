import React from "react";
import "../styles/CartItem.css";
import { useDispatch } from "react-redux";
import { removeFromCart, changeQty } from "../redux/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const dec = () => dispatch(changeQty({ id: item.id, qty: Math.max(1, item.qty - 1) }));
  const inc = () => dispatch(changeQty({ id: item.id, qty: item.qty + 1 }));

  return (
    <div className="cartitem">
      <img src={item.thumbnail} alt={item.title} loading="lazy" />
      <div className="ci-body">
        <h4>{item.title}</h4>
        <div className="ci-controls">
          <button onClick={dec}>-</button>
          <span>{item.qty}</span>
          <button onClick={inc}>+</button>
          <button className="remove" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      </div>
      <div className="ci-price">₹{item.price * item.qty}</div>
    </div>
  );
}