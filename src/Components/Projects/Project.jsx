import React from 'react'
// import Counter from './Counter'
import dummyAvatar from '../../assets/dummyAvatar.png'
import sss from '../../assets/sss.PNG'
import vas from '../../assets/vas.PNG'
import adera from '../../assets/adera.PNG'
import charisma from '../../assets/charisma.PNG'
import Card from './Card'
import Icons from '../../assets/Icons.png'
import './Project.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
function Project() {
  return (
    <div>
        <div>
          <div className="projects-title"><span className="highlight">My Latest</span> Projects</div>
          {/* <div className="Cards">
            <div className="card-section"><Card image={sss} title="special Security Service"/>
           </div>
                    <div className="card-section"><Card image={vas} title="E-Learning Website"/>
           </div>
           <div className="card-section"><Card image={adera} title="Adera Delivery"/>
           </div>
         </div> */}
          <div className="myProjects">

         
         <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            300: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            900:{
       slidesPerView: 3.5,
       spaceBetween: -30,
            }
            
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
        <div className="Cards"> 
        <SwiperSlide>
        <div className="card-section" data-aos="fade-right"><Card image={sss} title="special Security Service"/>
        <a href="https://sss-securityservice.com/" className="link">
          <button className='card-link'><p className='btn-live'>Live Preview </p></button></a>
           </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className="card-section" data-aos="fade-left"><Card image={charisma} title="Charisma Real-estate"/>
           <a href="https://cbgethiopia.com/" className="link">
          <button className='card-link'><p className='btn-live'>Live Preview </p></button></a>
           </div>
       
        </SwiperSlide>
        <SwiperSlide>
        <div className="card-section" data-aos="fade-right"><Card image={adera} title="Adera Delivery"/>
        <a href="#" className="link">
          <button className='card-link'><p className='btn-live'>Live Preview </p></button></a>
           </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card-section" data-aos="fade-left"><Card image={vas} title="E-Learning Website"/>
        <a href="https://elearning.bitappstech.com/ " className="link">
          <button className='card-link'><p className='btn-live'>Live Preview </p></button></a>
           </div>
        </SwiperSlide>
        <SwiperSlide>
       
        </SwiperSlide>
        </div>  
      </Swiper>
            {/* <Counter/> */}
            </div>
        </div>
    </div>
  )
}

export default Project