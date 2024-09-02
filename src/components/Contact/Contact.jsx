"use client";
import { useRef } from "react";
import "./contact.css";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import CustomButton from "@/utils/Button";
import useLiveDate from "@/Hooks/useLiveDate";
const Contact = () => {
  const handleViwePDF = () => {
    window.open("/Wahyu Budiman_CV.pdf", "_blank");
  };
  const currentDate = useLiveDate();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <motion.div className="kontak" ref={container} style={{ y }}>
      <div className="contactBody">
        <div className="contactTitle">
          <span>
            <div className="imgContact">
              <Image fill={true} src="/profile1.jpg" />
            </div>
            <h2>Let's Work</h2>
          </span>
          <h2>Together</h2>
          <motion.div style={{ x }} className="contactBtn">
            <CustomButton
              backgroundColor="#feec01"
              className="tombolBtn"
              onClick={handleViwePDF}
            >
              <p>My Resume</p>
            </CustomButton>
          </motion.div>
          <motion.svg
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ rotate, scale: 2 }}
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="black"
            />
          </motion.svg>
        </div>
        <div className="contactNav">
          <CustomButton backgroundColor="#6e5494">
            <p>wahyubudiman0624@gmail.com</p>
          </CustomButton>
          <CustomButton backgroundColor="#6e5494">
            <p>+62 895-4006-43069</p>
          </CustomButton>
        </div>
        <div className="contactInfo">
          <div>
            <span>
              <h3>Date</h3>
              <p>{currentDate.toLocaleDateString()}</p>
            </span>
            <span>
              <h3>Time</h3>
              <p>{currentDate.toLocaleTimeString()}</p>
            </span>
          </div>
          <div>
            <span>
              <h3>Socials</h3>

              <p>LinkedIn</p>
            </span>

            <p>Instagram</p>

            <p>Github</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
