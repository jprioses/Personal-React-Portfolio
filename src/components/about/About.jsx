import React from 'react'
import {forwardRef} from 'react';
import './about.css'
import Me from '../../assets/me-about.jpeg'
import {FiAward} from 'react-icons/fi'
import {FaLaptopCode} from 'react-icons/fa'

const About = forwardRef(({content}, ref) => {
  return (
    <section id='about' className='container--bg-white' ref={ref}>
      <h5 className='subtitle text-blue'>{content('about.startTitle')}</h5>
      <h2 className='text-blue'>{content('about.title')}</h2>

      <div className='container about__container text-blue'>
        <div className="about__me">
            <div className="about__me-image">
              <img src={Me} alt="About" />
            </div>
        </div>

        <div className="about__cards">

            <article className='about__card'>
                <FiAward className='about__icon icon-orange' size={40}/>
                <h5>{content('about.experienceCard.0')}</h5>
                <small>{content('about.experienceCard.1')}</small>
            </article>

            <article className='about__card'>
                <FaLaptopCode className='about__icon icon-orange' size={40}/>
                <h5>{content('about.projectsCard.0')}</h5>
                <small>{content('about.projectsCard.1')}</small>
            </article>

        </div>

        <div className="about__content">
            <p>{content('about.description')} </p>
        </div>
      </div>
      
      <a href="#contact" className='btn-sec btn-primary'>{content('buttons.contact')}</a>
    </section>
  )
})

export {About}