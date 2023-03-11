import React, { useState } from "react";
import "./App.css";
import Categories from "./components/Categories";
import Products from "./components/Products";
import filteredProductsByCategory from "./components/filteredProductsByCategory.js";
import allCategories from "./fake-data/all-categories.js";
import allProducts from "./fake-data/all-products.js";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    console.log(`Clicked category: ${category}`);
    setSelectedCategory(category);
  };
  
  const filteredProducts = filteredProductsByCategory(allProducts, selectedCategory);

  return (
    <div className="App">
      <Categories
        categories={allCategories}
        selectedCategory={selectedCategory}
        handleCategoryClick={handleCategoryClick}
      />
      <Products 
        filteredProducts={filteredProducts}
      />
    </div>
  );
}

export default App;
