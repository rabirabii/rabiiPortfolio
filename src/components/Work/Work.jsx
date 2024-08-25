"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import "./work.css";
import { projects } from "../../utils/dummy";
import Card from "./Card";
const Work = ({ id }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div id="website" className="theme">
      <div className="row">
        <div className="themeBG">
          <h2>SITE WORK</h2>
        </div>
      </div>
      <div
        className="row "
        ref={container}
        style={{
          height: `${projects.length * 100}vh`,
          position: "relative",
        }}
      >
        {projects.map((project, index) => {
          const targetScale = 1 - (projects.length - index) * 0.05;
          return (
            <Card
              key={`p_${index}`}
              i={index}
              {...project}
              targetScale={targetScale}
              progress={scrollYProgress}
              range={[index * 0.25, 1]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
