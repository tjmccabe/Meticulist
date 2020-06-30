import React from 'react';
import { FaLinkedin, FaGithub, FaAngellist, FaUserCircle } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer">
      <div id="footer-heading">
        <span id="my-name">
          TJ McCABE
        </span>
      </div>
      <div id="footer-links">
        <a
          className="footer-link"
          href="https://tjmccabe.me/"
          target="_blank"
        >
          <FaUserCircle className="footer-logo footer-id-logo" />
          Portfolio
        </a>
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/tj-mccabe/"
          target="_blank"
        >
          <FaLinkedin className="footer-logo footer-li-logo" />
          LinkedIn
        </a>
        <a
          className="footer-link"
          href="https://github.com/tjmccabe/Meticulist"
          target="_blank"
        >
          <FaGithub className="footer-logo footer-git-logo" />
          GitHub
        </a>
        <a
          className="footer-link"
          href="https://angel.co/u/tj-mccabe-3"
          target="_blank"
        >
          <FaAngellist className="footer-logo footer-al-logo" />
          AngelList
        </a>
      </div>
      <div id="copyright">
        © Copyright 2020. All rights reserved.
      </div>
    </div>
  )
}

export default Footer;