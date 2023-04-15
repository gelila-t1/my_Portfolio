import React, {useEffect} from 'react'
import { useState } from 'react';
import "./About.css"
import Image from '../../assets/gigii.png'
import dummyAvatar from '../../assets/dummyAvatar.png'
import resume from '../../assets/gelilaResume.pdf'
import level from '../../assets/level.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaUniversity } from 'react-icons/fa';
import { FaToolbox} from 'react-icons/fa';
import { FaLongArrowAltUp} from 'react-icons/fa';
import Counter from './Counter'
import HireMe from './HireMe';
export default function AboutMe() {
  useEffect(()=>{
    AOS.init({duration: 1500});
  },[])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="about">
      <h1 className="heading">About <span className="highlighted-text"> Me </span></h1>
      <div className="AboutUs-section">
      {/* <div className="image" data-aos="fade-down">
      
         <div><img src={dummyAvatar} className="about-image"/></div>
         <div><img src={dummyAvatar} className="about-imageTwo"/></div>
        </div> */}
        <div className="flex-row" data-aos="fade-up">
        <div><img src={level} className="level"/></div>
           
        <div className='flex-column'>
        <div>
        <p className="education-title"><FaUniversity className='edu-icon'/>Education</p>
        <p class="info">Addis Ababa University, Information System</p>
        <p className="date">2018-Present</p>
        </div>
        <div>
        <p className="education-title"><FaToolbox className='edu-icon'/>Work experience</p>
        <p class="info">Bitapps Technologies, Addis Ababa </p>
        <p className="date">June 2022-March 2023</p>
        </div>
      </div>
      </div>
        <div className="text" >
        <p className = "aboutUs-text" data-aos="fade-up">
        I am passionate about turning ideas into elegant solutions,
         combining coding skills with high-level design principles.
          I strive to develop attractive, modern and easy-to-use interfaces that serve both user experience and 
          business needs. In addition, I enjoy solving problems collaboratively - working together with teams from 
          research to implementation and quality assurance.
        </p>
        <a href={resume} download="Gelila's Resume" ><button className='download-btn'><p className='btn-view'>Download CV</p></button></a>
       
        </div>
    
        </div>
        <a href='#Home'><div className='back-to-top'><FaLongArrowAltUp className='top-icon'/></div></a>

        <Counter/>
        <HireMe/>
        </div>
       


  )
}