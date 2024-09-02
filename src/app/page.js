"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { motion, useInView } from "framer-motion";
import About from "@/components/About/About";
import Title from "@/components/open/Title";
import TextFlow from "@/components/Text-Flow/textFlow";
import Work from "@/components/Work/Work";
import Footer from "@/components/Contact/Contact";

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

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      direction: "vertical",
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Make lenis globally available
    window.lenis = lenis;

    return () => {
      window.lenis = null;
      lenis.destroy();
    };
  }, []);

  return (
    <main>
      <Section id="title">
        <Title />
      </Section>
      <Section id="textflow">
        <TextFlow />
      </Section>
      <Section>
        <About />
      </Section>
      <Section id="webSite">
        <Work />
      </Section>
    </main>
  );
}
