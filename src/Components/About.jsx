import React from 'react'
import Emoji from '../Images/waving-hand_1f44b.gif'
import Profile from '../Images/image2 (2).jpeg'
import '../Styles/About.css'
import { motion } from "framer-motion";

function About() {

  return (
    <> 
    <div className='about-container' id='about'>
        <h1 className='intro-section'>Hi There ! <img src={Emoji} alt='Emoji' className='emoji'/></h1>
        <br/>
        <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    > 
         <h1>My name is Peace Sandy and I'm a 
         <br/> front-end developer based in Lagos, Nigeria.  
         <br/> I am passionate about building interactive 
         <br/>  experiences on the web with a focus on 
         <br/> animations and interactions.</h1>
         </motion.div>
        <figure className='card'>
        <img src={Profile} alt='My Profile' className='profile'/>
        </figure>
        <h1>
         I am also a designer skilled in digital design,
         art direction and motion for digital experiences.
         I design unique web experiences for forward-thinking 
         brands and individuals.
        </h1>
        <h1>
        I am skilled in the following technologies and disciplines.
        </h1>
        <div className='skill'>
          <p>Skills</p>
          <p>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
          <div className=''>
            <p>HTML</p>
          </div>
          <div className=''>
            <p>CSS</p>
          </div>
          <div>
            <p>Javascript</p>
          </div>
          <div>
            <p>React</p>
          </div>
          <div>
            <p>Git</p>
          </div>
        </div>
    </div>
    </>
  )
}

export default About