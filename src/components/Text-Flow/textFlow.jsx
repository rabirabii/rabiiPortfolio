"use client";
import { useEffect, useRef } from "react";
import "./textFlow.css";
import { useScroll, useTransform, motion } from "framer-motion";

const TextFlow = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    // Comment out or remove the Lenis initialization
    // const lenis = new Lenis();
    // function raf(time) {
    //   lenis.raf(time);
    //   requestAnimationFrame(raf);
    // }
    // requestAnimationFrame(raf);
  }, []);

  return (
    <main id="textFlow1">
      <div className="textFlow" ref={container}>
        <Slide direction={"left"} left={"-40%"} progress={scrollYProgress} />
        <Slide direction={"right"} left={"-25%"} progress={scrollYProgress} />
        <Slide direction={"left"} left={"-75%"} progress={scrollYProgress} />
        <Slide direction={"right"} left={"-100%"} progress={scrollYProgress} />
      </div>
    </main>
  );
};

const Slide = (props) => {
  const direction = props.direction === "left" ? -1 : 1;
  const translateX = useTransform(
    props.progress,
    [0, 1],
    [150 * direction, -150 * direction]
  );
  return (
    <motion.div style={{ x: translateX, left: props.left }} className="slide">
      <Phrase />
    </motion.div>
  );
};

const Phrase = () => {
  return (
    <div className="phrase">
      <p>
        JAVASCRIPT • REACT • VUE • JAVASCRIPT • REACT • VUE • JAVASCRIPT • REACT
        • VUE • JAVASCRIPT • REACT • VUE • JAVASCRIPT • REACT • VUE • JAVASCRIPT
        • REACT • VUE
      </p>
    </div>
  );
};

export default TextFlow;
