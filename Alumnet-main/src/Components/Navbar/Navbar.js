import React, { useState } from "react";
import Logo from './Logo.png';
import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="Navbar">
            <img src={Logo} className="logo" alt="" />
            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="/home">Home</a>
                <a href="/contact">Contact</a>
                <a href="/login">Donate</a>
                <div class="dropdown">
                    <button class="dropbtn">Register</button>
                    <div class="dropdown-content">
                        <a href="/Login">Login</a>
                        <a href="/SignUp">Sign Up</a>
                    </div>
                </div>
            </div>
            <div
                className={`nav-toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="bar"></div>
            </div>
            
        </div>
    );
};

export default Navbar;