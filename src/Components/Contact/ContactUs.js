import React from 'react'
import './contactMe.css'
import { FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
function ContactUs() {
  return (
    <div>
       <div className='contactMe-title'><span className='highlight'> Contact</span> Me</div>
    <div className='contactMe'>
        <div className='section-one'>
         <h1 className='get'> Get in Touch with Me</h1>
         <a href="tel:+251963412925" className="decor"><p className='contact-desc'><FaPhoneAlt className='con-icon'/>+251963412925</p></a>
        <a href = "mailto: gelilatesfaye13@gmail.com" className="decor"> <p className='contact-desc'><FaEnvelope className='con-icon'/>gelilatesfaye13@gmail.com</p></a>
          <a href="https://www.linkedin.com/in/gelila-tesfaye-06811b239" className="decor"><p className='contact-desc'><FaLinkedinIn className='con-icon'/>gelila-tesfaye</p></a>
       <a href="https://github.com/gelila-t1" className="decor">  <p className='contact-desc'><FaGithub className='con-icon'/>gelila-t1</p></a>
        </div>
       <form>
       <div className='section-two contact-section'>
           <div> 
            <h3 className="contact-title">Name</h3>
            <input type={Text} className='inputs' placeholder="Name" required/>
            </div>
            <div>
                <h3 className="contact-title">Email</h3>
                 <input type={Text} className='inputs' placeholder="Email" required/>
            </div>
            <div>
                <h3 className="contact-title">Message</h3>
                 <input type={Text} className='message-input' placeholder='Message' required/>
            </div>
            <button className='btn-send'><p className ="send">Send</p></button>
        </div>
       </form>
       </div>
       
             
       </div>
  )
}

export default ContactUs