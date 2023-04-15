import { RateReview } from "@mui/icons-material";
import React from "react";
import rate from "../../asset/rating.png";
import icon from "../../asset/Icons.png";
const Card = ({ item }) => {
    var amharicItems = item.slice(0, 3);
    var oromiffaItems = item.slice(3, 6);
    var englishItems = item.slice(6);

    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="row justify-content-center">
                        <h3>Amharic</h3>
                        {amharicItems.map((Val) => {
                            return (
                                <a className="col-md-4 col-sm-6 card my-3 py-3 border-0" key={Val.id} href="/AmharicCourse">
                                    <div id="new-card">
                                        <div className="card-img-top text-center">
                                            <img src={Val.img} alt={Val.title} className="photo w-75" />
                                        </div>
                                        <div className="card-body">
                                            <div id="uix-head"> {Val.price}</div>

                                            <div id="uix-par" className="">
                                                {Val.title}
                                                <img className="courses-icon" src={icon} />

                                                <br></br>
                                            </div>
                                            <div className="card-text">{Val.desc}</div>
                                            <img className="rate-img" src={rate} alt="" />
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>

                    <div className="row justify-content-center">
                        <h3>Oromiffa</h3>
                        {oromiffaItems.map((Val) => {
                            return (
                                <a className="col-md-4 col-sm-6 card my-3 py-3 border-0" key={Val.id} href="/OromiffaCourse">
                                    <div id="new-card">
                                        <div className="card-img-top text-center">
                                            <img src={Val.img} alt={Val.title} className="photo w-75" />
                                        </div>
                                        <div className="card-body">
                                            <div id="uix-head"> {Val.price}</div>

                                            <div id="uix-par" className="">
                                                {Val.title}
                                                <img className="courses-icon" src={icon} />

                                                <br></br>
                                            </div>
                                            <div className="card-text">{Val.desc}</div>
                                            <img className="rate-img" src={rate} alt="" />
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                    <div className="row justify-content-center">
                        <h3>English</h3>
                        {englishItems.map((Val) => {
                            return (
                                <a className="col-md-4 col-sm-6 card my-3 py-3 border-0" key={Val.id} href="/coursemaster">
                                    <div id="new-card">
                                        <div className="card-img-top text-center">
                                            <img src={Val.img} alt={Val.title} className="photo w-75" />
                                        </div>
                                        <div className="card-body">
                                            <div id="uix-head"> {Val.price}</div>

                                            <div id="uix-par" className="">
                                                {Val.title}
                                                <img className="courses-icon" src={icon} />

                                                <br></br>
                                            </div>
                                            <div className="card-text">{Val.desc}</div>
                                            <img className="rate-img" src={rate} alt="" />
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                    {/* {item.map((Val) => {
                        return (
                            <div className="col-md-4 col-sm-6 card my-3 py-3 border-0" key={Val.id}>
                                <div id="new-card">
                                    <div className="card-img-top text-center">
                                        <img src={Val.img} alt={Val.title} className="photo w-75" />
                                    </div>
                                    <div className="card-body">
                                        <div id="uix-head"> {Val.price}</div>

                                        <div id="uix-par" className="">
                                            {Val.title}
                                            <img className="courses-icon" src={icon} />

                                            <br></br>
                                        </div>
                                        <div className="card-text">{Val.desc}</div>
                                        <img className="rate-img" src={rate} alt="" />
                                    </div>
                                </div>
                            </div>
                        );
                    })} */}
                </div>
            </div>
        </>
    );
};

export default Card;
