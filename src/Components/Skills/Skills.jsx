import React, {useEffect} from 'react'
import Frontend from './Frontend'
import Backend from './Backend'
import './skills.css'
import AOS from 'aos'
import 'aos/dist/aos.css'



const Skills = ()=> {
  useEffect(()=>{
    AOS.init({duration: 1500});
  },[])
  return (
    <>
    <section className='skills section' id ="skills">
      <h4 className='section-subtitle'><span className="highlight">My technical</span> level</h4>
      <div className='skills_container container grid'>
      <div data-aos="fade-right"><Frontend/></div>
      <div data-aos="fade-left"><Backend/></div>
      </div>
    </section>
    {/* <HireMe/> */}
    </>
  )
}
//testimonial normal carousel, projects will be using swiper.Js, when one of them become responsive then the commented testimonial will be applied

export default Skills 