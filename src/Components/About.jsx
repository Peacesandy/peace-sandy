import React from 'react'
import '../Styles/About.css'
import { motion } from "framer-motion";



function About() {

  return (
    <>
    <motion.div initial={{ opacity: 0, x: '-100vh' }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ type: 'spring', bounce: 0.6 }}> 
      <h1 className='About-intro'>About <span className="span-ut">Me</span></h1>
      </motion.div>
      <div className='about container' id='about'>

        <div className='Bio-1'>
          <p className='text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus fugiat aperiam minus ullam adipisci ratione, qu
            ae laborum quam, perferendis deserunt quos officiis, consequ
            untur molestiae eveniet. deserunt quos officiis, consequ</p>
        </div>

        <div className='Bio-2'>
          <p className='text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus fugiat aperiam minus ullam adipisci ratione, qu
            ae laborum quam, perferendis deserunt quos officiis, consequ
            untur molestiae eveniet. deserunt quos officiis, consequ</p>
        </div>
        <hr />
      </div >
    </>
  )
}

export default About