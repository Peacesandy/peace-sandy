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
       
        <figure className='card'>
        <img src={Profile} alt='My Profile' className='profile'/>
        </figure>
    </div>
    </>
  )
}

export default About