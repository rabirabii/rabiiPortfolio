"use client";
import Image from "next/image";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import "./work.css";

const Card = ({
  i,
  title,
  description,
  intro,
  demoLink,
  github,
  image,
  progress,
  targetScale,
  range,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const scale = useTransform(progress, range, [1, targetScale]);

  const imageAnimation = {
    rest: { scale: 1.05 },
    hover: { scale: 1 },
  };
  const cardColorClass = `card-color-${(i % 3) + 1}`;
  return (
    <motion.div
      className={`webSite ${cardColorClass}`}
      style={{
        position: "sticky",
      }}
    >
      <div>
        <motion.div
          className="site site1"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            scale,
            transformOrigin: "center top",
            y: isHovered ? -10 : 0,
            transition: "all 0.3s ease",
            filter: "drop-shadow(0px 20px 10px #E0BBE4 )",
          }}
        >
          <div className="left siteTxt">
            <div>
              <h3>{title}</h3>
              <p className="webTit">{description}</p>
            </div>
            <p className="webIntro">{intro}</p>
            <div className="btns">
              <a href={demoLink} className="codeBtn" target="_blank">
                <span className="btnFlow">Demo</span>
              </a>
              <a href={github} target="_blank">
                <span className="btnFlow">Github</span>
              </a>
            </div>
          </div>
          <motion.div className="right siteView" variants={imageAnimation}>
            <Image src={image} alt={title} width={500} height={500} />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card;
