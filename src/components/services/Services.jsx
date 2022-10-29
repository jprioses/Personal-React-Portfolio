import React from 'react'
import {forwardRef } from 'react';
import './services.css'
import {BsClipboardData} from 'react-icons/bs'
import {FiDatabase} from 'react-icons/fi'
import {BsGlobe} from 'react-icons/bs'
import {AiOutlineMobile} from 'react-icons/ai'
import {DiCodeBadge} from 'react-icons/di'


const size = 30
const Services  = forwardRef(({content}, ref) => {
  return (
    <section id='services' className='services' ref={ref}>
      
      <h5>{content('services.startTitle')}</h5>
      <h2>{content('services.title')}</h2>

      <div className="container services__container">
    
        <article className='service'>
            <BsGlobe size={size} className='service__icon icon-orange'/>
            <h3>{content('services.cards.webDev.0')}</h3>
            <p>{content('services.cards.webDev.1')}</p>
        </article>
        <article className='service'>
            <BsClipboardData size={size} className='service__icon icon-orange'/>
            <h3>{content('services.cards.webScraping.0')}</h3>
            <p>{content('services.cards.webScraping.1')}</p>
        </article>
        <article className='service'>
            <FiDatabase size={size} className='service__icon icon-orange'/>
            <h3>{content('services.cards.databases.0')}</h3>
            <p>{content('services.cards.databases.1')}</p>
        </article>
        <article className='service'>
            <AiOutlineMobile size={size} className='service__icon icon-orange'/>
            <h3>{content('services.cards.androidApps.0')}</h3>
            <p>{content('services.cards.androidApps.1')}</p>
        </article>
        <article className='service'>
            <DiCodeBadge size={size} className='service__icon icon-orange'/>
            <h3>{content('services.cards.macros.0')}</h3>
            <p>{content('services.cards.macros.1')}</p>
        </article>
      </div>

    </section>
  )
})

export {Services}