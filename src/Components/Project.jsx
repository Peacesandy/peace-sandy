import React from 'react'

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
    <div className='project'>
        <hr/>
    <div className='project-title'>
        <h1>Projects</h1>
        <p>Check out some of my projects</p>
    </div>
    <div className='projects-container'>  

    <div className='project-container project-card'>
    <img src={metabnb} alt="A metabnb website" className='project-pic' loading='lazy'/>
     <h3 className='project-title'>Meta Bnb Website</h3>
     <p className='project-details'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nostrum commodi autem repudiandae, 
     ipsum ipsam sapiente doloribus, expedita officiis dolores officia delectus excepturi soluta dolorum!</p>
     <a href="#" target='_blank' className='project-link'>Check It Out</a>
    </div>

    <div className='project-container project-card'>
    <img src={movieapp} alt="A metabnb website" className='project-pic' loading='lazy'/>
     <h3 className='project-title'>Meta Bnb Website</h3>
     <p className='project-details'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nostrum commodi autem repudiandae, 
     ipsum ipsam sapiente doloribus, expedita officiis dolores officia delectus excepturi soluta dolorum!</p>
     <a href="#" target='_blank' className='project-link'>Check It Out</a>
    </div>

    <div className='project-container project-card'>
    <img src={drinkwater} alt="A metabnb website" className='project-pic' loading='lazy'/>
     <h3 className='project-title'>Meta Bnb Website</h3>
     <p className='project-details'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nostrum commodi autem repudiandae, 
     ipsum ipsam sapiente doloribus, expedita officiis dolores officia delectus excepturi soluta dolorum!</p>
     <a href="#" target='_blank' className='project-link'>Check It Out</a>
    </div>

    <div className='project-container project-card'>
    <img src={smartlist} alt="A metabnb website" className='project-pic' loading='lazy'/>
     <h3 className='project-title'>Meta Bnb Website</h3>
     <p className='project-details'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nostrum commodi autem repudiandae, 
     ipsum ipsam sapiente doloribus, expedita officiis dolores officia delectus excepturi soluta dolorum!</p>
     <a href="#" target='_blank' className='project-link'>Check It Out</a>
    </div>


    <div className='project-container project-card'>
    <img src={githubprofiles} alt="A metabnb website" className='project-pic' loading='lazy'/>
     <h3 className='project-title'>Meta Bnb Website</h3>
     <p className='project-details'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nostrum commodi autem repudiandae, 
     ipsum ipsam sapiente doloribus, expedita officiis dolores officia delectus excepturi soluta dolorum!</p>
     <a href="#" target='_blank' className='project-link'>Check It Out</a>
    </div>

    <div className='project-container project-card'>
    <img src={Dadjoke} alt="A metabnb website" className='project-pic' loading='lazy'/>
     <h3 className='project-title'>Meta Bnb Website</h3>
     <p className='project-details'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nostrum commodi autem repudiandae, 
     ipsum ipsam sapiente doloribus, expedita officiis dolores officia delectus excepturi soluta dolorum!</p>
     <a href="#" target='_blank' className='project-link'>Check It Out</a>
    </div>

    <div className='project-container project-card'>
    <img src={quizapp} alt="A metabnb website" className='project-pic' loading='lazy'/>
     <h3 className='project-title'>Meta Bnb Website</h3>
     <p className='project-details'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nostrum commodi autem repudiandae, 
     ipsum ipsam sapiente doloribus, expedita officiis dolores officia delectus excepturi soluta dolorum!</p>
     <a href="#" target='_blank' className='project-link'>Check It Out</a>
    </div>

    </div>


    </div>

    
  )
}

export default Project