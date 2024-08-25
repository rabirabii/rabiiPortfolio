"use client";
import About from "@/components/About/about";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
const Section = ({ children, id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

const Page = () => {
  return (
    <Section id="about">
      <About />
    </Section>
  );
};

export default Page;
