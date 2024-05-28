import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Toggle from "./Toggle";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [responsive, setResponsive] = useState(false);

  const changeBackground = () => {
    setNavActive(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);


  const hamburgerClick = () => {
    setResponsive(!responsive);
  };

  return (
    <nav className={navActive ? "nav_active" : "nav"}>
      <h1 className="logo">
        <span>H</span>ashir
      </h1>

      <ul className="menu">
        <li className="toggleBtn" >
          {/* <Toggle /> */}
        </li>
        <div className={`inner_menu ${responsive ? "active" : ""}`}>
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} duration={500}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
          <li className="link">
            <RouterLink to="/login">
              <FaUser size={20} className="user_icon" />
            </RouterLink>
          </li>
        </div>
        <div className="hamburger" onClick={hamburgerClick}>
          <Hamburger size={20} />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
