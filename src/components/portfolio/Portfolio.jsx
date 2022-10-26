import React from 'react'
import {forwardRef} from 'react';
import './portfolio.css'
import SOCCERDATA from '../../assets/soccer.jpg'
import APP from '../../assets/app.jpg'
import TENNIS from '../../assets/tennis.jpg'
import LP from '../../assets/webpage.jpg'
import LP2 from '../../assets/webpage-1.jpg'
import IMG6 from '../../assets/portfolio6.jpg'


const Portfolio = forwardRef(({content}, ref) => {

  const data = [
    {
      id:1,
      image: SOCCERDATA,
      title: content('portfolio.0'),
      github: 'https://github/',
      demos: 'https://github/'
    },
    {
      id:2,
      image: APP,
      title: content('portfolio.1'),
      github: 'https://github/',
      demos: 'https://github/'
    },
    {
      id:3,
      image: TENNIS,
      title: content('portfolio.2'),
      github: 'https://github/',
      demos: 'https://github/'
    },
    {
      id:4,
      image: LP,
      title: content('portfolio.3'),
      github: 'https://github/',
      demos: 'https://github/'
    },
    {
      id:5,
      image: LP2,
      title: content('portfolio.4'),
      github: 'https://github/',
      demos: 'https://github/'
    },
    {
      id:6,
      image: IMG6,
      title: content('portfolio.5'),
      github: 'https://github/',
      demos: 'https://github/'
    }
    
  ]
  return (
    <section id='portfolio' className='portfolio container--bg-white' ref={ref}>

      <svg className='rounded-bg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#1D2A84" fillOpacity="1" d="M0,256L80,245.3C160,235,320,213,480,181.3C640,149,800,107,960,122.7C1120,139,1280,213,1360,250.7L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
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
                  <a href={demo} className='btn-sec btn-primary' target='_blank' rel="noreferrer">{content('buttons.briefing')}</a>
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
