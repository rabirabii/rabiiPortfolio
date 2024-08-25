"use client";
import React, { useState, useRef, useEffect } from "react";
import "./title.css";
import gsap from "gsap";
import useMousePosition from "@/Hooks/useMousePosition";
import { motion } from "framer-motion";

const Title = ({ id }) => {
  const svgRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const textContainerRef = useRef(null);
  const { x, y } = useMousePosition(textContainerRef);
  const size = isHovered ? 200 : 20;
  console.log(x, y);
  useEffect(() => {
    const svg = svgRef.current;
    const circles = svg.querySelectorAll("circle");

    circles.forEach((circle) => {
      gsap.to(circle, {
        x: "random(-80,80,true)",
        y: "random(-80,80,true)",
        scale: "random(0.25, 1, true)",
        ease: "elastic.out(1, 0.5)",
        delay: "random(0 , 0.2, true)",
        attr: {
          fill: () => `hsl(${gsap.utils.random(0, 360)}, 75% , 75%)`,
        },
        repeat: -1,
        repeatDelay: 3.5,
        repeatRefresh: true,
      });
    });
  }, []);

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="row">
        <div className="container">
          <div className="title">
            <h1>PORTFOLIO</h1>
            <div className="titleText" ref={textContainerRef}>
              <p>
                Halo, saya Wahyu Budiman, seorang{" "}
                <span>Fullstack Developer pemula </span>. <br /> Saya senang
                mencari tahu hal-hal yang belum saya ketahui dan terus belajar
                untuk berkembang. <br />
                Melalui belajar dan pengalaman yang konsisten, saya berkomitmen
                untuk menjadi pengembang yang lebih baik di masa depan.
              </p>
              <motion.div
                className="mask"
                animate={{
                  WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
                  WebkitMaskSize: `${size}px`,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <p>
                  Halo, saya Wahyu Budiman, seorang{" "}
                  <span>penggemar olahraga dan sejarah</span>. <br />
                  Saya senang mengeksplorasi dunia game dan menerapkan
                  kreativitas dalam koding. <br />
                  Melalui keseimbangan hobi dan pemrograman, saya berusaha
                  menjadi developer yang lebih inovatif dan berpikiran luas.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        <svg ref={svgRef} className="canvas" viewBox="0 0 200 200">
          {[...Array(20)].map((_, i) => (
            <circle
              key={i}
              cx="100"
              cy="100"
              r="10"
              fill="hsl(0, 100%, 100%)"
            />
          ))}
        </svg>
      </div>
    </motion.section>
  );
};

export default Title;
