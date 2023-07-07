import React from 'react'
import {motion} from 'framer-motion'

import "../Styles/Project.css"

import metabnb from '../Images/firstprojectmetabnb.png'
import movieapp from '../Images/movieapp.png'
import drinkwater from '../Images/drinkwatertracker.png'
import githubprofiles from '../Images/githubprofiles.png'
import smartlist from '../Images/smartshoppinglist.png'
import quizapp from '../Images/quiz app.png'
import Dadjoke from '../Images/Dad Joke.png'

function Project() {
  return (
    <div id='project' className='project'>
        <hr/>
    <div className='project-title'>
        <h1>Projects</h1>
        <p>Check out some of my projects</p>
    </div>

    <div className='projects-container'>  

    <motion.div className='project-container project-card' whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
    <img src={metabnb} alt="A metabnb website" className='project-pic' loading='lazy'/>
     <h3 className='project-title'>Meta Bnb Website</h3>
     <p className='project-details'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nostrum commodi autem repudiandae, 
     ipsum ipsam sapiente doloribus, expedita officiis dolores officia delectus excepturi soluta dolorum!</p>
     <a href="http://twitter.com/PeaceSandy3"  className='project-link'><button className='view-site'>View the site</button></a>
    </motion.div>

    <motion.div className='project-container project-card' whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
    <img src={movieapp} alt="A metabnb website" className='project-pic' loading='lazy'/>
     <h3 className='project-title'>Meta Bnb Website</h3>
     <p className='project-details'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nostrum commodi autem repudiandae, 
     ipsum ipsam sapiente doloribus, expedita officiis dolores officia delectus excepturi soluta dolorum!</p>
     <a href="http://twitter.com/PeaceSandy3" className='project-link'><button className='view-site'>View the site</button></a>
    </motion.div>

    <motion.div className='project-container project-card' whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
    <img src={drinkwater} alt="A metabnb website" className='project-pic' loading='lazy'/>
     <h3 className='project-title'>Meta Bnb Website</h3>
     <p className='project-details'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nostrum commodi autem repudiandae, 
     ipsum ipsam sapiente doloribus, expedita officiis dolores officia delectus excepturi soluta dolorum!</p>
     <a href="http://twitter.com/PeaceSandy3"  className='project-link'><button className='view-site'>View the site</button></a>
    </motion.div>

    <motion.div className='project-container project-card' whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
    <img src={smartlist} alt="A metabnb website" className='project-pic' loading='lazy'/>
     <h3 className='project-title'>Meta Bnb Website</h3>
     <p className='project-details'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nostrum commodi autem repudiandae, 
     ipsum ipsam sapiente doloribus, expedita officiis dolores officia delectus excepturi soluta dolorum!</p>
     <a href="http://twitter.com/PeaceSandy3"  className='project-link'><button className='view-site'>View the site</button></a>
    </motion.div>


    <motion.div className='project-container project-card' whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
    <img src={githubprofiles} alt="A metabnb website" className='project-pic' loading='lazy'/>
     <h3 className='project-title'>Meta Bnb Website</h3>
     <p className='project-details'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nostrum commodi autem repudiandae, 
     ipsum ipsam sapiente doloribus, expedita officiis dolores officia delectus excepturi soluta dolorum!</p>
     <a href="http://twitter.com/PeaceSandy3"  className='project-link'><button className='view-site'>View the site</button></a>
    </motion.div>

    <motion.div className='project-container project-card' whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
    <img src={Dadjoke} alt="A metabnb website" className='project-pic' loading='lazy'/>
     <h3 className='project-title'>Meta Bnb Website</h3>
     <p className='project-details'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nostrum commodi autem repudiandae, 
     ipsum ipsam sapiente doloribus, expedita officiis dolores officia delectus excepturi soluta dolorum!</p>
     <a href="http://twitter.com/PeaceSandy3" className='project-link'><button className='view-site'>View the site</button></a>
    </motion.div>

    <motion.div className='project-container project-card' whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
    <img src={quizapp} alt="A metabnb website" className='project-pic' loading='lazy'/>
     <h3 className='project-title'>Meta Bnb Website</h3>
     <p className='project-details'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nostrum commodi autem repudiandae, 
     ipsum ipsam sapiente doloribus, expedita officiis dolores officia delectus excepturi soluta dolorum!</p>
     <a href="http://twitter.com/PeaceSandy3"  className='project-link'><button className='view-site'>View the site</button></a>
    </motion.div>
    </div>


    </div>

    
  )
}

export default Project