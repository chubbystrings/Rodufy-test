import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Banner: React.FC<{ handleClick: () => void }> = ({ handleClick }) => {
  return (
    <BannerStyles>
      <button>New</button>
      <p>Announcing our $15 million series A funding</p>
      <div className="close" onClick={handleClick}>
        x
      </div>
    </BannerStyles>
  );
};

export default Banner;

const BannerStyles = styled(motion.div)`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background-color: var(--button);
  padding: 10px 40px;
  position: relative;
  gap: 5px;

  & button {
    width: 100px;
    height: 40px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    border: none;
    display: grid;
    place-items: center;
    outline: none;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    color: #fff;
  }

  & p {
    color: #fff;
    font-size: 25px;
  }

  & .close {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #fff;
    color: #fff;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  @media screen and (max-width: 725px) {

    & button {
        width: 60px;
        height: 30px;

    }
    & p {
      color: #fff;
      font-size: 15px;
    }

    & .close {
      width: 15px;
      height: 15px;
      font-size: 10px;
    }
  }

  @media screen and (max-width: 450px) {
    & .close {
      width: 15px;
      height: 15px;
      font-size: 10px;
    }

    & p {
      font-size: 9px;
    }
  }
  @media screen and (max-width: 383px) {
    .close {
      top: 15px;
    }
  }
`;
