import React from 'react'
import './Skills.css'
import Button from '../Button/Button'

const Skills = () => {
  return (
    <section className="skills">
      <h1 className="skills_heading">Ski<span>lls</span></h1>
      <div className="skills_container">
        <div className="skills_left">
          <h1 className="skills_left_heading">6<span> months of</span> Experience</h1>
          <p className="skills_para">I bring a dedicated skill set in front-end development encompassing HTML, CSS, Bootstrap, JavaScript, and React. Proficiency in structuring HTML5 content, employing CSS3 for design, With a firm grasp on JavaScript, I design dynamic web functionalities and apply React to craft engaging user interfaces. My eagerness to learn and apply these skills to real-world projects drives my commitment to creating seamless, user-centric web experiences. As I continue to grow and learn, I am enthusiastic about
            contributing innovative solutions and enriching projects within the dynamic realm of web development.</p>
            <Button/>
        </div>
        <div className="skills_right">
          <div className="line_one">
          <div className="circle">
            <p className="circle_para">Html</p>
            <p className="percentage">80%</p>
            </div>
          <div className="circle">
          <p className="circle_para">Css</p>
            <p className="percentage">80%</p>
          </div>
          </div>
         <div className="line_two">
          <div className="circle">
          <p className="circle_para">Javascript</p>
            <p className="percentage">55%</p>
          </div>
          <div className="circle">
          <p className="circle_para">React js</p>
            <p className="percentage">50%</p>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills