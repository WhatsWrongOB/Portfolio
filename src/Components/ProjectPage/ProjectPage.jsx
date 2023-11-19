import React from 'react'
import './ProjectPage.css'
import ProjectCard from '../Projects/ProjectCard'

const Skills = ({ projects }) => {
  return (
    <section className="project_page">
      <h1 className="project_page_heading">Pro <span>jects</span>:-</h1>
      <div className="project_card_container">
        {
          projects.map((item) => (
            <ProjectCard key={item.id} name={item.name} description={item.description} img={item.image} url={item.url} />
          ))
        }
      </div>
    </section>
  )
}

export default Skills