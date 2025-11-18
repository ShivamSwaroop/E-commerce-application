import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductItem.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.images?.[0] || "",
      })
    );
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.images?.[0] || ""}
          alt={product.title}
          loading="lazy"
        />
      </Link>

      <div className="p-body">
        <h4>{product.title}</h4>
        <p className="muted">{product.category?.name}</p>
        <div className="price">₹{product.price}</div>

        <div className="actions">
          <button onClick={handleAdd}>Add to Cart</button>
          <Link className="details" to={`/product/${product.id}`}>
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}