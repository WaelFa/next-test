import React from "react";
import Image from "next/image";
import { Toast } from "react-bootstrap";

//context import
import { useAppContext } from "../context/state";

// image imports
import CartImage from "../assets/cart.svg";

function Cart() {
  const { setProducts, products, showCartContent, setShowCartContent } =
    useAppContext();

  const toggleShowCartContent = () => setShowCartContent(!showCartContent);

  const clearCart = () => {
    setProducts([]);
  };
  return (
    <div className="cart">
      <button onClick={toggleShowCartContent}>
        <Image src={CartImage} alt="cart" width={54} height={54} />
        {products.length !== 0 && (
          <span className="cart-counter">{products.length}</span>
        )}
      </button>

      <Toast show={showCartContent} onClose={toggleShowCartContent}>
        <Toast.Header></Toast.Header>
        <Toast.Body>
          <div className="cart-products">
            {products.map((product) => (
              <div className="cart-product" key={product.id}>
                <div className="cp-left">
                  <h3>{product.name}</h3>
                  <span>
                    {product.currency}
                    {product.price}
                  </span>
                </div>
                <div className="cp-right">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            ))}
          </div>
          <button onClick={clearCart} className="cart-clear">
            Clear
          </button>
        </Toast.Body>
      </Toast>
    </div>
  );
}

export default Cart;
