import React, { useContext } from "react";
import { ProductContext } from "./ProductsProvider";
import axios from "axios";
import { Button, Card } from "antd";
import styles from "./Products.module.css";

export default function Products() {
  const { products, setProducts } = useContext(ProductContext);

  const getProducts = () => {
    axios
      .get("http://localhost:8080/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("Error"));
  };
  return (
    <div className={styles.productsContainer}>
      <Button type="primary" onClick={() => getProducts()}>
        Get Products
      </Button>
      <div className={styles.productsContainer}>
        {products.map((product) => {
          return (
            <div>
              {" "}
              <Card
                title={product.title}
                style={{
                  width: 300,
                  boxShadow: "2px 2px 4px rgba(0,0,0,0.7)",
                  margin: ".5rem",
                }}
              >
                <div> {product.category}</div>
                <div> {product.price}</div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
