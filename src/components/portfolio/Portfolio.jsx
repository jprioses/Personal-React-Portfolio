import React from 'react'
import {forwardRef} from 'react';
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id:1,
    image: IMG1,
    title: 'Soccer Data Scrapper',
    github: 'https://github/',
    demos: 'https://github/'
  },
  {
    id:2,
    image: IMG2,
    title: 'Android Sewer Research App',
    github: 'https://github/',
    demos: 'https://github/'
  },
  {
    id:3,
    image: IMG3,
    title: 'Tennis Data Scrapper',
    github: 'https://github/',
    demos: 'https://github/'
  },
  {
    id:4,
    image: IMG4,
    title: 'Personal landing Page Using React.js',
    github: 'https://github/',
    demos: 'https://github/'
  },
  {
    id:5,
    image: IMG5,
    title: 'Adopt a Friend, page to find and adopt a pet, in process...',
    github: 'https://github/',
    demos: 'https://github/'
  },
  {
    id:6,
    image: IMG6,
    title: 'Web Page Data Scrapper',
    github: 'https://github/',
    demos: 'https://github/'
  }
  
]

const Portfolio = forwardRef((props, ref) => {
  return (
    <section id='portfolio' className='portfolio container--bg-white' ref={ref}>

      
      <svg className='rounded-bg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#1D2A84" fill-opacity="1" d="M0,256L80,245.3C160,235,320,213,480,181.3C640,149,800,107,960,122.7C1120,139,1280,213,1360,250.7L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>
      
      <div className='portfolio__content'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          {data.map(({id, image, title, github,demo}) => {
            return (
              <article className="portfolio__item" key={id}>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn-sec'>GitHub</a>
                  <a href={demo} className='btn-sec btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>

            )
          })}
        </div>
      </div>
      

     

    </section>
    
  )
})

export {Portfolio}
