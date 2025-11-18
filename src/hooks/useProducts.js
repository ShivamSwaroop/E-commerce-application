import { useEffect, useState } from "react";

export default function useProducts() {
  const [state, setState] = useState({
    products: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    let abort = false;

    async function load() {
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/products");

        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();

        if (!abort)
          setState({
            products: data,
            loading: false,
            error: null,
          });
      } catch (err) {
        if (!abort)
          setState({
            products: [],
            loading: false,
            error: err.message,
          });
      }
    }

    load();

    return () => {
      abort = true;
    };
  }, []);

  return state;
}
