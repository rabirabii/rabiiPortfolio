"use client";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "./footer";
import LinkStyle from "./Link";
import Curve from "./curve";
import "./nav.css";
import { menuSlide } from "./anim";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Nav = ({ isOpen }) => {
  useEffect(() => {
    const handleLinkClick = (e, href) => {
      if (href.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement && window.lenis) {
          window.lenis.scrollTo(targetElement, {
            offset: -100,
          });
        }
      }
    };

    const links = document.querySelectorAll(".sideNav a");
    links.forEach((link) => {
      link.addEventListener("click", (e) =>
        handleLinkClick(e, link.getAttribute("href"))
      );
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", (e) =>
          handleLinkClick(e, link.getAttribute("href"))
        );
      });
    };
  }, []);

  return (
    <motion.nav
      initial="initial"
      animate="enter"
      exit="exit"
      variants={menuSlide}
    >
      <div className={`sideNav ${isOpen ? "open" : ""}`}>
        <ul>
          {navItems.map((data, index) => (
            <li key={index}>
              <a href={data.href}>{data.title}</a>
            </li>
          ))}
        </ul>
        <div className="navBg"></div>
      </div>

      <Footer />
    </motion.nav>
  );
};

export default Nav;
