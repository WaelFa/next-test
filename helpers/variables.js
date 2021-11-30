export const ALPHABETICALLY = "Alphabetically";
export const PRICE = "Price";
export const categoryFilters = [
  "people",
  "premium",
  "pets",
  "food",
  "landmarks",
  "cities",
  "nature",
];

export const priceRangeFilter = [
  "Lower than $20",
  "$20 - $100",
  "$100 - $200",
  "More than $200",
];

export const initialFiltersState = {
  category: [],
  price: "",
};
