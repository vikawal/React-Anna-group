
 import useFetch from "./useFetchHook";
 
 function useCategories() {
  const { data: categories, loading, error } = useFetch(
    "https://fakestoreapi.com/products/categories"
  );

  return { categories, loading, error };
}


//  "https://fakestoreapi.com/products/categories"

export default useCategories;