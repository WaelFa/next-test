import { ALPHABETICALLY } from "./variables";

// takes as parameters the product list and an object containing the sorting type
export const sortProducts = (products, sorting) => {
  const sortedAlphabetically = products.sort((a, b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }

    return 0;
  });
  const sortedByPrice = products.sort((a, b) => a.price - b.price);

  if (sorting.type === ALPHABETICALLY) {
    if (sorting.isAscending) {
      return sortedAlphabetically;
    } else {
      return sortedAlphabetically.reverse();
    }
  } else {
    if (sorting.isAscending) {
      return sortedByPrice;
    } else {
      return sortedByPrice.reverse();
    }
  }
};
