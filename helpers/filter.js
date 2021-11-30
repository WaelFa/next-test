import { priceRangeFilter } from "./variables";

// takes as parameters the products list and the filters applied
export const filterProducts = (products, filters) => {
  console.log(filters);
  const categoryFilteredProducts =
    filters.category.length > 0
      ? products.filter((product) =>
          filters.category.includes(product.category)
        )
      : products; // if the category products is empty return the full array

  // price filtering
  if (filters.price === priceRangeFilter[0]) {
    console.log(0);
    return categoryFilteredProducts.filter((product) => product.price < 20);
  }
  if (filters.price === priceRangeFilter[1]) {
    console.log(1);
    return categoryFilteredProducts.filter(
      (product) => product.price >= 20 && product.price < 100
    );
  }
  if (filters.price === priceRangeFilter[2]) {
    console.log(2);
    return categoryFilteredProducts.filter(
      (product) => product.price >= 100 && product.price < 200
    );
  }
  if (filters.price === priceRangeFilter[3]) {
    console.log(3);
    return categoryFilteredProducts.filter((product) => product.price > 200);
  }
  // if the price filters is empty returns the category filtered products list
  return categoryFilteredProducts;
};
