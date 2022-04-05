import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTwoImage from "../assets/section-two-image.png";
import { SectionTwoWrapper } from "../styles/SectionTwoStyles";

const sectionTwoVariants = {
  visible: { opacity: 1, transition: { duration: 1, delay: 1.5 } },
  hidden: { opacity: 0 },
};

export default function SectionTwo() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } 
  }, [controls, inView]);
  return (
    <SectionTwoWrapper
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={sectionTwoVariants}
    >
      <div className="content">
        <div className="grid--one">
          <h3>Everything you will need to <span>excel</span> in life</h3>
          <p>
            We've curated a list of valuable resources to get you going in life,
            all for free
          </p>
          <button>Get Started</button>
        </div>
        <div className="grid--two">
          <div className="img--wrapper">
            <img src={SectionTwoImage} alt="" />
          </div>
        </div>
      </div>
    </SectionTwoWrapper>
  );
}
