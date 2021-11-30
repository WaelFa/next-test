import React from "react";

// components imports
import PaginatedList from "./PaginatedList";
import ProductCard from "./ProductCard";

function ProductsList() {
  return (
    <div className="products-list">
      <PaginatedList />
    </div>
  );
}

export default ProductsList;
