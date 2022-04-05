import React, { useState} from "react";
import styled from "styled-components";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import Footer from "../components/Footer";
import { motion } from 'framer-motion';
import { containerVariants } from "../utils/variants";
import Banner from "../components/Banner";

export default function Home() {
  const [isShowBanner, setIsShowBanner] = useState(true);

   const handleShowBanner = () => setIsShowBanner(false)
  return (
    <HomeWrapper variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      { isShowBanner && <Banner handleClick={handleShowBanner} /> }
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </HomeWrapper>
  );
}

const HomeWrapper = styled(motion.div)``;
