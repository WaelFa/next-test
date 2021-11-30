import React from "react";
import Image from "next/image";

//context import
import { useAppContext } from "../context/state";

function ProductCard({ product }) {
  const { setProducts, products, setShowCartContent } = useAppContext();

  // scroll to the top of the screen when a new product is added
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const addProductToCart = () => {
    console.log(products, "hello");
    setProducts(
      products.find((prod) => prod.id === product.id)
        ? products
        : [...products, product]
    );
    scrollToTop();
    setShowCartContent(true);
  };

  return (
    <div className="product-card mx-auto">
      <div className="pc-cover">
        {product.bestseller && <p>Best Seller</p>}
        <Image src={product.image} alt="product image" />
        <div className="pc-button" onClick={addProductToCart}>
          Add to cart
        </div>
      </div>
      <div className="pc-body">
        <span>{product.category}</span>
        <h3>{product.name}</h3>
        <p>
          {product.currency}
          {product.price}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
