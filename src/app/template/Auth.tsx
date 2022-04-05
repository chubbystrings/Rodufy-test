import React from "react";
import styled from "styled-components";
import SideNavBackground from "../assets/side-nav.svg";
import { containerVariants } from "../utils/variants";
import { motion } from "framer-motion";

const AuthTemplate: React.FC = ({ children }) => {
  return (
    <Wrapper variants={containerVariants} animate="visible" exit="exit" initial="hidden">
      <div className="side--nav"></div>
      <div className="content">{children}</div>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  background: var(--secondary);
  display: grid;
  grid-template-columns: 1fr 5fr;
  height: 100vh;

  & .side--nav {
    width: 100%;
    background-image: url(${SideNavBackground});
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media screen and (max-width: 1025px) {
    grid-template-columns: 1fr;

    & .side--nav {
      display: none;
    }
  }
`;

export default AuthTemplate;
