import React from 'react'
import './Button.css'
import cv from '../../Images/cv.jpg'

const Button = () => {
  return (
    <a href={cv} download="Obaid Ali CV">
    <button className="btn">Download Cv
      <i className="fa fa-download" aria-hidden="true"></i>
    </button>
  </a>
  )
}

export default Button