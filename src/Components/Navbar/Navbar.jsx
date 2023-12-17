import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {

  const [nav, setNav] = useState(false)

  const changeBackground = () => {

    if (window.scrollY >= 10) {
      setNav(true)
    }
    else {
      setNav(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  const [click, setClick] = useState(false);

  const btnClick = () => {
    setClick(!click)

  }

  return (
    <nav className={nav ? 'nav_active' : nav}>
      <Link to='home' smooth={true} duration={500}>
        <div className="logo">ＯＢＡＩＤ</div>
      </Link>
      <ul className={`menu ${click ? "active" : ""}`}>
        <li><Link className='nav_link' to='home' smooth={true} duration={500}>Home</Link></li>
        <li><Link className='nav_link' to='about' smooth={true} duration={500}>About</Link></li>
        <li><Link className='nav_link' to='skills' smooth={true} duration={500}>Skills</Link></li>
        <li><Link className='nav_link' to='projects' smooth={true} duration={500}>Projects</Link></li>
        <li><Link className='nav_link' to='contact' smooth={true} duration={500}>Contact</Link></li>
      </ul>

      <div className="hamburger" onClick={btnClick}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  )
}

export default Navbar