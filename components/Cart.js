import React, { useState } from 'react'
import Image from "next/image"
import { Toast } from 'react-bootstrap';


// image imports
import CartImage from "../assets/cart.svg";

function Cart() {
    const [showCartContent, setShowCartContent] = useState(false);
    const toggleShowCartContent = () => setShowCartContent(!showCartContent);
    return (
        <div className="cart">
            <button onClick={toggleShowCartContent}>
                <Image src={CartImage} alt="cart" width={54} height={54} />
                <span className="cart-counter">1</span>
            </button>

            <Toast show={showCartContent} onClose={toggleShowCartContent}>
                <Toast.Header></Toast.Header>
                <Toast.Body>
                    <div className="cart-products">
                        <div className="cart-product">
                            <div className="cp-left">
                                <h3>Samurai King Resting</h3>
                                <span>$10000.00</span>
                            </div>
                            <div className="cp-right">
                                <Image src={CartImage} />
                            </div>
                        </div>
                    </div>
                    <button onClick={() => console.log('clear')} className="cart-clear">Clear</button>
                </Toast.Body>
            </Toast>

        </div>
    )
}

export default Cart
