import React, { useMemo } from "react";
import useProducts from "../hooks/useProducts";
import ProductItem from "../components/ProductItem";
import "../styles/ProductList.css";
import { useSelector, useDispatch } from "react-redux";
import { setQuery } from "../redux/searchSlice";

export default function ProductList() {
  const { products, loading, error } = useProducts();
  const query = useSelector((s) => s.search.query);
  const dispatch = useDispatch();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;

    return products.filter((p) =>
      p.title?.toLowerCase().includes(q) ||
      p.description?.toLowerCase().includes(q) ||
      p.category?.name?.toLowerCase().includes(q)
    );
  }, [products, query]);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="productlist">
      <div className="searchbar">
        <input
          value={query}
          placeholder="Search products..."
          onChange={(e) => dispatch(setQuery(e.target.value))}
        />
      </div>

      <div className="grid">
        {filtered.map((p) => (
          <ProductItem key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
