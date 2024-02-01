import React from 'react'
import { Link } from 'react-router-dom'
import react from '/public/react.svg'


const Footer = () => {
  return (
    <div className="footer">
      <h1 className='logo'><span>O</span>baid</h1>
      <p className="footer_para">This site was made with
        <img src={react} alt="react" />
        alot of ❤️</p>
      <div className="social_links">
        <Link to='/'>
          <img src="https://iobaidu5.netlify.app/static/media/github.a855c3975c028d8069f5.png" alt="github" />
        </Link>

        <Link to='/'>
          <img src="https://iobaidu5.netlify.app/static/media/instagram.75e0546a6b5abe4c0506.png" alt="instagram" />
        </Link>

        <Link to='/'>
          <img src="https://iobaidu5.netlify.app/static/media/linkedin.f249b38224ca41a0b909.png" alt="linkdin" />
        </Link>
      </div>
    </div>
  )
}

export default Footer