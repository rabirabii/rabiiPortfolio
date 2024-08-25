import React from "react";
import { motion } from "framer-motion";
import "./nav.css";

const Curve = () => {
  const initialPath = `M0 0 L100 0 L100 ${window.innerHeight} L0 ${
    window.innerHeight
  } Q200 ${window.innerHeight / 2} 0 0`;
  const targetPath = `M0 0 L100 0 L100 ${window.innerHeight} L0 ${
    window.innerHeight
  } Q-100 ${window.innerHeight / 2} 0 0`;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg className="svgCurve">
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
};

export default Curve;
