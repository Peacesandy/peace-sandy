import React from 'react'
import '../Styles/Navbar.css'
import { motion } from "framer-motion";

import { FaMicrosoft } from 'react-icons/fa'

function Navbar() {
  return (
    <header className="container">

      <nav className=''>
        <motion.div animate={{ scale: 1.2 }}
    transition={{ delay: 1, yoyo: Infinity }}>  
        <h1>Peace Sandy</h1>
        </motion.div>
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
          <FaMicrosoft />
        </button>
      </nav>
    </header>

  )
}

export default Navbar