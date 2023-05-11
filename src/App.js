import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";


import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import Navbar from "./Components/Navbar";
import Experience from "./Components/Experience";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer"


function App() {
  return (
    <BrowserRouter>
       <Navbar/>
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/about" element={<About />} />
      <Route  path="/contact" element={<Contact />} />
      <Route  path="/portfolio" element={<Portfolio />} />
      <Route  path="/experience" element={<Experience/>} />
      <Route  path="/blog" element={<Blog />} />
    </Routes>
     <Footer/>
    </BrowserRouter>
  );
}

export default App;


