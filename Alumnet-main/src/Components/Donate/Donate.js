import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Donate.css"
import logo2 from './logo2.jpg';

const Donate = () => {
        return (
                <div>
                        <div className="contain">
                                <div className="innerBox">
                                        <img src={logo2} className="logo2" alt="" />
                                        <a href="/dapp">
                                                <button className="btn" >Donate</button>
                                        </a>
                                </div>
                        </div>
                </div>
        );
};

export default Donate;
