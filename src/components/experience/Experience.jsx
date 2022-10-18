import React from 'react'
import {forwardRef} from 'react';

import './experience.css'

import {AiOutlineHtml5} from 'react-icons/ai'
import {RiCss3Line} from 'react-icons/ri'
import {DiJavascript1} from 'react-icons/di'
import {FaReact} from 'react-icons/fa'
import {FaPython} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'


const size = 40

const Experience = forwardRef((props, ref) => {
  return (
    <section id='experience' ref={ref}>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

     <div className="container experience__container">
      <div className="experience">
        <h5>Frontend Devolopment</h5>
          <div className="experience__content">
            <article className='experience__details'>
                <AiOutlineHtml5 size={size} className='experience__details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Advance</small>
                </div>
            </article>

            <article className='experience__details'>
                <RiCss3Line size={size}  className='experience__details-icon'/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Advance</small>
                </div>
            </article>

            <article className='experience__details'>
                <DiJavascript1 size={size} className='experience__details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Advance</small>
                </div>
            </article>

            <article className='experience__details'>
                <FaReact size={size} className='experience__details-icon'/>
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
            </article>

          </div>
      </div>
      <div className="experience">
        <h5>Backend Devolopment</h5>
          <div className="experience__content">
            <article className='experience__details'>
                <FaPython size={size} className='experience__details-icon'/>
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Advance</small>
                </div>
            </article>

            <article className='experience__details'>
                <FaNodeJs size={size} className='experience__details-icon'/>
                <div>
                  <h4>Node JS</h4>
                  <small className='text-light'>Basic</small>
                </div>
            </article>

            <article className='experience__details'>
                <SiMongodb size={size} className='experience__details-icon'/>
                <div>
                  <h4>Mongo DB</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
            </article>

            <article className='experience__details'>
                <GrMysql size={size} className='experience__details-icon'/>
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
            </article>
          </div> 
      </div>
     </div>
    </section>
  )
})

export {Experience}