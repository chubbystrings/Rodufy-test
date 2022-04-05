import styled from "styled-components";
import { motion } from "framer-motion";

export const SectionTwoWrapper = styled(motion.section)`
height: 100vh;
width: 100%;
height: 100vh;
box-sizing: border-box;
padding: 0px 15px;
display: flex;
flex-direction: column;

& .content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  box-sizing: border-box;
  position: relative;
  height: 100%;
}

& .grid--one {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;

  & span {
      color: var(--button)
  }
  & h3 {
    width: 545px;
    height: 102px;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    color: #000;
  }

  & p {
    width: 439px;
    height: 92px;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 46px;
    color: #000;
  }

  & button {
    width: 70%;
    height: 51px;
    background: var(--button);
    border-radius: 16px;
    border: none;
    display: grid;
    place-items: center;
    outline: none;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 51px;
    color: #fff;
  }
}

& .grid--two {
  & .img--wrapper {
    width: 300px;
    height: 450px;

    & img {
      width: 100%;
      height: 100%;
    }
  }
}
@media screen and (max-width: 1025px) {
  .grid--one {
    & h3 {
      width: auto;
      height: auto;
      font-size: 20px;
      line-height: 21px;
    }

    & p {
      width: auto;
      height: auto;
      font-size: 15px;
      line-height: 21px;
    }
  }

  .grid--two {
    & .img--wrapper {
      width: 250px;
      height: 350px;

      & img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

@media screen and (max-width: 725px) {
  & .content {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    place-items: center;
    box-sizing: border-box;
    position: relative;
    height: 100%;
    & .grid--one {
      align-items: center;
      justify-content: center;
      & h3,
      p {
        text-align: center;
      }
    }
    & .grid--two {
      grid-row: 1;
    }
  }
}

@media screen and (max-width: 450px) {
  .content {
    & .grid--one {
      & button {
        font-size: 15px;
        font-weight: 200;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    & .grid--two {
      & .img--wrapper {
        width: calc(100% - 5px);
        height: 250px;
        border-radius: 20px;
        & img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
`;
