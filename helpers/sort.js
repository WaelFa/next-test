import { ALPHABETICALLY, PRICE } from "./variables";

// takes as parameters the product list and an object containing the sorting type
export const sortProducts = (products, sorting) => {
  if (sorting.type === ALPHABETICALLY) {
    const sortedAlphabetically = products.sort((a, b) => {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      }
      return 0;
    });
    if (sorting.isAscending) {
      return sortedAlphabetically;
    } else {
      return sortedAlphabetically.reverse();
    }
  } else if (sorting.type === PRICE) {
    const sortedByPrice = products.sort((a, b) => a.price - b.price);
    if (sorting.isAscending) {
      return sortedByPrice;
    } else {
      return sortedByPrice.reverse();
    }
  }
};
