import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/NotFound.css";

export default function NotFound() {
  const loc = useLocation();
  return (
    <div className="notfound">
      <h2>404 — Page Not Found</h2>
      <p>The route <code>{loc.pathname}</code> does not exist.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}