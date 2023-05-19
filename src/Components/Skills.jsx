import React from 'react'

import Html from '../Images/html.skills.png'
import Css from '../Images/css-skills.png'
import Javascript from '../Images/javascript.skills.png'
import Framework from '../Images/react-skills.png'
import  Github from '../Images/github-skills.png'
import Firestore from '../Images/Firestore.png'
import Styled  from '../Images/redux.png'
import Markdown from '../Images/markdown.png'
import Git from '../Images/git.png'


import '../Styles/Skills.css'

function Skills() {
  return (
    <div id='skill-section'>
      <h1 className='skills-intro'>Skills</h1>
      <div className='skills-container'>
          <div className='skill-card'>
              <img src={Html} alt="An Html Card" className='html' />
              <h1>HTML</h1>
          </div>

          <div className='skill-card'>
              <img src={Css} alt="A CSS card" className='css' />
              <h1>CSS</h1>
          </div>  

          <div className='skill-card'>
              <img src={Javascript} alt="A javascript card" className='javascript'/>
              <h1>JAVASCRIPT</h1>
          </div>   

          <div className='skill-card'>
              <img src={Framework} alt="A framework card" className='framework' />
              <h1>REACT</h1>
          </div>  

          <div className='skill-card'>
              <img src={Github} alt="A Git Card" className='github' />
              <h1>GITHUB</h1>
          </div> 

          <div className='skill-card'>
              <img src={Firestore} alt="A firestore card" className='Firestore' />
              <h1>FIRESTORE</h1>
          </div>   

          <div className='skill-card'>
              <img src={Styled} alt="A styled card" className='Redux' />
              <h1>Redux</h1>
          </div>   

          <div className='skill-card'>
              <img src={Markdown} alt="A markdown card" className='Markdown'/>
              <h1>MARKDOWN</h1>
          </div>    

           <div className='skill-card'>
              <img src={Git} alt="A git card" className='git'/>
              <h1>GIT</h1>
          </div>  
      </div>
    
    </div>
  )
}

export default Skills

