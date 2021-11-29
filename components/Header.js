import React from "react";
import Image from "next/image";

//components imports
import Container from "./Container";
import Cart from "./Cart";

//images imports
import Logo from "../assets/logo.svg";

function Header() {
  return (
    <header className="header">
      <Container>
        <Image src={Logo} alt="logo" width="159" />
        <Cart />
      </Container>
    </header>
  );
}

export default Header;
