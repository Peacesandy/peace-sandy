import React from 'react'
import Emoji from '../Images/waving-hand_1f44b.gif'
import Profile from '../Images/image2 (2).jpeg'
import '../Styles/About.css'

function About() {

  return (
    <> 
    <div className='about-container'>
        <h1 className='intro-section'>Hi There ! <img src={Emoji} alt='Emoji' className='emoji'/></h1>
        <br/>
         <h1>My name is Peace Sandy and I'm a 
         <br/> front-end developer based in Lagos, Nigeria.  
         <br/> I am passionate about building interactive 
         <br/>  experiences on the web with a focus on 
         <br/> animations and interactions.</h1>

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
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Git</li>
        </ul>
    </div>
    </>
  )
}

export default About