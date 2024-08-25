"use client";
import React, { useRef, useEffect } from "react";
import "./CustomButton.css";
import gsap from "gsap";
const CustomButton = ({
  children,
  backgroundColor = "#feffb8",
  ...atrributes
}) => {
  const circle = useRef(null);
  let timeline = useRef(null);
  let timeout = null;
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeout) clearTimeout(timeout);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeout = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };
  return (
    <div
      className="roundedButton"
      style={{ overflow: "hidden" }}
      onMouseEnter={() => {
        manageMouseEnter();
      }}
      onMouseLeave={() => {
        manageMouseLeave();
      }}
      {...atrributes}
    >
      {children}
      <div ref={circle} style={{ backgroundColor }} className="circle"></div>
    </div>
  );
};

export default CustomButton;
