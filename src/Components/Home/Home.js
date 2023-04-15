import React from 'react'
import imageHome from '../../assets/home-image.png'
import './home.css'
import Typical from "react-typical"
import { Form } from 'react-bootstrap'
import iconOne from '../../assets/iconOne.png'
import iconTwo from '../../assets/iconTwo.png'
import iconThree from '../../assets/iconThree.png'
import Nav from '../Nav/Nav'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
function Home() {
  return (
    
    <div className='home-page'>
     <Nav/>
            <div>
       
            <div className='home-background'>
          
         <div>
         
		 <div className="circle-div"></div>
     <div className="circle-divTwo"></div>
            <div className="image-back">
<img src={imageHome} className="myhome-imagee"/>
            </div>
			<div className="circle-divOne"></div>
           </div>
        <div className='profile-details'>
        <div className="profile-name">
         <span className="primary-text"> {" "} 
            Hello I'm <span className="highlighted-text">Gelila</span>
            </span>
         </div>
         <div className='type'>
                {" "}
                <Typical
                loop={Infinity}
                steps={["Enthusiastic developer", 1000,
                "MERN Stack Developer", 1000, 
                "JavaScript developer", 1000,
                "React Native ", 1000,]}
                />
            </div>
            <div>
            <span className="profile-intro">
            I'm a highly motivated Web and Application Full Stack Developer with a passion for designing and developing beautiful User interfaces, I have a track record of building unique user experiences that look great and are easy to use. My specialized areas of expertise include specialties, 
            and I strive to remain on the cutting edge of new technologies to bring the best development solutions to my clients. 
            I'm always looking for new projects and wonderful people so please don't hesitate to reach out with any ideas you might have! 
            </span><br/>
           <a href="#Contact"> <div className="center-button"> 
           <button className='view-certificates'><p className='btn-view'>Say Hello <FaTelegramPlane/></p></button>
           </div></a>
           <div className="colz-items">
               <a href="https://github.com/gelila-t1"><FaGithub className='social-icons'/></a>
               <a href="https://www.linkedin.com/in/gelila-tesfaye-06811b239"><FaLinkedinIn className='social-icons'/></a>
               <a href = "mailto: gelilatesfaye13@gmail.com"><FaEnvelope className='social-icons'/></a>
               <a href="tel:+251963412925"><FaPhoneAlt className='social-icons'/></a>  
              </div>
            </div>
           
        </div>
          
      </div>
      </div>
    
    </div>
  )
}

export default Home