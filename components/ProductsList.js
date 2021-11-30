import React from "react";

// components imports
import PaginatedList from "./PaginatedList";
import ProductCard from "./ProductCard";

function ProductsList({ products }) {
  return (
    <div className="products-list">
      <PaginatedList products={products} />
    </div>
  );
}

export default ProductsList;
