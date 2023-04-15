import React from 'react'
import './hireMe.css'
import Image from '../../assets/gigii.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaTelegramPlane } from 'react-icons/fa';
const HireMe = ()=> {
    return (
      <div>
       <div className='hire-meTitle'>Hire<span className="highlight"> Me</span></div>
       <div className='content-hireMe'> With my sharp coding skills combined with excellent knowledge in the entire application stack from UI design to backend programming languages I am confident that I can quickly add value to your existing development team in 
       order to complete projects faster with fewer errors while increasing user satisfaction across all platforms. My programming expertise paired with my dedication to detail and customer 
       satisfaction also makes me an ideal candidate for this role.</div>
       <div className='hire-me' data-aos="">
       <div className='hireMe-text'>
        <div className='hire-mediv'>
    <p className='new-hireMe'>Skilled Team Player and a Hardworking software developer focused on completing work quickly to consistently exceed targets.
         Reliable team member accustomed to taking on challenging tasks. Dedicated to business success.</p>

        </div>

 <div><img src={Image} className="me-image"/></div>
 
       </div>
       
       <div className='design serve'>
       {/* I have extensive experience in designing attractive front end user interfaces for website development. */}
       UI/UX design
        </div> 
        <div className='fullstack serve'>
            Full Stack Website development
        </div> 
        <div className='mobile-app serve'>
            Mobile Application Develpment
        </div> 
        </div>
      </div>
      
    )
  }
  
  export default HireMe 