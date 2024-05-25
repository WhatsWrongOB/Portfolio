import React from "react";
import me from "/public/me.jpeg";
import cv from "/public/cv.jpg";
import about from "/public/about.svg";

const Home = () => {
  return (
    <section id="home">
      <div className="home_container">
        <div className="home_left">
          <div className="home_content">
            <p>Hello 👋, I am</p>
            <h1 className="home_heading">Obaid Ali</h1>
            <h3 className="home_heading_two">
              <span>Full Stack Developer</span>
            </h3>
            <p className="home_para">
              I'm a Full-Stack Developer with 6 months of hands-on experience in
              designing, developing, and implementing applications and solutions
              using a range of technologies and programming languages.
            </p>
            <a href={cv} target="blank">
              <button className="home_btn">Download Cv</button>
            </a>
          </div>
        </div>
        <div className="home_right">
          <img className="obaid_img" src={about} alt="Obaid_image" />
        </div>
      </div>
    </section>
  );
};

export default Home;
