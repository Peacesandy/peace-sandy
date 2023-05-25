import React from 'react'
import '../Styles/Contact.css'

import {FaGithub, FaLinkedin, FaTwitter, } from 'react-icons/fa'

function Contact() {
  
  function handleLinkClick(event, link) {
    event.preventdefault()
    window.open(link, '_blank')
 }
  return (
    <div className='contact-container' id='contact'>
      <div className='contact-text'>
        <h1>Contact</h1>
        <br/>
        <p>Invite me to speak at your conference, tell me about other</p>
      </div>
      <div className='contact-form-container'> 
      <div className='contact-form'>  
      <form>
        <div className='form-control'> 
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          type='text'
        />
        </div>
        <div className='form-control'> 
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='text'
        />
        </div>
        <div className='form-control'> 
        <label htmlFor='message'>Message</label>
        <textarea
          id='message'
          type='text'
        ></textarea>
        </div>
        <button type='submit' className='submit-btn'>send</button>
      </form>
      </div>
      </div>
      <div className='socials'>
      <a href="http://twitter.com/PeaceSandy3" onClick={(event) => handleLinkClick(event, 'http://twitter.com/PeaceSandy3' )} className='side-icon'> <FaTwitter size={30}/> </a> 
           <a href="https://www.linkedin.com/in/peace-sandy-bb7a691b0" onClick={(event) => handleLinkClick(event, 'https://www.linkedin.com/in/peace-sandy-bb7a691b0')} className='side-icon'> <FaLinkedin size={30}/></a> 
      <a href="https://github.com/Peacesandy" onClick={(event) => handleLinkClick(event, 'https://github.com/Peacesandy')} className='side-icon'> <FaGithub size={30}/></a> 
        
      </div>
    </div>
  )
}

export default Contact