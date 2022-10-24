import React from 'react'
import {forwardRef} from 'react';
import './footer.css'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const size = 20
const Footer = forwardRef((props, ref) =>  {
  return (
    <footer ref={ref}>
      {/* <a href="#home" className='footer__logo' >{'{CoudIN}'}</a> */}
      <ul className='permalinks'>
        <li><a href="#home" >Home</a></li>
        <li><a href="#about" >About</a></li>
        <li><a href="#experience" >Experience</a></li>
        <li><a href="#services" >Services</a></li>
        <li><a href="#portfolio" >Portfolio</a></li>
        <li><a href="#contact" >Contact</a></li>
      </ul>

      <div className="footer__socials">
          <a href="https://www.linkedin.com/in/juan-pablo-rios-escobar-8a460a24b/" className='social__icons'><FaLinkedinIn className='icon' size={size}/></a>
          <a href="https://github.com/jprioses"  className='social__icons'><BsGithub className='icon' size={size}/></a>
          <a href="https://twitter.com" className='social__icons'><BsInstagram size={size}/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; {'{CoudIN}'}. All rights reserved.</small>
      </div>
    </footer>
  )
})

export {Footer}