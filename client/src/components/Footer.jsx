import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer_logo">
        <h1>
          {" "}
          <span>O</span>B
        </h1>
      </div>
      <hr />
      <div className="footer_container">
        <div className="line">
          <h3>Our Community</h3>
          <ul>
            <li>Mern developers</li>
            <li>Full stack developers</li>
          </ul>
        </div>

        <div className="line">
          <h3>Collaborate with me</h3>
          <ul>
            <li>03204872665</li>
            <li>obaidbro9@gmail.com</li>
          </ul>
        </div>

        <div className="line">
          <h3>Social</h3>
          <div className="links">
            <FaFacebook size={20} />
            <FaInstagram size={20} />
            <FaTwitter size={20} />
            <FaLinkedin size={20} />
          </div>
        </div>
      </div>
      <hr />
      <p className="end">2024 Obaid | All rights reserved</p>
    </footer>
  );
};

export default Footer;
