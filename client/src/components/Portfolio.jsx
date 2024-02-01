import React from 'react'
import './PortfolioCard'
import PortfolioCard from './PortfolioCard'
import { useStore } from '../Context'

const Portfolio = () => {

  const { projects } = useStore();
  return (
    <section id="portfolio">
      <h1 className="portfolio_heading">My Portfolio</h1>
      <div className="portfolio_container">
        {
          projects.map((project) => (
            <PortfolioCard key={project._id} project = {project}/>
          ))
        }


      </div>
    </section>
  )
}

export default Portfolio