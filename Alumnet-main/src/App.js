import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Dapp from "./Components/Donation/Dapp";
import Home from "./Components/Home/Home";
import Donate from "./Components/Donate/Donate";
import Contact from "./Components/Contact/Contact";
import { auth } from "./firebase";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/dapp" element={<Dapp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
