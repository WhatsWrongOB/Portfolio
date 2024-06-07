import React from "react";
import resume from "/public/resume.pdf";
import about from "/public/about.svg";

const Home = () => {
  return (
    <section id="home">
      <div className="home_container">
        <div className="home_left">
          <div className="home_content">
            <p className="hello_para">Hello 👋, I am</p>
            <h1 className="home_heading animate__animated animate__bounce">Obaid Ali</h1>
            <h3 className="home_heading_two">
              <span>Full Stack Developer</span>
            </h3>
            <p className="home_para">
              I'm a Full-Stack Developer with 6 months of hands-on experience in
              designing, developing, and implementing applications and solutions
              using a range of technologies and programming languages.
            </p>
            <a className="btn_a" href={resume} target="blank">
              <button class="btn-79">
                <span>Download Cv</span>
              </button>
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
