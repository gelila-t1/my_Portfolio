 import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import testSymbol from '../../assets/testSymbol.png'
import dummyAvatar from '../../assets/dummyAvatar.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./testimonial.css";

// import required modules
import { Pagination } from "swiper";

export default function Testimonial() {
  return (
    <div>
      <div className="testimoial-title">What my Clients<span className="highlight"> Say</span> </div>
    
    <div className="testimonial">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            300: {
              slidesPerView: 1
            },
            900:{
       slidesPerView: 3
            }
            
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
        <SwiperSlide data-aos="fade-up">
            <div className="testimonies" >
                <img src={testSymbol}/>
                <div className="testimony-text">I highly recommend Gelila for any project. Her commitment to excellence, passion for innovation, 
                and dedication to delivering high-quality work make her a valuable asset to any development team.</div>
                    <div className="flex">
                    <div><img src={dummyAvatar} className="dummyAvatar"/>
                    </div><div className="testimony-name">Isaac Negatu<br/><span className="testimony-pos">Bitapps Technologies</span></div> 
                </div></div>
        </SwiperSlide>
        <SwiperSlide data-aos="fade-up">
        <div className="testimonies">
                <img src={testSymbol}/>
                <div className="testimony-text">She has a remarkable ability to design and develop user-friendly, creative, 
                and visually appealing websites that are responsive and compatible with various devices and screen sizes.</div>
                    <div className="flex">
                    <div><img src={dummyAvatar} className="dummyAvatar"/>
                    </div><div className="testimony-name">Demena Technologies<br/><span className="testimony-pos">CEO</span></div> 
                </div></div>
        </SwiperSlide>
        <SwiperSlide data-aos="fade-up">
        <div className="testimonies">
                <img src={testSymbol}/>
                <div className="testimony-text"> Her strong problem-solving abilities and attention to detail ensure that
                she can create seamless user experiences that exceed clients' expectations. </div>
                    <div className="flex">
                    <div><img src={dummyAvatar} className="dummyAvatar"/>
                    </div><div className="testimony-name">Adera Delivery<br/><span className="testimony-pos">CEO</span></div> 
                </div></div>
        </SwiperSlide>
        <SwiperSlide data-aos="fade-up">
        <div className="testimonies">
                <img src={testSymbol}/>
                <div className="testimony-text"> Her expertise has brought our ideas to life. We were very pleased with her
                 ability to take our vision and create an attractive, functional, and user-friendly website that meets all of our needs.</div>
                    <div className="flex">
                    <div><img src={dummyAvatar} className="dummyAvatar"/>
                    </div><div className="testimony-name">Special Security Service<br/><span className="testimony-pos">CEO</span></div> 
                </div></div>
        </SwiperSlide>
        <SwiperSlide data-aos="fade-up">
        <div className="testimonies">
                <img src={testSymbol}/>
                <div className="testimony-text"> 
                 I appreciate the extra effort she put into making sure our website is mobile-responsive and optimized for all devices </div>
                    <div className="flex">
                    <div><img src={dummyAvatar} className="dummyAvatar"/>
                    </div><div className="testimony-name">Charisma Realestate<br/><span className="testimony-pos">CEO</span></div> 
                </div></div>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
}
