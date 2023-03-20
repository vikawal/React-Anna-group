import { useFavorites } from './FavProductContext';
import { useState, useEffect } from 'react';
// import useFetch from './useFetchHook';

const Favorites = () => {
  const [favorites] = useFavorites();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Promise.all(
      favorites.map((id) =>
        fetch(`https://fakestoreapi.com/products/${id}`).then((response) =>
          response.json()
        )
      )
    ).then(setProducts);
  }, [favorites]);

  return (
    <>
      <h1>Favorites</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px", height: "100px" }}
            />
            {product.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Favorites;