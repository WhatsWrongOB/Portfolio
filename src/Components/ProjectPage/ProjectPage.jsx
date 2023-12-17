import React from 'react'
import './ProjectPage.css'
import ProjectCard from '../Projects/ProjectCard'
import { useState } from 'react'

const Skills = ({ projects }) => {

  const [search, setSearch] = useState('')

  const filteredProjects = projects.filter((item) => {
    const check = item.name.toLowerCase().includes(search.toLowerCase());
    return check;
  });


  return (
    <section className="project_page">
      <h1 className="project_page_heading">Pro <span>jects</span>:-</h1>
      <input type="search"
        className='search'
        placeholder='search projets'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="project_card_container">
        {

          filteredProjects.length === 0 ? (<h1>No Project Found</h1>) : (

            filteredProjects.map((item,index) => (
              <ProjectCard key={index} name={item.name} description={item.description} img={item.image} url={item.url} />
            ))
          )
        }
      </div>
    </section>
  )
}

export default Skills