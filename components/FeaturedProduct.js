import React from "react";
import Image from "next/image";

// images imports
import dog from "../assets/dog.png";
import recommended1 from "../assets/recommended1.png";
import recommended2 from "../assets/recommended2.png";
import recommended3 from "../assets/recommended3.png";

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
      <div className="fp-bottom">
        <div className="fpb-description">
          <h2>About the Samurai King Resting</h2>
          <span>Pets</span>
          <p>
            So how did the classical Latin become so incoherent? According to
            McClintock, a 15th century typesetter likely scrambled part of
            Cicero's De Finibus in order to provide placeholder text to mockup
            various fonts for a type specimen book.So how did the classical
            Latin become so incoherent? According to McClintock, a 15th century
            typesetter likely scrambled part of Cicero's De Finibus in order to
            provide placeholder text to mockup various fonts for a type specimen
            book.So how did the classical Latin become so incoherent? According
            to McClintock.
          </p>
        </div>
        <div className="fpb-relatedProducts">
          <h2>People also buy</h2>
          <div className="fpb-recommendedProducts">
            <Image src={recommended1} alt="recommended product 1" />
            <Image src={recommended2} alt="recommended product 2" />
            <Image src={recommended3} alt="recommended product 3" />
          </div>
          <div className="pfb-details">
            <h2>Details</h2>
            <p>Size: 1020 x 1020 pixel</p>
            <p>Size: 15 mb</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProduct;
