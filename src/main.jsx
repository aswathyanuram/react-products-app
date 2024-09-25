import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ProductsProvider } from "./components/ProductsProvider.jsx";
import Products from "./components/Products.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductsProvider>
      <Products />
    </ProductsProvider>
  </StrictMode>
);
