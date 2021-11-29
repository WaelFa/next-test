import React from 'react'
import Image from "next/image"

// image imports
import CartImage from "../assets/cart.svg";

function Cart() {
    return (
        <div className="cart">
            <button>
                 <Image src={CartImage} alt="cart" width={54} height={54}/>
                 <span className="cart-counter">1</span>
            </button>
        </div>
    )
}

export default Cart
