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
     <p className='project-details'> A Crypto Website, with a wallet feature that you can connect to the metamask</p>
     <a href="https://peacesandy-metabnb.netlify.app/"  className='project-link'><button className='view-site1'>View the site</button></a>
     <br/>
     <a href="https://github.com/Peacesandy/hng-3task"  className='project-link'><button className='view-site'>View Live Code</button></a>
    </motion.div>

    <motion.div className='project-container project-card' whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
    <img src={movieapp} alt="A metabnb website" className='project-pic' loading='lazy'/>
     <h3 className='project-title'>Movie App</h3>
     <p className='project-details'> A Movie App built with a third party API, which gives a giant database of movies with the title, ratings and images.</p>
     <a href="https://peacesandy.github.io/Movie-App/" className='project-link'><button className='view-site1'>View the site</button></a>
     <br/>
     <a href="https://github.com/Peacesandy/Movie-App" className='project-link'><button className='view-site'>View Live Code</button></a>
    </motion.div>

    <motion.div className='project-container project-card' whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
    <img src={drinkwater} alt="A metabnb website" className='project-pic' loading='lazy'/>
     <h3 className='project-title'>Drink Water Tracker</h3>
     <p className='project-details'> A drink water tracker to track glasses of water or cups of water, click on each cup to get the big cup filled.</p>
     <a href="https://peacesandy.github.io/Drink-Water-Tracker/"  className='project-link'><button className='view-site1'>View the site</button></a>
     <br/>
     <a href="https://github.com/Peacesandy/Drink-Water-Tracker"  className='project-link'><button className='view-site'>View live Code</button></a>
    </motion.div>

    <motion.div className='project-container project-card' whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
    <img src={smartlist} alt="A metabnb website" className='project-pic' loading='lazy'/>
     <h3 className='project-title'>Smart Shopping List</h3>
     <p className='project-details'> A “smart” shopping list app that learns your buying habits and helps you remember what you are likely to need to buy on your next trip to the store.</p>
     <a href="https://github.com/the-collab-lab/tcl-58-smart-shopping-list"  className='project-link'><button className='view-site1'>View the site</button></a>
     <br/>
     <a href="http://twitter.com/PeaceSandy3"  className='project-link'><button className='view-site'>View live code</button></a>
    </motion.div>


    <motion.div className='project-container project-card' whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
    <img src={githubprofiles} alt="A metabnb website" className='project-pic' loading='lazy'/>
     <h3 className='project-title'>Github-profiles</h3>
     <p className='project-details'> A Card that displays profile data of GitHub users , 
     it uses the GitHub API to fetch users. 
     Search for a GitHub profile in the search bar to get it displayed</p>
     <a href="https://peacesandy.github.io/Github-profiles/"  className='project-link'><button className='view-site1'>View the site</button></a>
     <br/>
     <a href="https://github.com/Peacesandy/Github-profiles"  className='project-link'><button className='view-site'>View Live Code</button></a>
    </motion.div>

    <motion.div className='project-container project-card' whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
    <img src={Dadjoke} alt="A metabnb website" className='project-pic' loading='lazy'/>
     <h3 className='project-title'>Dad-s-Joke</h3>
     <p className='project-details'>A dad joke application that's gives us a joke. When the body is clicked we keep getting new jokes and this gotten from a third API.</p>
     <a href="https://peacesandy.github.io/Dad-s-Joke/" className='project-link'><button className='view-site1'>View the site</button></a>
     <br/>
     <a href="https://peacesandy.github.io/Dad-s-Joke/" className='project-link'><button className='view-site'>View Live Code</button></a>
    </motion.div>

    <motion.div className='project-container project-card' whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
    <img src={quizapp} alt="A metabnb website" className='project-pic' loading='lazy'/>
     <h3 className='project-title'>Quiz Application</h3>
     <p className='project-details'> A quiz application </p>
     <a href="https://peacesandy.github.io/Quiz-App/"  className='project-link'><button className='view-site1'>View the site</button></a>
     <br/>
     <a href="https://github.com/Peacesandy/Quiz-App"  className='project-link'><button className='view-site'>View Live Code</button></a>
    </motion.div>
    </div>


    </div>

    
  )
}

export default Project