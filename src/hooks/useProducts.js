import { useEffect, useState } from "react";

export default function useProducts() {
  const [data, setData] = useState({ products: [], loading: true, error: null });

  useEffect(() => {
    let cancelled = false;
    async function fetchProducts() {
      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const json = await res.json();
        if (!cancelled) setData({ products: json.products || [], loading: false, error: null });
      } catch (err) {
        if (!cancelled) setData({ products: [], loading: false, error: err.message || "Error" });
      }
    }
    fetchProducts();
    return () => (cancelled = true);
  }, []);

  return data;
}