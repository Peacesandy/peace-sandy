import React from 'react'
import '../Styles/Navbar.css'

import { FaUserTie } from 'react-icons/fa'

function Navbar() {
  return (
    <header className="container">

      <nav className=''>
        <h1>Peace Sandy</h1>
        <ul className='nav-ul'>
          <li className='nav-li'> <a href="#home">Home</a></li>
          <li className='nav-li'><a href="#about">About</a></li>
          <li className='nav-li'> <a href="#skills">Skills</a></li>
          <li className='nav-li'> <a href="#experience">Experience</a> </li>
          <li className='nav-li'>  <a href="#project">Project</a> </li>
          <li className='nav-li'> <a href="#blog"> Blog </a></li>
          <li className='nav-li'><a href="#contact"> Contact</a></li>
        </ul>
        <button className='burger-menu' id='burger-menu'>
          <FaUserTie />
        </button>
      </nav>
    </header>

  )
}

export default Navbar