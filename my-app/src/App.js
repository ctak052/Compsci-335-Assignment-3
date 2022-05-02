import React, { useState } from 'react';
import NavMenu from "./Components/Header/NavMenu";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import Home from './Components/Content/Home';
import "./App.css";

{/* <header>
  const [currentPage, setCurrentPage] = useState("Home")
  console.log(currentPage);
  const navButtonClickedDataHandler = (event) => {
    setCurrentPage(event.target.innerHTML)
  }
        <NavMenu onNavButtonClicked={navButtonClickedDataHandler} />
      </header>

      <Content page={currentPage} />

      <Footer /> */}

function App() {

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
