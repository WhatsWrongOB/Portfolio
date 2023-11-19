import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ name, description, img, url }) => {
    return (
        <div className="project_card">
            <img src={img} alt="project_img" />
            <h1 className="card_heading">{name}</h1>
            <p className="card_para">{description}</p>
            <Link to={url}>
                <button className="card_btn">View</button>
            </Link>
        </div>
    )
}

export default ProjectCard