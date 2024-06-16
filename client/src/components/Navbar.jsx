import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { FaUser, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [responsive, setResponsive] = useState(false);
  const [toggleTheme, setToggleTheme] = useState("black");

  const changeBackground = () => {
    setNavActive(window.scrollY > 0);
  };

  const handleTheme = () => {
    if (toggleTheme === "black") {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setToggleTheme("white");
    } else {
      document.body.style.backgroundColor = "#212121";
      document.body.style.color = "white";
      setToggleTheme("black");
    }
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
        <span>O</span>B
      </h1>

      <ul className="menu">
        <div className={`inner_menu ${responsive ? "active" : ""}`}>
          <li
            className="close_toogle"
            onClick={handleTheme}
            style={{
              cursor: "pointer",
            }}
          >
            {toggleTheme === "white" ? <FaMoon /> : <FaSun />}
          </li>
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
          {/* <li className="link">
            <RouterLink to="/login">
              <FaUser size={20} className="user_icon" />
            </RouterLink>
          </li> */}
        </div>
        <div className="hamburger">
          <div
            className="mobile_tooglr"
            onClick={handleTheme}
            style={{
              cursor: "pointer",
            }}
          >
            {toggleTheme === "white" ? (
              <FaMoon size={20} />
            ) : (
              <FaSun size={20} />
            )}
          </div>
          <div className="hamburger_btn" onClick={hamburgerClick}>
            <Hamburger size={20} />
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
