import React from "react";
import Image from "next/image";

// image import
import cardImage from "../assets/cardImage.png";

function ProductCard() {
  const isBestSeller = true;
  return (
    <div className="product-card">
      <div className="pc-cover">
        {isBestSeller && <p>Best Seller</p>}
        <Image src={cardImage} alt="product image" />
        <div className="pc-button">Add to cart</div>
      </div>
      <div className="pc-body">
        <span>Food</span>
        <h3>Egg Balloon</h3>
        <p>$93.89</p>
      </div>
    </div>
  );
}

export default ProductCard;
