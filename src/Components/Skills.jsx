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
      <h1 className='skills-intro'> <span className='span-my'>My</span> Skills</h1>
      <div className='skills-container'>

      <div class="flip-card">
       <div class="flip-card-inner">
       <div class="flip-card-front">
      <img src={Html} alt="A git card" className='html'/>
      </div>
       <div class="flip-card-back">
      <h1>HTML</h1>
      </div>
      </div>
      </div>
          

          <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img src={Git} alt="A git card" className='git'/>
    </div>
    <div class="flip-card-back">
      <h1>GIT</h1>
    </div>
  </div>
</div>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img src={Css} alt="A git card" className='css'/>
    </div>
    <div class="flip-card-back">
      <h1>CSS</h1>
    </div>
  </div>
</div>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img src={Javascript} alt="A git card" className='javascript'/>
    </div>
    <div class="flip-card-back">
      <h1>JAVASCRIPT</h1>
    </div>
  </div>
</div>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img src={Framework} alt="A git card" className='framework'/>
    </div>
    <div class="flip-card-back">
      <h1>REACT</h1>
    </div>
  </div>
</div> 

  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img src={Github} alt="A git card" className='github'/>
    </div>
    <div class="flip-card-back">
      <h1>GIT</h1>
    </div>
  </div>
  </div>


  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img src={Firestore} alt="A git card" className='Firestore'/>
    </div>
    <div class="flip-card-back">
      <h1>FIRESTORE</h1>
    </div>
  </div>
</div>   

     <div class="flip-card">
     <div class="flip-card-inner">
      <div class="flip-card-front">
       <img src={Styled} alt="A git card" className='Redux'/>
      </div>
       <div class="flip-card-back">
        <h1>REDUX</h1>
       </div>
       </div>
       </div>

       <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img src={Markdown} alt="A git card" className='Markdown'/>
    </div>
    <div class="flip-card-back">
      <h1>MARKDOWN</h1>
    </div>
  </div>
</div>

      </div>
    </div>
  )
}

export default Skills

