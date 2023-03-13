import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import "./product.css";

function ProductDetail () {
  const {id} = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch (`https://fakestoreapi.com/products/${id}`)
    .then((response) => response.json())
    .then((data) => {
      setProduct(data);
      setLoading(false);
    })
    .catch((error) => {
    console.log(error);
    setLoading(false);
    setError("Failed to load product details. Please, try again later");
    });
  }, [id]);

  console.log(id);

  return (
    <div className="productDetail">
        {loading && <p className="loading">Loading</p>}
        {error && <p className="error">{error}</p>}
        {!loading && !error && (
          <div className="product">
            <img src={product.image} alt={product.title} />
            <div className="product-details">
              <div className="product-title">{product.title}</div>
              <div className="product-price">{product.price}</div>
              <div className="product-description">{product.description}</div>
              <div className="product-category">{product.category}</div>
              <div className="product-rating">
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

export default ProductDetail