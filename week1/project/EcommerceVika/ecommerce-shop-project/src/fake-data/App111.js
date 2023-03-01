import React, { useState } from "react";
import "./App.css";
import allCategories from "./fake-data/all-categories.js";
import allProducts from "./fake-data/all-products.js";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (categoryName) => {
    console.log(`Clicked category: ${categoryName}`);
    setSelectedCategory(categoryName);
  };

  const filteredProducts = selectedCategory
    ? allProducts.filter((product) =>
        product.category.toLowerCase().includes(selectedCategory.toLowerCase())
      )
    : allProducts;

  return (
    <div className="App">
      <div>
        {allCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.name)}
          >
            {category.title}
          </button>
        ))}
        <button onClick={() => setSelectedCategory("")}>All Products</button>
      </div>

      {filteredProducts.map((product) => (
        <div key={product.id}>
          <div>{product.title}</div>
          <div>{product.price}</div>
          <div>{product.description}</div>
          <div>{product.category}</div>
          <img src={product.image} alt={product.title} />
          <div>
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;