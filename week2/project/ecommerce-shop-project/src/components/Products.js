import React from "react";
import "./products.css";
import Product from "./Product.js";

function Products({ filteredProducts }) {
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
