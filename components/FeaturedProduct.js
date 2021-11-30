import React from "react";
import Image from "next/image";

// images imports
import dog from "../assets/dog.png";
import recommended1 from "../assets/recommended1.png";
import recommended2 from "../assets/recommended2.png";
import recommended3 from "../assets/recommended3.png";

function FeaturedProduct({ featuredProduct }) {

  return (
    <div className="featured-product">
      <div className="fp-top">
        <h1>Samurai King Resting</h1>
        <div className="fp-image-container">
          <Image
            src={featuredProduct.image.src}
            alt="featured product"
            height={featuredProduct.image.height}
            width={featuredProduct.image.width}
          />
          <span className="fp-label">Photo of the day</span>
        </div>
      </div>
      <div className="fp-bottom">
        <div className="fpb-description">
          <h2>{featuredProduct.name}</h2>
          <span>{featuredProduct.category}</span>
          <p>{featuredProduct.details.description}</p>
        </div>
        <div className="fpb-relatedProducts">
          <h2>People also buy</h2>
          <div className="fpb-recommendedProducts">
            {featuredProduct.details.recommendations.map((el, id) => (
              <Image key={"key" + id} src={el.src} alt={el.alt} />
            ))}
          </div>
          <div className="pfb-details">
            <h2>Details</h2>
            <p>
              Size: {featuredProduct.details.dimensions.width} x{" "}
              {featuredProduct.details.dimensions.height} pixel
            </p>
            <p>Size: {featuredProduct.details.size} mb</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProduct;
