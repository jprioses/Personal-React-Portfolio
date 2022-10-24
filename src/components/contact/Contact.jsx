import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef,  forwardRef } from 'react';
import emailjs from 'emailjs-com'

const size = 50

 const Contact = forwardRef((props, ref) => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sjedtr7', 'template_personal_web', form.current, 'xTRGIrwXQoVZ55_nr')
    console.log(form.current)
    e.target.reset()
     
  };
  
  return (
   <section id='contact' className='contact' ref={ref}>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <a href="mailto:jprioses@outlook.com" className="contact__option">
            <MdOutlineEmail  size={size} className='contact__option-icon'/>
            <h4>jprioses@outlook.com</h4>
            <p>Send a message</p>
          </a>
          <a href="https://api.whatsapp.com/send?phone=573164938408" className="contact__option">
            <BsWhatsapp size={size} className='contact__option-icon'/>
            <h4>+57 316 493 8408</h4>
            <p>Send a message</p>
          </a>
          
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Your Full Name' required />
            <input type="email" name="email" placeholder='Your Email' required />
            <textarea name="message" rows='7' placeholder='Your Message' required />
            <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
})

export {Contact}