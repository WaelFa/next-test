import React from "react";
import Image from "next/image";

// images imports
import dog from "../assets/dog.png";

function FeaturedProduct() {
  return (
    <div className="featured-product">
      <div className="fp-top">
        <h1>Samurai King Resting</h1>
        <div className="fp-image-container">
          <Image src={dog} alt="featured product" width="1290" />
          <span className="fp-label">Photo of the day</span>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProduct;
