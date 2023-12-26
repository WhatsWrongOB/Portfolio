import React from 'react'
import './About.css'
import me from '../../Images/me.jpeg'
import Button from '../Button/Button'

const About = () => {
  return (
    <section className="about">
      <div className="about_container">
        <div className="about_left">
          <div className="img_border">
            <img src={me} alt="me" />
          </div>
        </div>
        <div className="about_right">
          <h1 className="about_heading">About <span>Me</span></h1>
          <h4 className="about_heading_two">Front End Develepor</h4>
          <p className="about_para">Hey,👋 I'm Obaid Ali Siddiqui, a dedicated front-end developer driven by a passion for crafting engaging digital experiences. My journey into web development was sparked by a fascination with merging design and code. Specializing in HTML, CSS, and JavaScript, I transform concepts into visually stunning, user-friendly websites. I thrive on creating seamless, responsive interfaces and stay updated with the latest frameworks like React js. Blending creativity with technical expertise, I love collaborating to turn visions into pixel-perfect reality. My aim is to strike the perfect balance between aesthetics and functionality, ensuring every project exceeds expectations. When not coding, you might find me exploring nature or diving into a new book. Let's connect and create something extraordinary together !</p>
          <Button />
        </div>
      </div>
    </section>
  )
}

export default About