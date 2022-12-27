import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import vit from './vit.jpeg';

const Home = () => {
        return (
                <div>
                        <Navbar />
                        <div class="contain2">
                                <img src={vit} className="vit" alt="" />
                                <div className="innerBox2">
                                        <h1>Welcome to the Official Alumni Network of VIT Pune</h1>
                                        <h2>A comprehensive platform to bond together!</h2>
                                        <h2>Create your profile to connect, maintain transparency</h2>
                                </div>
                                <div className="innerBox2">
                                        <a href="/login">
                                                <button className="btn3" >Donate</button>
                                        </a>
                                </div>
                        </div>

                </div>
        );
};

export default Home;