
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import "./product.css";
import ProductAllInfo from "./ProductInfoAll"

function ProductDetail () {
  const {id} = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch (`https://dummyjson.com/products/${id}`)
    .then((response) => response.json())
    .then((data) => {
      setProduct(data);
      setLoading(false);
    })
    .catch((error) => {
    console.log(error);
    setLoading(false);
    let errorCode = "";
          if (error.response && error.response.status) {
            errorCode = error.response.status;
          } else if (error.request) {
            errorCode = "NETWORK_ERROR";
          } else {
            errorCode = "UNKNOWN_ERROR";
          }
          switch (errorCode) {
            case 404:
              setError("Product data not found.");
              break;
            case "NETWORK_ERROR":
              setError("Network error. Please check your internet connection and try again.");
              break;
            case "UNKNOWN_ERROR":
              setError("Unknown error occurred. Please try again later.");
              break;
            default:
              setError("Failed to load product data. Please, try again later");
          }   
    });
  }, [id]);

  console.log(id);

  return (
    <div className="productDetail">
        {loading && <p className="loading">Loading</p>}
        {error && <p className="error">{error}</p>}
        {!loading && !error && <ProductAllInfo product={product} />}       
    </div>
  );
}

export default ProductDetail