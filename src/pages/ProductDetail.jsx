import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/ProductDetail.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductDetail() {
  const { id } = useParams();
  const [state, setState] = useState({
    product: null,
    loading: true,
    error: null,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    let abort = false;

    async function load() {
      try {
        const res = await fetch(
          `https://api.escuelajs.co/api/v1/products/${id}`
        );

        if (!res.ok) throw new Error("Failed to fetch product");

        const data = await res.json();

        if (!abort)
          setState({
            product: data,
            loading: false,
            error: null,
          });
      } catch (err) {
        if (!abort)
          setState({
            product: null,
            loading: false,
            error: err.message,
          });
      }
    }

    load();

    return () => (abort = true);
  }, [id]);

  if (state.loading) return <div>Loading product...</div>;
  if (state.error) return <div>Error: {state.error}</div>;

  const p = state.product;

  return (
    <div className="detail">
      <img
        src={p.images?.[0] || ""}
        alt={p.title}
        loading="lazy"
      />

      <div className="info">
        <h2>{p.title}</h2>
        <p className="muted">{p.category?.name}</p>
        <p className="price">₹{p.price}</p>
        <p>{p.description}</p>

        <div className="controls">
          <button
            onClick={() =>
              dispatch(
                addToCart({
                  id: p.id,
                  title: p.title,
                  price: p.price,
                  thumbnail: p.images?.[0] || "",
                })
              )
            }
          >
            Add to Cart
          </button>

          <Link to="/cart">Go to Cart</Link>
        </div>
      </div>
    </div>
  );
}