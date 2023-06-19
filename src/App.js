import React from "react";
import './App.css';



import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Navbar from "./Components/Navbar";
import Experience from "./Components/Experience";
import Project from "./Components/Project"
import Blog from "./Components/Blog";
import Footer from "./Components/Footer"
import Loading from "./Components/Loading"




function App() {
  return (
       <>
       <Loading/>
        <Navbar/>
        <div className="page">
        <span className="tags top-tags">&lt;body/&gt;</span>
       </div>
        <Home/>
        <span className="tags bottom-tags">
        &lt;body&gt;
        <br/>
        <span className="bottom-tag-html">&lt;body/&gt;</span>
        </span>
        <About/>
        <Skills/>
        <Experience/>
        <Project/>
        <Blog/>
        <Contact/>
        <Footer/>
       </>
    
  );
}

export default App;


