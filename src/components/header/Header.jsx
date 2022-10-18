import React from 'react'
import {forwardRef } from 'react';

import './header.css'

import TECH from '../../assets/TechIcon.png'
import CV from '../../assets/cv.pdf'

import {FaLinkedinIn} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'

const size = 20

const Header = forwardRef((props, ref) => {
  return (
    <header id='home' className='header' ref={ref}>
      <div className="container header__container"> 
        <h5>Hello I'm</h5> 
        <h1>Juan Pablo</h1>
        <h1 className="header__logo text-white">{'{CoudIN}'}</h1>
        <h5 >Software Developer Engineer </h5> 

        <div className='cta'>
          <a href={CV} download className='btn'>Download CV</a>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

        <div className='tech'>
          <img src={TECH} alt="tech" />   
        </div> 

        <div className='header__socials'>
          <a href="https://linkedin.com" target="_blank" className='social__icons'rel="noreferrer"><FaLinkedinIn className='icon' size={size}/></a>
          <a href="https://github.com" target="_blank" className='social__icons' rel="noreferrer"><BsGithub className='icon' size={size}/></a>
        </div>
      </div>
      
      
      <svg className='rounded-bg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#FCFFFE" fillOpacity="1" d="M0,0L80,48C160,96,320,192,480,213.3C640,235,800,181,960,170.7C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
      
     
    </header>
  )
})

export {Header}