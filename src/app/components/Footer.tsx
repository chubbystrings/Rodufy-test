import React from "react";
import Logo from "../assets/logo.svg";
import { FooterWrapper } from "../styles/FooterStyles";

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="logo">
        <img src={Logo} alt="logo" />
        <h3>Rodufy</h3>
      </div>
      <div className="links">
        <p>Blog</p>
        <p>Private Policy</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <p className="copyright">Copyright Rodufy 2022</p>
    </FooterWrapper>
  );
}

