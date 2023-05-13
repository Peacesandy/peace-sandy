import React from 'react'
import { Link } from "react-router-dom"
import '../Styles/Navbar.css'
import { FaHome, FaUserTie, FaRegFileCode,  FaAddressBook, FaWrench, FaRegEdit} from "react-icons/fa";



function Navbar() {
  return (
    <nav className='sticky'>
      <ul className='nav-ul'>
        <li className='nav-li'>
          <Link to="/">Home <FaHome size={15}/> </Link>
        </li>
        <li className='nav-li'>
          <Link to="/about">About <FaUserTie size={15}/> </Link>
        </li>
        <li className='nav-li'>
          <Link to="/portfolio">Portfolio <FaRegFileCode size={15}/> </Link>
        </li>
        <li className='nav-li'>
          <Link to="/contact">Contact <FaAddressBook size={15}/> </Link>
        </li>
        <li className='nav-li'>
          <Link to="/experience"> Experience <FaWrench size={15}/> </Link>
        </li>
        <li className='nav-li'>
          <Link to="/blog"> Blog <FaRegEdit size={15}/> </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar