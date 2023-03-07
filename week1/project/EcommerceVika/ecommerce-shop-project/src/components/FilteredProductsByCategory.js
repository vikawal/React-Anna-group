
  const FilteredProductsByCategory = (products, category) => {
  return category ? products.filter(
        (product) => product.category === category.split(":")[1].trim()
      )
    : products;
 };
  
export default FilteredProductsByCategory;