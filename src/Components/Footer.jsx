import React from 'react'
import {FaGithub, FaLinkedin, FaTwitter, } from 'react-icons/fa'
import '../Styles/Footer.css'

function Footer() {
        
       function handleLinkClick(event, link) {
          event.preventdefault()
          window.open(link, '_blank')
       }

  return (
    <div className='footer' id='footer'>
      <div>
      <p>Would you like to support my content</p>
      <button>Buy me a coffee</button>
      </div>
      <div>
        <ul className='footer-ul'>
          <li> <a href="http://twitter.com/PeaceSandy3" onClick={(event) => handleLinkClick(event, 'http://twitter.com/PeaceSandy3' )} className='footer-icon'> <FaTwitter/> </a> </li>
          <li> <a href="https://www.linkedin.com/in/peace-sandy-bb7a691b0" onClick={(event) => handleLinkClick(event, 'https://www.linkedin.com/in/peace-sandy-bb7a691b0')} className='footer-icon'> <FaLinkedin/></a> </li>
          <li> <a href="https://github.com/Peacesandy" onClick={(event) => handleLinkClick(event, 'https://github.com/Peacesandy')} className='footer-icon'> <FaGithub/></a> </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer