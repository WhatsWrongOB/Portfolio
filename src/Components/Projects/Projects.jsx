import React from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard'
import { Link } from 'react-router-dom'

const Projects = ({ portfolio}) => {
  return (
    <section className="projects">
      <h1 className="projects_heading">Pro<span>jec</span>ts</h1>
      <div className="link_btn">
        <Link to='/projectspage'>
          <button className="show_btn">Show more</button>
        </Link>
      </div>

      <div className="card_container">
        {
          portfolio.map((item) => (
            <ProjectCard key={item.id} name={item.name} description={item.description} img={item.image} url={item.url} />
          ))
        }    
      </div>
    </section>
  )
}

export default Projects