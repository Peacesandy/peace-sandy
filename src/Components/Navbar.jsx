import React from 'react'
import '../Styles/Navbar.css'
import { FaHome, FaUserTie, FaRegFileCode,  FaAddressBook, FaWrench, FaRegEdit} from "react-icons/fa";



function Navbar() {
  return (
    <nav className='sticky'>
      <ul className='nav-ul'>
        <li className='nav-li'>
          <a href="#home">Home <FaHome size={15}/> </a>
        </li>
        <li className='nav-li'>
          <a href="#about">About <FaUserTie size={15}/> </a>
        </li>
        <li className='nav-li'>
          <a href="#skills">Skills <FaRegFileCode size={15}/> </a>
        </li>
        <li className='nav-li'>
          <a href="#experience">Experience <FaAddressBook size={15}/> </a>
        </li>
        <li className='nav-li'>
          <a href="#blog"> Blog <FaWrench size={15}/> </a>
        </li>
        <li className='nav-li'>
          <a href="#contact"> Contact <FaRegEdit size={15}/> </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar