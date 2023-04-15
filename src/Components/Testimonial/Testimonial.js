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
                <div className="testimony-text">I highly recommend Gelila for any project. Their commitment to excellence, passion for innovation, 
                and dedication to delivering high-quality work make them a valuable asset to any development team.</div>
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
                    </div><div className="testimony-name">Special Security Service<br/><span className="testimony-pos">CEO</span></div> 
                </div></div>
        </SwiperSlide>
        <SwiperSlide data-aos="fade-up">
        <div className="testimonies">
                <img src={testSymbol}/>
                <div className="testimony-text">Lorem ipsum dolor sit amet consectetur. Montes a amet nunc ligula etiam nec placerat. 
                    Leo eu tellus risus amet at et sit sapien. Risus augue tristique in in id nec libero. Sem nulla.</div>
                    <div className="flex">
                    <div><img src={dummyAvatar} className="dummyAvatar"/>
                    </div><div className="testimony-name">Arthur Broklyn<br/><span className="testimony-pos">Categories: Language</span></div> 
                </div></div>
        </SwiperSlide>
        <SwiperSlide data-aos="fade-up">
        <div className="testimonies">
                <img src={testSymbol}/>
                <div className="testimony-text">Lorem ipsum dolor sit amet consectetur. Montes a amet nunc ligula etiam nec placerat. 
                    Leo eu tellus risus amet at et sit sapien. Risus augue tristique in in id nec libero. Sem nulla.</div>
                    <div className="flex">
                    <div><img src={dummyAvatar} className="dummyAvatar"/>
                    </div><div className="testimony-name">Arthur Broklyn<br/><span className="testimony-pos">Categories: Language</span></div> 
                </div></div>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
}
