import React from "react";
import "./nav.css";
import { useState } from "react";
const Nav = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div>
      <div className="navv-bar">
       <a href="#Home" className="decor"> <div class="logos">
       Ge<span className="highlight">lil</span>a
        </div>
        </a>

        <div class="navigations">
          <input type="checkbox" className="toggle-menus" />
          <div class="hamburgers"></div>
          <ul class="menus">
            <li>
			
              {" "}
              
              <a href="#About"> About</a>
            </li>
            <li>
              {" "}
              <a href="#Skills">Skill</a>
            </li>{" "}
            <li>
              {" "}
              <a href="#Projects">Projects</a>
            </li>
            <li>
              {" "}             
              <a href="#Testimonial">Testimonial</a>
            </li>{" "}
            <li>
              {" "}             
              <a href="#Contact">Contact</a>
            </li>
          </ul>
          {/* <div className='about-app'>
              <img src={playStore} className="appstore"/>
             <img src={appStore} />
            </div> */}
        </div>
      
      </div>
     
    
    </div>
  );
};

export default Nav;
