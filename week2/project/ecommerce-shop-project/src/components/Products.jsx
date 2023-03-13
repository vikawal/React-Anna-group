import React from "react";
import "./products.css";
import Product from "./Product.jsx";


function Products({ products, selectedCategory }) {
  const filteredProducts = selectedCategory
  ? products.filter((product) => product.category === selectedCategory)
  : products;
  return (
    <div className="products">
      {filteredProducts.map((product) => (
        <Product product={product} key={product.id}
        />
      ))}
    </div>
  );
}

export default Products;
