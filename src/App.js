import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <BrowserRouter>
       <Navbar/>
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/about" element={<About />} />
      <Route  path="/contact" element={<Contact />} />
      <Route  path="/portfolio" element={<Portfolio />} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;


