import React, { useState } from "react";
import "./courses.css";
import element from "../../asset/element-4.png";
import icon from "../../asset/icon2.png";
import bitapps from "../../asset/bitapps.png";
import videoimg from "../../asset/video-img.png";
import play from "../../asset/play.png";
import courseimg from "../../asset/Image.png";
import logout from "../../asset/logout.png";
import Card from "./Card";
import Data from "./Data";
import Buttons from "./Buttons";
// import Navbar from "../Nav/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import rate from "../../asset/rating.png";
import DashNav from "../DashNav/DashNav";
const Courses = () => {
  const [item, setItem] = useState(Data);
  const menuItems = [...new Set(Data.map((Val) => Val.category))];
  const filterItem = (curcat) => {
    // const btns = document.getElementById("ui-btns");
    // btns.style.background = "red";
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };

  return (
    <div>
      <DashNav />
      <div className="container-fluid courses-bg">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>{" "}
          <div className="col-md-10 cousre-bg">
            <p className="courses-header">
              <h6 className="pro-headers">Explore Programs</h6>
              Our Most Popular<br></br> Class
              <p className="courses-para">
                Let's join our famous class, the knowledge provided will
                definitely be useful for you.
              </p>
              <h1 className="header-pop">Most Popular</h1>
            </p>
            <Buttons
              filterItem={filterItem}
              setItem={setItem}
              menuItems={menuItems}
            />
            <div className="main-link">
              {" "}
              <Card item={item} />
            </div>
            {/* <div className="b-btn">
              <ul className="ul-li">
                <li>
                  <button id="ui-btns">
                    <p className="pro-hu">program</p>
                  </button>{" "}
                </li>
                <li>
                  <button id="ui-btns">
                    <p className="pro-hu">program</p>
                  </button>{" "}
                </li>{" "}
                <li>
                  <button id="ui-btns">
                    <p className="pro-hu">program</p>
                  </button>{" "}
                </li>{" "}
                <li>
                  <button id="ui-btns">
                    <p className="pro-hu">program</p>
                  </button>{" "}
                </li>
                <li>
                  <button id="ui-btns">
                    <p className="pro-hu">program</p>
                  </button>{" "}
                </li>
                <li>
                  <button id="ui-btns">
                    <p className="pro-hu">program</p>
                  </button>{" "}
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
