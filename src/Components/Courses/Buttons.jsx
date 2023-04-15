import React, { useState } from "react";
import Data from "./Data";
import "./courses.css";

const Buttons = ({ filterItem, setItem, menuItems }) => {
  const [active, setActive] = useState(false);
  // const handleClick = () => {
  //   setActive(!active);
  // };
  return (
    <>
      <div className="d-flex justify-content-center">
        {menuItems.map((Val, id) => {
          // return (
          //   // <button className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"></button>
          // );
        })}

        <div className="b-btn">
          <ul className="ul-li">
            {/* <li>
              <button id="ui-btns" onClick={() => setItem(Data)}>
                <p id="ui-all-btns-two" className="pro-hu">
                  All Program
                </p>
              </button>{" "}
            </li> */}
            <li>
              <button
                activeclassName="active"
                id="ui-btns"
                onClick={() => setItem(Data)}
              >
                <p className="pro-hu"> All Program</p>
              </button>{" "}
            </li>{" "}
            <li>
              <button
                activeclassName="active"
                id="ui-btns"
                onClick={() => filterItem("Breakfast")}
              >
                <p className="pro-hu">UX/UI desgin</p>
              </button>{" "}
            </li>{" "}
            <li>
              <button id="ui-btns" onClick={() => filterItem("Dinner")}>
                <p className="pro-hu">Flutter </p>
              </button>{" "}
            </li>{" "}
            <li>
              <button id="ui-btns" onClick={() => filterItem("Lunch")}>
                <p className="pro-hu">React Native</p>
              </button>{" "}
            </li>
            <li>
              <button id="ui-btns" onClick={() => filterItem("Breakfast")}>
                <p className="pro-hu">Mobile Develpment</p>
              </button>{" "}
            </li>
            <li>
              <button id="ui-btns" onClick={() => filterItem("Lunch")}>
                <p className="pro-hu">Web design</p>
              </button>{" "}
            </li>
          </ul>
        </div>
      </div>

      {/* <button
        onClick={handleClick}
        style={{ backgroundColor: active ? "red" : "white" }}
      >
        SignUp
      </button> */}
    </>
  );
};

export default Buttons;
