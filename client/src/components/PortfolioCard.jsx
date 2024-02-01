import React from 'react'
import { Link } from 'react-router-dom'
import File from '/public/file.svg'
import github from '/public/github.svg'


const PortfolioCard = ({ project }) => {
    return (
        <div className="portfolio_card">
            <div className="card_inner">
                <div className="upper">
                    <img className='file_img' src={File} alt="file" />
                    <Link to={project.link} className='github_img'>
                        <img src={github} alt="github" />
                    </Link>
                </div>
                <h1 className="project_name">{project.name}</h1>
                <p className="portfolio_para">{project.description}</p>
                <div className="portfolio_bottom">
                    <p>{project.technology}</p>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard