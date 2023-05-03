import React from 'react'
import Profile from '../Images/image2 (2).jpeg'
import '../Styles/About.css'

function About() {
  return (
    <> 
    <div className='about-container'>
        <h1 className='intro-section'>Hi There ! 👋
        <br/>I'm Peace Sandy</h1>
        <figure className='card'>
        <img src={Profile} alt='My Profile' className='profile'/>
        </figure>
    </div>
    </>
  )
}

export default About