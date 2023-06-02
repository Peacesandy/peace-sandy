import React from 'react'
import '../Styles/Home.css'

import { motion } from "framer-motion";

import { FaGithubSquare, FaLinkedinIn, FaTwitter} from 'react-icons/fa'

function Home() {
  return (
    <div className='container' id='home'>

      <div className='image-container'>
      </div>

      <motion.div className='text' 
      initial={{ opacity: 0, x: '-100vh' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', bounce: 0.6 }}>
        <h1 className='bio'> Frontend <span className='span-software'>Software</span> Engineer <span className='span-software'> & </span>  Technical Writer. </h1>
      </motion.div>
      <div className='social-icons'>
        <ul>  
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
            <FaGithubSquare size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
            <FaLinkedinIn size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
            <FaTwitter size={30}/>
            </a>
          </li>
        
        </ul>
        </div>
      <hr />
    </div>
  )
}

export default Home