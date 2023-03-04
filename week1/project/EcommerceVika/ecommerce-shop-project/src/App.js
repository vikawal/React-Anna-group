import {useState} from 'react';
import "./App.css";
import allCategories from "./fake-data/all-categories.js";
import allProducts from "./fake-data/all-products.js";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    console.log(`Clicked category: ${category}`);
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? allProducts.filter(
        (product) => product.category === selectedCategory.split(":")[1].trim()
      )
    : allProducts;

  return (
    <div className="App">
      <div className="categories">
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
        <button onClick={() => setSelectedCategory("")}>All Products</button>
      </div>

      <div className="products">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product">
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
        ))}
      </div>
    </div>
  );
}

export default App;