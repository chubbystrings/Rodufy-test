import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import useAuth from "../hooks/useAuth";
import { containerVariants } from "../utils/variants";
import { motion } from "framer-motion";
const DashboardTemplate: React.FC<{ email: string }> = ({
  children,
  email,
}) => {
    const { logout } = useAuth()
    const extractName = (email: string) => {
        if (email && typeof email === 'string' && email.includes('@')) {
            const name = email.split('@')[0];
            return name.length > 10 ? name.substring(0, 10) + '...' : name
        }

        return 'user'
    }

    const handleLogout = () => {
        logout()
    }

    
  return (
    <DashboardWrapper variants={containerVariants} initial="hidden" exit="exit" animate="visible">
      <header>
        <div className="header-left-side">
          <img src={Logo} alt="logo" />
          <h3>Rodufy</h3>
        </div>
        <div className="header-right-side">
          <p>${extractName(email)}</p>
          <button onClick={() => handleLogout()} >Logout</button>
        </div>
      </header>
      <div className="content">{children}</div>
    </DashboardWrapper>
  );
};

export default DashboardTemplate;

const DashboardWrapper = styled(motion.div)`
  box-sizing: border-box;
  background: var(--secondary);
  height: 100vh;
  overflow-y: scroll;
  position: relative;

  & .content {
    padding: 150px 20px;
  }

  & header {
    background: var(--primary);
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px 10px;
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 999;

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
        font-size: 36px;
        line-height: 69px;
        color: #fff;
      }
    }

    & .header-right-side {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      & p {
        font-size: 15px;
        color: #fff;
      }

      & button {
        width: 80px;
        height: 30px;
        background: var(--button);
        border-radius: 5px;
        display: grid;
        place-items: center;
        outline: none;
        border: none;
        cursor: pointer;
        color: #fff;

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
      }
    }
  }

  @media screen and (max-width: 725px) {
    & header {
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
    }
  }

  @media screen and (max-width: 450px) {
    & header {
      padding: 0px 5px;
      & .header-left-side {
        & h3 {
          display: none;
        }
      }
    }
  }
`;
