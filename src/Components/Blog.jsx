import React from 'react'
import  '../Styles/Blog.css'
import { motion } from "framer-motion";

import firstarticle from '../Images/firstarticle.png'
import secondarticle from '../Images/secondarticle.png'
import thirdarticle from '../Images/fiftharticle.png'


function Blog() {
  return (
    <div id='blog'> 
    <hr/>
    <div className='Publications'>
      <h1 className='publications-text'>Publications</h1>
    </div>
    <div className='projects-container'>
       
    <motion.div className='project-container project-card' whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
    <img src={firstarticle} alt="A git card" className='article'/>
        <h3 className='project-title'>Array</h3>
        <p className='project-details'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis corrupti beatae voluptatibus!</p>
        <a href="http://twitter.com/PeaceSandy3"  className='project-link'><button className='view-site'>Check it out</button></a>
    </motion.div>

    <motion.div className='project-container project-card' whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
    <img src={secondarticle} alt="A git card" className='article'/>
        <h3 className='project-title'>Array</h3>
        <p className='project-details'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis corrupti beatae voluptatibus!</p>
        <a href="http://twitter.com/PeaceSandy3"  className='project-link'><button className='view-site'>Check it out</button></a>
    </motion.div>

    <motion.div className='project-container project-card' whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
    <img src={thirdarticle} alt="A git card" className='article'/>
        <h3 className='project-title'>Array</h3>
        <p className='project-details'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis corrupti beatae voluptatibus!</p>
        <a href="http://twitter.com/PeaceSandy3"  className='project-link'><button className='view-site'>Check it out</button></a>
    </motion.div>
       
    </div>
    <hr/>
    </div>
      
  )
}

export default Blog