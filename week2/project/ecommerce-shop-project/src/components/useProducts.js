import { useState, useEffect } from "react";

function useProducts (selectedCategory) {
  const [products, setProducts] = useState([]);
  const[loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    let url = "https://fakestoreapi.com/products";
    if (selectedCategory) {
      url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
    }
    fetch (url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading (false);
        setError("Failed to load products data. Please, try again later");
      });
}, [selectedCategory]);
  //  console.log (selectedCategory);

  return {products, loading, error};
}

export default useProducts;

