import React from "react";
import { Link } from "react-router-dom";
import "./product.css";

function Product({ product }) {
  return (
   <div key={product.id} className="product">
     <Link to={`/product/${product.id}`} >
       <img src={product.image} alt={product.title} />
       <div className="product-details">
         <div className="product-title">{product.title}</div>
         <div className="product-price">{product.price}</div>
       </div>
     </Link>
    </div>
  );
}

export default Product;
