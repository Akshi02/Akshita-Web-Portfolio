import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const handleCVButtonClick = () => {
    const url = "https://drive.google.com/file/d/17RXU2Y6mDUZC3A26eGjMJUlqnJQW4sqC/preview";
    window.open(url, '_blank');
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>AKSHITA BHATIA</motion.h2>
          <motion.h1 variants={textVariants}>
          CS Graduate Tech Enthusiast
          </motion.h1>
          <motion.div className="buttons">
            <a href="https://youtu.be/jfbPEHrsbpg?si=sswx8sLQzcXix1RV" target="_blank"  rel="noopener noreferrer">
              <motion.button variants={textVariants}>
                Checkout this Video!
              </motion.button>
            </a>
            <motion.button
              variants={textVariants}
              onClick={handleCVButtonClick}
            >
              Check my CV!
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        AI CS BIG DATA GRADUATE
      </motion.div>
      <div className="imageContainer">
        <img src="/Akshita2.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;