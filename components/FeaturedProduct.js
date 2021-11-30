import React from "react";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";

// context import
import { useAppContext } from "../context/state";

function FeaturedProduct({ featuredProduct }) {
  const { setProducts, products, setShowCartContent } = useAppContext();

  const addProductToCart = () => {
    setProducts(
      products.find((prod) => prod.id === featuredProduct.id)
        ? products
        : [...products, featuredProduct]
    );
    setShowCartContent(true);
  };

  return (
    <div className="featured-product">
      <div className="fp-top">
        <Row className="mb-4">
          <Col sm={12} md={6}>
            <h1>Samurai King Resting</h1>
          </Col>
          <Col md={6} className="d-none d-md-flex justify-content-end">
            <button className="fp-button" onClick={addProductToCart}>
              ADD TO CART
            </button>
          </Col>
        </Row>

        <div className="fp-image-container">
          <Image
            src={featuredProduct.image.src}
            alt="featured product"
            height={featuredProduct.image.height}
            width={featuredProduct.image.width}
          />
          <span className="fp-label">Photo of the day</span>
        </div>
        <Row className="d-md-none d-block mx-0 mt-3">
          <button className="fp-button w-100" onClick={addProductToCart}>
            ADD TO CART
          </button>
        </Row>
      </div>
      <Row className="fp-bottom mx-auto">
        <Col className="fpb-description" lg={6} xs={12}>
          <h2>{featuredProduct.name}</h2>
          <span>{featuredProduct.category}</span>
          <p>{featuredProduct.details.description}</p>
        </Col>
        <Col className="fpb-relatedProducts" lg={6} xs={12}>
          <h2>People also buy</h2>
          <div className="fpb-recommendedProducts">
            {featuredProduct.details.recommendations.map((el, id) => (
              <Image
                className="ml-lg-0 mr-lg-3 ml-3 mr-0"
                key={"key" + id}
                src={el.src}
                alt={el.alt}
              />
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
        </Col>
      </Row>
    </div>
  );
}

export default FeaturedProduct;
