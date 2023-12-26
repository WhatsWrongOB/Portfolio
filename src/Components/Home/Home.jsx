import React from 'react'
import './Home.css'
import me from '../../Images/me.jpeg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="home">
      <div className="home_container">
        <div className="home_left_content">
          <h3 className="home_heading">Hello,👋 it's Me</h3>
          <h1 className="home_heading_two">Obaid Ali <span>Siddiqui</span></h1>
          <h3 className="home_heading_three">And <span> I'm a Front</span>  End developer</h3>
          <p className="home_para">Front-end developer skilled in clean code and compelling design. I specialize in creating seamless user experiences.</p>
          <div className="social_media_icons">
            <Link to="https://www.facebook.com/baid.ali.92?mibextid=ZbWKwL">
              <i className="icon fa-brands fa-facebook" ></i>
            </Link>
            <Link to="https://www.instagram.com/its_0baid_/?igshid=MTRmdjc4bzl6ODJxdg%3D%3D">
              <i className="icon fa-brands fa-instagram"></i>
            </Link>
            <Link to="https://wa.me/+923204872665">
              <i className="icon fa-brands fa-whatsapp"></i>
            </Link>
            <Link to="https://github.com/WhatsWrongOB/">
              <i className="icon fa-brands fa-github"></i>
            </Link>
          </div>
        </div>
        <div className="home_right_content">
          <img src={me} alt="me" />
        </div>
      </div>
    </section>
  )
}

export default Home