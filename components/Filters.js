import React from "react";

// variables and helpers imports
import { categoryFilters, priceRangeFilter } from "../helpers/variables";

function Filters({ filters, setFilters }) {
  const onCategoryFilterCheck = (e) => {
    let checkboxName = e.target.name;
    if (filters.category.includes(checkboxName)) {
      setFilters({
        ...filters,
        category: filters.category.filter((name) => name !== checkboxName),
      });
    } else {
      setFilters({ ...filters, category: [...filters.category, checkboxName] });
    }
  };

  const onPriceFilterCheck = (e) => {
    let checkboxName = e.target.name;
    if (checkboxName === filters.price) {
      setFilters({ ...filters, price: "" });
    } else {
      setFilters({ ...filters, price: checkboxName });
    }
  };
  return (
    <div className="filters">
      <h2>Category</h2>
      {categoryFilters.map((name, id) => (
        <div className="checkbox-group" key={id}>
          <input
            type="checkbox"
            id={name}
            name={name}
            checked={filters.category.includes(name)}
            onChange={onCategoryFilterCheck}
          />
          <label htmlFor={name}>{name}</label>
        </div>
      ))}
      <hr />
      <h2>Price range</h2>
      {priceRangeFilter.map((name, id) => (
        <div className="checkbox-group" key={id}>
          <input
            type="checkbox"
            id={name}
            name={name}
            checked={name === filters.price}
            onChange={onPriceFilterCheck}
          />
          <label htmlFor={name}>{name}</label>
        </div>
      ))}
    </div>
  );
}

export default Filters;
