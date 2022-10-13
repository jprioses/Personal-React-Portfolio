import React from 'react'
import './services.css'
import {BsClipboardData} from 'react-icons/bs'
import {FiDatabase} from 'react-icons/fi'
import {BsGlobe} from 'react-icons/bs'
import {AiOutlineMobile} from 'react-icons/ai'
import {DiCodeBadge} from 'react-icons/di'


const size = 30
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
    
        <article className='service'>
            <BsGlobe size={size} className='service__icon'/>
            <h3>Web Development</h3>
            <p>I will do responsive web apps using MERN stack (MongoDB, Express, React.js, Node.js).</p>
        </article>
        <article className='service'>
            <BsClipboardData size={size} className='service__icon'/>
            <h3>Web Scraping</h3>
            <p>I will scrap any web page with Python and store the records as .json, .txt, .csv or in a database as well.</p>
        </article>
        <article className='service'>
            <FiDatabase size={size} className='service__icon'/>
            <h3>Databases</h3>
            <p>I will create and manage SQL and NoSQL databases with MySQL or MariaDB and MongoDb. </p>
        </article>
        <article className='service'>
            <AiOutlineMobile size={size} className='service__icon'/>
            <h3>Android Apps</h3>
            <p>I will develop Android native apps using Kotlin or Java with Android Studio or React Native.</p>
        </article>
        <article className='service'>
            <DiCodeBadge size={size} className='service__icon'/>
            <h3>Macros</h3>
            <p>I will develop Microsoft Office and Google Apps macros to automate task.</p>
        </article>
      </div>
    </section>
  )
}

export {Services}