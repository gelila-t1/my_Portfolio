import React from 'react'
import './footer.css'
import { FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
function Footer() {
  return (
    <div>
        <div className="footer-text">lorem ipsum</div>
         <div className='footer-links'>
            <div> <a href="#Home" className='link-footer'>Home</a></div>
           <div><a href="#About" className='link-footer'>About</a></div>
           <div> <a href="#Skills" className='link-footer'>Skill</a></div>
           <div><a href="#Projects" className='link-footer'>Projects</a></div>
           <div> <a href="#Testimonial" className='link-footer'>Testimonial</a></div>
           <div><a href="#Contact" className='link-footer'>Contact</a></div>
          </div>
          <div className="footer">
            <div className='copyright'>2023 | Copyright © gelila</div>
          <div className="footer-icons">
               <a href="tel:+251963412925"><FaPhoneAlt className='social-icons'/></a> 
               <a href="https://github.com/gelila-t1"><FaGithub className='social-icons'/></a>
               <a href="https://www.linkedin.com/in/gelila-tesfaye-06811b239"><FaLinkedinIn className='social-icons'/></a>
               <a href = "mailto: gelilatesfaye13@gmail.com"><FaEnvelope className='social-icons'/></a> 
              </div>
         </div>
    </div>
  )
}

export default Footer