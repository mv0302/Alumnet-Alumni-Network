import React from "react";
import Navbar from "../Navbar/Navbar";
import call from './call.png';
import "./Contact.css";

const Contact = () => {
        return (
                <div>
                        <Navbar />
                        <div className="contain1">
                                <div className="innerBox1">
                                        <h1>
                                                Contact Us
                                        </h1>
                                        <h3>
                                                Vishwakarma Institute of Technology
                                        </h3>
                                        <h3>
                                                666, Upper Indiranagar, Bibwewadi,
                                        </h3>
                                        <h3>
                                                Pune, Maharashtra, INDIA - 411 037.
                                        </h3>
                                        <h2>
                                                <img src={call} className="call" alt="" /> 
                                                <p>9373920122</p>
                                        </h2>
                                </div>
                        </div>
                </div>
        );
};

export default Contact;