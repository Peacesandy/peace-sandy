import React from 'react'
import  '../Styles/Blog.css'
import Git from '../Images/github-skills.png'

function Blog() {
  return (
    <div id='blog'> 
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img src={Git} alt="A git card" className='git'/>
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect & Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>
    </div>
      
  )
}

export default Blog