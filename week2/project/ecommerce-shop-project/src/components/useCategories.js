import { useState, useEffect } from "react";

function useCategories () {
  const [categories, setCategories] = useState([]);
  const[loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch ("https://fakestoreapi.com/products/categories")
     .then((response) => response.json())
     .then((data) => {
        setCategories(data);
        setLoading(false);
     }) 
     .catch((error) => {
         console.log(error);
         setLoading(false);
         setError("Failed to load categories data. Please, try again later");
     });
}, []);
  return { categories, loading, error };
}

export default useCategories;