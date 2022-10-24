import React from 'react'
import {forwardRef} from 'react';

import './about.css'

import Me from '../../assets/me-about.jpeg'
import {FiAward} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = forwardRef((props, ref) => {
  return (
    <section id='about' className='container--bg-white' ref={ref}>
      <h5 className='subtitle text-blue'>Get To Know</h5>
      <h2 className='text-blue'>About Me</h2>

      <div className='container about__container text-blue'>
        <div className="about__me">
            <div className="about__me-image">
              <img src={Me} alt="About" />
            </div>
        </div>


        <div className="about__cards">

            <article className='about__card'>
                <FiAward className='about__icon' size={40}/>
                <h5>Experience</h5>
                <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
                <VscFolderLibrary className='about__icon' size={40}/>
                <h5>Projects</h5>
                <small>20+ Completed</small>
            </article>

        </div>

        <div className="about__content">

            <p>My name is Juan Pablo Ríos Escobar, I'm an engineer, passionate about solving problems and bringing new things to real life. As a developer I found a way to do both, thats why I love it. With me you can be confident that I will do my best to get to your goals.
            I can automate your task, collect data, develop and manage data bases, analise and organise data, develop Android native and Web apps both frontend and backend side. 
            </p>
        
        </div>

        
      </div>
      
      <a href="#contact" className='btn-sec btn-primary'>Let's Talk</a>
    </section>
  )
})

export {About}