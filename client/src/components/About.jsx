import React from "react";
import about from "/public/about.svg";
import html from "/public/html.svg";
import css from "/public/css.svg";
import js from "/public/js.svg";
import react from "/public/react.svg";
import node from "/public/node.svg";
import ts from "/public/ts.svg";
import ex from "/public/ex.svg";


const About = () => {
  return (
    <section id="about">
      <div className="about_container">
        <div className="about_left">
          <img src={about} alt="about_image" />
        </div>
        <div className="about_right">
          <div className="about_content">
            <h2 className="about_heading">About Me</h2>
            <p className="about_para_one">
              An experienced Full-Stack Developer with extensive knowledge in
              Web Development, Mobile Development using HTML, CSS/ Frameworks,
              JavaScript, MERN Stack
            </p>
            <p className="about_para_two">
              I love collaborating to turn visions into pixel-perfect reality.
              My aim is to strike the perfect balance between aesthetics and
              functionality, ensuring every project exceeds expectations. When
              not coding, you might find me exploring nature or diving into a
              new book. Let's connect and create something extraordinary
              together{" "}
            </p>
            <h1 className="skill_heading">
              <span>My Main Tech's</span>
            </h1>
            <div className="logos">
              <img className="animate" src={html} alt="Html" />
              <img className="animate" src={css} alt="Css" />
              <img className="animate" src={js} alt="Javascript" />
              <img className="animate" src={ts} alt="Css" />
              <img className="react animate" src={react} alt="React" />
              <img className="animate" src={node} alt="Node" />
              <img className="animate" src={ex} alt="express" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
