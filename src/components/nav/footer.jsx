import React from "react";
import "./nav.css";
import Link from "next/link";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
const Footer = () => {
  return (
    <div className="footer">
      <Link href="https://www.linkedin.com/in/wahyubdmn/">
        <IoLogoLinkedin />
      </Link>
      <Link href="https://www.instagram.com/_rb.why/">
        <IoLogoInstagram />
      </Link>
      <Link href="https://github.com/rabirabii">
        <IoLogoGithub />
      </Link>
    </div>
  );
};

export default Footer;
