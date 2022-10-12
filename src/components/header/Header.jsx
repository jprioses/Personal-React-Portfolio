import React from 'react'
import ME from '../../assets/TechIcon.png'
import CV from '../../assets/cv.pdf'
import './header.css'

import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Header = () => {
  return (
    <header>
      <div className="container header__container"> 
        <h5>Hello I'm</h5> 
        <h1>Juan Pablo</h1>
        <h1 className='header__logo'>{'{CoudIN}'}</h1>
        <h5 className="text-white">Software Developer Engineer </h5> 

        <div className='cta'>
          <a href={CV} download className='btn'>Download CV</a>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

        <div className='me'>
          <img src={ME} alt="me" />   
        </div> 

        <div className='header__socials'>
          <a href="https://linkedin.com" target="_blank"><BsLinkedin size={30}/></a>
          <a href="https://github.com" target="_blank"><BsGithub size={30}/></a>
        </div>

        
      </div>

    </header>
  )
}

export {Header}