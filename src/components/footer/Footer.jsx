import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'

const size = 20
const Footer = () => {
  return (
    <footer>
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
        <a href="https://facebook.com" className='social__icons' ><BsFacebook  size={size}/></a>
        <a href="https://instagram.com" className='social__icons'><FiInstagram size={size}/></a>
        <a href="https://twitter.com" className='social__icons'><BsTwitter size={size}/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; {'{CoudIN}'}. All rights reserved.</small>
      </div>
    </footer>
  )
}

export {Footer}