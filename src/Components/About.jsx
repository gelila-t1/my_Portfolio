import React from "react";
import "./about.css";
import { Swiper, SwiperSlide } from "swiper/react";
import aboutImageOne from "./../../assets/webdev.png";
import abimgOne from "./../../assets/ab-imgOne.png";
import abimgTwo from "./../../assets/ab-imgTwo.png";
import abimgThree from "./../../assets/ab-imgThree.png";
import bar from "./../../assets/bar.png";
import man from "./../../assets/man.png";
import Richard from "./../../assets/Richard.png";
import Footer from "../Footer/Footer";
import imageTwo from "./../../assets/home-imageTwo.png";
import testimonial from "./../../assets/testimonial.png";
import testimonyOne from "./../../assets/testimony-one.png";
import testimonyTwo from "./../../assets/testimony-two.png";
import woman from "./../../assets/avatar-about.png";
import aboutImg from "./../../assets/about-img.png";
import background from "./../../assets/background.png";
import backgroundTwo from "./../../assets/backgroundtwo.png";
import buttonImg from "./../../assets/button-img.png";
import videoIcon from "./../../assets/video-icon.png";
import aboutImage from "./../../assets/about-img.png";
import dummyAvatar from "./../../asset/dummyAvatar.png"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { ChevronRight, ChevronLeft } from "react-bootstrap-icons";
import Header from "../Header/Header";
const About = () => {
  return (
    <div>
      <Header />

      <div className="about-section">
        <div className="about-text">
          Access An Affordable
          <br /> Education & Pursue <br />
          Your Passions
        </div>
        <img src={bar} className="bar" />
        <div className="">
          <img src={aboutImageOne} className="about-imageOne" />
        </div>
        <div className="about-sectionTwo">
          <div>
            <img src={abimgOne} className="student-iconOne" />
            <h3 className="number">253085</h3>
            <p className="description">Students Enrolled</p>
          </div>
          <div>
            <img src={abimgTwo} className="student-icons" />
            <h3 className="number">1205</h3>
            <p className="description">Students Enrolled</p>
          </div>
          <div>
            <img src={abimgThree} className="student-icons" />
            <h3 className="number">127</h3>
            <p className="description">Students Enrolled</p>
          </div>
        </div>
      </div>
    
      {/* <img src={aboutImageTwo} className="about-imageTwo" /> */}
      <div className="improving-lives">
        <div className="aboutlives-text">
       <div className="font-one">Improving Lives</div>
       <div className="font-two">Through Learning</div>
       <div><img src={videoIcon} className="video-icon"/></div>
        </div>
        <div>
          <img src={aboutImage }/>
        </div>
      </div>
      <div className="wrapper">
        {/* <div className="">
          <img src={man} className="man" />
        </div> */}
        {/* <div className="sectionTwo">
          <p className="message">Message From Director</p>h
          <p className="education">
            Education is the Most
            <br /> Powerfull Weapon
          </p>
          <p className="edu-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
            <br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
            <br /> quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo
            <br /> consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum
            <br /> dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non
            <br /> proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
            <br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
            <br /> quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo
            <br /> consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum
            <br /> dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non
            <br /> proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum
          </p>
          <img src={Richard} />
        </div> */}
      </div>
      {/* <div className="image-div">
        <img src={imageTwo} className="home-imageTwo" id="home-image-two" />
      
           </div>  */}
      <div
        className="image-section"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          display: "flex",
        }}
      >
        <div className="back-text">
          Still Confused About your
          <br /> career choice? Consult with
          <br /> our Experts
          <br />
          <a href="./contact">
            <img src={buttonImg} className="btn-contactimg" />
          </a>
        </div>

        <div>
          <img src={woman} className="avatar-image"/>
        </div>
      </div>

      <div className="testimonial-section">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            900: {
              slidesPerView: 2,
            },
          }}
          className="mytestimonial"
        >
          <SwiperSlide>
            <div className="">
              <div className="inside">
                <img src={testimonial} className="testimonial-icon" />
                <div className="names">
                  {" "}
                  <img className="testimony-user-img"  src={dummyAvatar} /> Ayele Kebede
                  <br />
                  <span className="test-description">UI/UX Designer</span>{" "}
                </div>

                <p className="testimony-text">
                  This e learning course Center was an exceptionally rewarding
                  experience. The content was informative, up-to-date, and easy
                  to follow. The presentation was truly engaging, with a
                  combination of visuals and audio that made it easy to stay
                  focused. It’s remarkable how e learning can produce so much
                  valuable knowledge in such a short period of time. I would
                  definitely recommend this program to others!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="inside">
                <img src={testimonial} className="testimonial-icon" />
                <div className="names">
                  {" "}
                  <img className="testimony-user-img" src={dummyAvatar} /> Sadiq Mohammed
                  <br />
                  <span className="test-description">UI/UX Designer</span>{" "}
                </div>

                <p className="testimony-text">
                  I'm so happy with how easy it is to move through the lessons.
                  The video lectures are clear, concise, and enjoyable; they are
                  a great way to learn. I appreciate that I can go back and
                  review any topic I need clarification on, as well as download
                  slides or worksheets to reinforce my knowledge.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="inside">
                <img src={testimonial} className="testimonial-icon" />
                <div className="names">
                  {" "}
                  <img className="testimony-user-img"  src={dummyAvatar} /> Ayelech Manalebet
                  <br />
                  <span className="test-description">UI/UX Designer</span>{" "}
                </div>

                <p className="testimony-text">
                  The user interface was very intuitive and I found it easy to
                  check my progress and pick up where I left off. The videos are
                  also high quality with interesting visuals which really helped
                  bring the topics alive! Overall, this is an excellent
                  e-learning website.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="inside">
                <img src={testimonial} className="testimonial-icon" />
                <div className="names">
                  {" "}
                  <img className="testimony-user-img"  src={dummyAvatar} /> Feyesa Tucho
                  <br />
                  <span className="test-description">UI/UX Designer</span>{" "}
                </div>

                <p className="testimony-text">
                  I enjoyed the interactive elements on this website. The
                  content was engaging, and I liked that the topics were divided
                  into modules that made it easier to learn.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default About;
