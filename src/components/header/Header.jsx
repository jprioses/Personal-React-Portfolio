import React from 'react'
import {forwardRef } from 'react';
import './header.css'
import SPACV from "../../assets/CV_SPA_Juan_Pablo_Rios.pdf"
import ENGCV from "../../assets/CV_ENG_Juan_Pablo_Rios.pdf"
import TECH from '../../assets/TechIcon.png'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {BsGlobe} from 'react-icons/bs'
import {TiArrowSortedDown} from 'react-icons/ti'

import i18n from "i18next";
import 'flag-icon-css/css/flag-icons.min.css';

const size = 20

const Header = forwardRef(({content}, ref) => {

  const [showLngList, setShowLngList] = React.useState(false);

  return (
    <header id='home' className='header' ref={ref}>
    
      <div className="dropdown__language">
        <button className="btn-dropdown-toggle" type="button" onClick={() => { 
          (showLngList===false) ? setShowLngList(true):setShowLngList(false)}}>
          <BsGlobe className='icon-orange' size={30}/>
          <TiArrowSortedDown className='icon-orange icon-arrow' size={30}/>
        </button>
        <div className={(showLngList===true) ? "dropdown__language-menu show-menu":"dropdown__language-menu"}>
          <button onClick={()=> {i18n.changeLanguage('en'); setShowLngList(false)}} className="dropdown-item"><span className="flag-icon flag-icon-gb"></span>English</button>
          <button onClick={()=> {i18n.changeLanguage('es'); setShowLngList(false)}} className="dropdown-item"><span className="flag-icon flag-icon-es"></span>Español</button>
        </div>
      </div>

      <div className="container header__container"> 
        
        <div className='intro'>

          <h5>{content('header.startTitle')}</h5> 

          <h1>Juan Pablo</h1>
          {/* <h1 className="header__logo text-white">{'{CoudIN}'}</h1> */}
          <h2 >{content('header.description')} </h2> 

          <div className='cta'>
            <a href={(content('buttons.cV.1')==='ENG')? ENGCV : SPACV}download className='btn'>{content('buttons.cV.0')}</a>
            <a href="#contact" className='btn btn-primary'>{content('buttons.contact')}</a>
          </div>
       
        </div>
        
        <div className='tech'>
          <img src={TECH} alt="tech" />   
        </div> 

      </div>
      
      <div className='header__socials'>
          <a href="https://linkedin.com" target="_blank" className='social__icons'rel="noreferrer"><FaLinkedinIn className='icon' size={size}/></a>
          <a href="https://github.com" target="_blank" className='social__icons' rel="noreferrer"><BsGithub className='icon' size={size}/></a>
      </div>

      <svg className='rounded-bg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#FCFFFE" fillOpacity="1" d="M0,0L80,48C160,96,320,192,480,213.3C640,235,800,181,960,170.7C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
      
    </header>
  )
})

export {Header}