"use client";

import React, { useEffect } from "react";
import Intro from "./Intro";

const Test = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector("#main-container"), // Specify the container
        smooth: true, // Enable smooth scrolling
        lerp: 0.1, // Adjust for smoother animations
        getDirection: true,
        getSpeed: true,
      });

      // Update LocomotiveScroll on window resize
      window.addEventListener("resize", () => {
        locomotiveScroll.update();
      });
    })();
  }, []);

  return (
    <div id="main-container">
      <Intro />
    </div>
  );
};

export default Test;
