import styled from "styled-components";

export const SectionOneWrapper = styled.section`
background: var(--primary);
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

& .header {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  padding: 0px 35px;
  box-sizing: border-box;
  align-items: center;

  & .header-left-side {
    display: flex;
    gap: 20px;
    align-items: center;

    & img {
      width: 40px;
      height: 40px;
    }

    & h3 {
      font-style: normal;
      font-weight: 700;
      font-size: 26px;
      line-height: 49px;
      color: #fff;
    }
  }

  & .header-right-side {
    display: flex;
    align-items: center;
    gap: 20px;

    & button {
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      color: #fff;
    }
    & a {
      color: #fff;
    }
  }
}

& .grid--one {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  
  & span {
      color: var(--button);
      text-decoration: underline;
      text-decoration-color: #fff;
      text-decoration-thickness: 8px;
  }

  & h3 {
    width: 545px;
    height: 102px;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    color: #ffffff;
  }

  & p {
    width: 639px;
    height: 92px;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 46px;
    color: #ffffff;
  }

  & .download--app {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    align-items: center;

    & p {
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      width: 170px;
      height: 62px;
      color: #ffffff;
    }

    & div {
      width: 150px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ffffff;
      border-radius: 16px;

      & img {
        width: 40px;
        height: 40px;
      }
    }
  }
}

& .grid--two {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-right: 30px;

  & .img--wrapper {
    max-width: 402px;
    max-height: 317px;
    border-radius: 20px;
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

    & .download--app {
      & p {
        width: auto;
        height: auto;
        font-size: 15px;
        /* line-height: 21px; */
      }

      & div {
        height: 40px;
        width: 80px;
        border-radius: 10px;
        & img {
          width: 20px;
          height: 20px;
        }
      }
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
    }
    & .grid--two {
      padding-right: 0;
      & .img--wrapper {
        width: 350px;
        height: 250px;
        border-radius: 20px;
        & img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  & .header {
    & .header-left-side {
      display: flex;
      gap: 10px;
      align-items: center;

      & img {
        width: 20px;
        height: 20px;
      }

      & h3 {
        font-style: normal;
        font-weight: 200;
        font-size: 15px;
        line-height: 49px;
        color: #fff;
      }
    }

    & .header-right-side {
      display: flex;
      align-items: center;
      gap: 20px;

      & button {
        font-style: normal;
        font-weight: 100;
        font-size: 15px;
        line-height: 21px;
        color: #fff;
      }
      & a {
        color: #fff;
      }
    }
  }
}

@media screen and (max-width: 450px) {
  .content {
    & .grid--one {
      & .download--app {
        flex-direction: column;
      }
    }
    & .grid--two {
      & .img--wrapper {
        width: calc(100% - 20px);
        height: 250px;
        border-radius: 20px;
        & img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  & .header {
    padding: 0px 5px;
    & .header-left-side {
      & h3 {
        display: none;
      }
    }
    & .header-right-side {
      margin-right: -20px;
      gap: 5px;
      & button {
        font-weight: 100;
        font-size: 12px;
      }
    }
  }
}
`;