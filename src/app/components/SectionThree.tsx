import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Whatsapp from "../assets/whatsapp.svg";
import Email from "../assets/email.svg";
import Vector from "../assets/vector.svg";
import { SectionThreeWrapper } from "../styles/SectionThreeStyles";
const sectionThreeVariants = {
  visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
  hidden: { opacity: 0 },
};

export default function SectionThree() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <SectionThreeWrapper
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={sectionThreeVariants}
    >
      <div className="content">
        <div className="grid--one">
          <h3>Contact Us</h3>
          <p>
            Got any questions, feedback, request and complains? Reach out...
          </p>
          <div className="contact--wrapper">
            <div className="contact">
              <img src={Whatsapp} alt="whatsapp" />
              <small>+234 8123456789</small>
            </div>
            <div className="contact">
              <img src={Email} alt="email" />
              <small>emeka@gmail.com</small>
            </div>
          </div>
        </div>
        <div className="grid--two">
          <div className="img--wrapper">
            <img src={Vector} alt="vector" />
          </div>
        </div>
      </div>
    </SectionThreeWrapper>
  );
}
