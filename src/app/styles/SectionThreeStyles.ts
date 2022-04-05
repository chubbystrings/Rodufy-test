import styled from "styled-components";
import { motion } from "framer-motion";

export const SectionThreeWrapper = styled(motion.section)`
background: var(--secondary);
height: 785px;
width: 100%;
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
  gap: 5px;
  padding: 20px;
  & h3 {
    width: 545px;
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 91px;
    color: #000;
  }

  & p {
    width: 639px;
    height: 92px;
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    line-height: 46px;
    color: #000;
  }

  & .contact--wrapper {
    margin-top: 20px;

    & .contact {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 10px;

      & small {
        font-style: normal;
        font-weight: 300;
        font-size: 22px;
        color: #000;
      }
      & img {
        width: 40px;
        height: 40px;
      }
    }
  }
}

& .grid--two {
  box-sizing: border-box;
  & .img--wrapper {
    margin-left: 20px;
    width: 300px;
    & img {
      width: 100%;
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

      & .contact--wrapper {
        margin-top: 2px;
      }
    }
    & .grid--two {
      grid-row: 1;
      & .img--wrapper {
        width: 400px;
        height: 300px;
        & img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

@media screen and (max-width: 450px) {
  .content {
    & .grid--one {
      padding: 5px;
      & h3 {
        font-weight: 200;
        font-size: 15px;
      }

      & p {
        width: auto;
        height: auto;
        font-style: normal;
        font-weight: 100;
        font-size: 10px;
        line-height: 26px;
        color: #000;
      }

      & .contact--wrapper {
        margin-top: 20px;

        & .contact {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 2px;

          & small {
            font-style: normal;
            font-weight: 100;
            font-size: 15px;
            color: #000;
          }
          & img {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
    & .grid--two {
      & .img--wrapper {
        width: calc(100% - 20px);
        border-radius: 20px;
      }
    }
  }
}
`;