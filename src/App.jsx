import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import "./styles/App.css";

const Home = lazy(() => import("./pages/Home"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const NotFound = lazy(() => import("./pages/NotFound"));



function RootLayout() {
  return (
    <>
      <Header />
      <main style={{ padding: 16 }}>
        <Suspense fallback={<div>Loading page...</div>}>
        </Suspense>
      </main>
    </>
  );
}

// creating routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Suspense fallback={<div>Loading home...</div>}>
          <Home />
        </Suspense>
      </>
    ),
  },
  {
    path: "/product/:id",
    element: (
      <>
        <Header />
        <Suspense fallback={<div>Loading product...</div>}>
          <ProductDetail />
        </Suspense>
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <Header />
        <Suspense fallback={<div>Loading cart...</div>}>
          <Cart />
        </Suspense>
      </>
    ),
  },
  {
    path: "/checkout",
    element: (
      <>
        <Header />
        <Suspense fallback={<div>Loading checkout...</div>}>
          <Checkout />
        </Suspense>
      </>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<div>Loading... </div>}>
        <NotFound />
      </Suspense>
    ),
  },
]);

export default router;