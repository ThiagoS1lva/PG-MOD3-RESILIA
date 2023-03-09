import React from "react";
import style from "./Footer.module.css";

import { FaHeart } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {

  return (
    <footer className={style.footer}>
      <div className="footer__social">
        <a href="https://www.instagram.com/">
          <FaInstagram size="40" color="#fff" />
        </a>
        <a href="https://twitter.com/login?lang=pt">
          <FaTwitter size="40" color="#fff" />
        </a>
        <a href="https://github.com/">
          <FaGithub size="40" color="#fff" />
        </a>
      </div>
      <p className="footer__copyright">Feito com <FaHeart color="#B51942" /> by  Programadores Cariocas</p>
    </footer>
  )
}

export default Footer;