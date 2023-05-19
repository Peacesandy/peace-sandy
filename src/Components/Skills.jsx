import React from 'react'

import Html from '../Images/html.skills.png'
import Css from '../Images/css-skills.png'
import Javascript from '../Images/javascript.skills.png'
import Framework from '../Images/react-skills.png'
import Git from '../Images/github-skills.png'
import Firestore from '../Images/Firestore.png'
import Styled  from '../Images/redux.png'
import Markdown from '../Images/markdown.png'


import '../Styles/Skills.css'

function Skills() {
  return (
    <div id='skill-section'>
      <h1 className='skills-intro'>Skills</h1>
      <div className='skills-container'>
          <div className='skill-card'>
              <img src={Html} alt="" />
              <h1>HTML</h1>
          </div>
      </div>
      <div className='skills-container'>
          <div className='skill-card'>
              <img src={Css} alt="" />
          </div>      
      </div>
      <div className='skills-container'>
          <div className='skill-card'>
              <img src={Javascript} alt="" />
          </div>      
      </div>
      <div className='skills-container'>
          <div className='skill-card'>
              <img src={Framework} alt="" />
          </div>      
      </div>
      <div className='skills-container'>
          <div className='skill-card'>
              <img src={Git} alt="" />
          </div>      
      </div>
      <div className='skills-container'>
          <div className='skill-card'>
              <img src={Firestore} alt="" className='Firestore' />
          </div>      
      </div>
      <div className='skills-container'>
          <div className='skill-card'>
              <img src={Styled} alt="" className='Redux' />
          </div>      
      </div>
      <div className='skills-container'>
          <div className='skill-card'>
              <img src={Markdown} alt="" className='Markdown'/>
          </div>      
      </div>
    </div>
  )
}

export default Skills

