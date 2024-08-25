"use client";
import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import "./burger.css";
import { AnimatePresence } from "framer-motion";
import Nav from "../nav/nav";
import { usePathname } from "next/navigation";

const Burger = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    if (open) setOpen(false);
  }, [pathName]);

  return (
    <>
      <header>
        <div className="row">
          <div className="header">
            <div className="headerLeft">
              <div
                className={`headerIcon ${open ? "burgerActive" : ""}`}
                id="sideBtn"
                onClick={() => setOpen(!open)}
              >
                <div className="burger"></div>
              </div>
            </div>
            <div className="headerRight">
              <span data-content="PORTFOLIO">
                <span>PORTFOLIO</span>
              </span>
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence>{open && <Nav isOpen={open} />}</AnimatePresence>
    </>
  );
};

export default Burger;
