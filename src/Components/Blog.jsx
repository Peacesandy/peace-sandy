import React from 'react'
import  '../Styles/Blog.css'

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
       
    <div className='project-container project-card'>
    <img src={firstarticle} alt="A git card" className='article'/>
        <h3 className='project-title'>Array</h3>
        <p className='project-details'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis corrupti beatae voluptatibus!</p>
        <a href="#" target='_blank' className='project-link'>Check It Out</a>
    </div>

    <div className='project-container project-card'>
    <img src={secondarticle} alt="A git card" className='article'/>
        <h3 className='project-title'>Array</h3>
        <p className='project-details'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis corrupti beatae voluptatibus!</p>
        <a href="#" target='_blank' className='project-link'>Check It Out</a>
    </div>

    <div className='project-container project-card'>
    <img src={thirdarticle} alt="A git card" className='article'/>
        <h3 className='project-title'>Array</h3>
        <p className='project-details'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis corrupti beatae voluptatibus!</p>
        <a href="#" target='_blank' className='project-link'>Check It Out</a>
    </div>

    </div>
    <hr/>
    </div>
      
  )
}

export default Blog