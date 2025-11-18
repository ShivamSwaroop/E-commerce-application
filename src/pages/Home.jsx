import React, { Suspense } from "react";
import ProductList from "../pages/ProductList";

export default function Home() {
  return (
    <div>
      <h1>Welcome to ShoppyGlobe</h1>
      <p>a learning project</p>

      <Suspense fallback={<div>Loading products...</div>}>
        <ProductList />
      </Suspense>
    </div>
  );
}