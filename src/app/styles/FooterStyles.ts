import styled from "styled-components";

export const FooterWrapper = styled.section`
width: 100%;
height: 250px;
padding: 60px 50px;
background: var(--primary);
position: relative;
display: flex;
flex-direction: column;
gap: 30px;
box-sizing: border-box;

& .logo {
  display: flex;
  gap: 10px;
  align-items: center;

  & img {
    width: 40px;
    height: 40px;
  }

  & h3 {
    color: #fff;
  }
}

& .links {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  align-items: center;
  color: #fff;
  font-size: 25px;
  padding: 0 40px;
}

& .copyright {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  color: #fff;
  bottom: 10px;
}

@media screen and (max-width: 725px) {
  & .logo {
    & img {
      width: 20px;
      height: 20px;
    }
    & h3 {
      color: #fff;
      font-size: 15px;
    }
  }

  & .links {
    font-size: 15px;
  }
}

@media screen and (max-width: 450px) {
  padding: 20px 0;
  gap: 50px;
  align-items: center;

  & .links {
    display: flex;
    gap: 25px;
    padding: 0px 5px;
    font-size: 10px;
  }
}
`;