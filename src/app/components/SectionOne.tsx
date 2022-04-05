import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import PlayStoreImage from "../assets/play-store.svg";
import AppleImage from "../assets/apple.svg";
import LandingImage from "../assets/smiling-girl.png";
import Logo from "../assets/logo.svg";
import { SectionOneWrapper } from "../styles/SectionOneStyles";
import { motion } from "framer-motion";

const imageVariants = {
  hidden: {
    y: 40,
  },

  visible: {
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
}

const textVariants = {
  hidden: {
    y: 40,
  },

  visible: {
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
}

export default function SectionOne() {
  
  return (
    <SectionOneWrapper>
      <div className="header">
        <div className="header-left-side">
          <img src={Logo} alt="logo" />
          <h3>Rodufy</h3>
        </div>
        <div className="header-right-side">
          <NavLink to="/signup">
            <Button>Register</Button>
          </NavLink>
          <NavLink to="/login">
            <Button link>Login</Button>
          </NavLink>
        </div>
      </div>
      <div className="content" >
        <motion.div className="grid--one" variants={textVariants}>
          <h3>Our mission is to <span>advance</span> humanity</h3>
          <p>
            We would strive to achieve that through providing education and
            quality health
          </p>
          <div className="download--app">
            <p>DOWNLOAD APP</p>
            <div>
              <img src={PlayStoreImage} alt="play store" />
            </div>
            <div>
              <img src={AppleImage} alt="play store" />
            </div>
          </div>
        </motion.div>
        <div className="grid--two">
          <div className="img--wrapper">
            <motion.img src={LandingImage} alt="smiling girl" variants={imageVariants} initial="hidden" animate="visible" />
          </div>
        </div>
      </div>
    </SectionOneWrapper>
  );
}

const Button = styled.button<{ link?: boolean; width?: string }>`
  width: 120px;
  height: 40px;
  background: ${(props) => (props.link ? "transparent" : "var(--button)")};
  border-radius: 16px;
  display: grid;
  place-items: center;
  outline: none;
  border: ${(props) => (props.link ? "1px solid var(--button)" : "none")};
  cursor: pointer;

  @media screen and (max-width: 725px) {
    width: 100px;
    height: 40px;
  }

  @media screen and (max-width: 450px) {
    width: 80px;
    height: 51px;
    border: none;
    background: transparent;
  }
`;


