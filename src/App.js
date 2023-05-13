import React from "react";



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
       <>
        <Navbar/>
        <Home/>
        <About/>
        <Portfolio/>
        <Experience/>
        <Blog/>
        <Contact/>
        <Footer/>
       </>
    
  );
}

export default App;


