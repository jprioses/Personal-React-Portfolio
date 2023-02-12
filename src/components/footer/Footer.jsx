import React from 'react'
import {forwardRef} from 'react';
import './footer.css'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const size = 20
const Footer = forwardRef(({content}, ref) =>  {
  return (
    <footer ref={ref}>
      {/* <a href="#home" className='footer__logo' >{'{CoudIN}'}</a> */}
      <ul className='permalinks'>
        <li><a href="#home" >{content('footer.0')}</a></li>
        <li><a href="#about" >{content('footer.1')}</a></li>
        <li><a href="#experience" >{content('footer.2')}</a></li>
        <li><a href="#services" >{content('footer.3')}</a></li>
        <li><a href="#portfolio" >{content('footer.4')}</a></li>
        <li><a href="#contact" >{content('footer.5')}</a></li>
      </ul>

      <div className="footer__socials">
          <a href="https://www.linkedin.com/in/juan-pablo-rios-escobar-8a460a24b/" target='_blank' rel="noreferrer" className='social__icons'><FaLinkedinIn className='icon' size={size}/></a>
          <a href="https://github.com/jprioses?tab=repositories" target='_blank' rel="noreferrer"  className='social__icons'><BsGithub className='icon' size={size}/></a>
          <a href="https://instagram.com/jprioses?igshid=YmMyMTA2M2Y=" target='_blank' rel="noreferrer" className='social__icons'><BsInstagram size={size}/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; {'{CoudIN}'}. {content('rigths')}</small>
      </div>
      
    </footer>
  )
})

export {Footer}