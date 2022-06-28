import Home from "./Components/Pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from "react";
import Staff from './Components/Pages/Staff';
import GuestBook from './Components/Pages/GuestBook';
import Shop from './Components/Pages/Shop';
import { footerAPI } from './api/footerAPI'


import "./App.css";
function App() {
  const [version, setVersion] = useState("Loading...");

  const fetchVersion = async () =>{
    const newVersion = await footerAPI.fetchVersion();
    console.log(newVersion)
    setVersion(newVersion)
  }
  if(version === "Loading..."){
    fetchVersion();
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home version={version}/>} />
        <Route path="staff" element={<Staff version={version} />} />
        <Route path="shop" element={<Shop version={version} />} />
        <Route path="guestbook" element={<GuestBook version={version} />} />
      </Routes>
    </Router>
  );
}

export default App;
