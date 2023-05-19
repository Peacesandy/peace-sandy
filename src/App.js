import React from "react";
import './App.css';



import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
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
        <Skills/>
        <Experience/>
        <Blog/>
        <Contact/>
        <Footer/>
       </>
    
  );
}

export default App;


