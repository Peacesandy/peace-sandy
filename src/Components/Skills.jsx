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
import Figma from '../Images/figma.png'
import Sass from '../Images/icons8-sass.svg'


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
      <h6 className='card-skill'>HTML</h6>
      </div>
      </div>
      </div>
          

          <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img src={Git} alt="A git card" className='git'/>
    </div>
    <div class="flip-card-back">
      <h6 className='card-skill'>GIT</h6>
    </div>
  </div>
</div>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img src={Css} alt="A git card" className='css'/>
    </div>
    <div class="flip-card-back">
      <h6 className='card-skill'>CSS</h6>
    </div>
  </div>
</div>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img src={Javascript} alt="A git card" className='javascript'/>
    </div>
    <div class="flip-card-back">
      <h6 className='card-skill'>JAVASCRIPT</h6>
    </div>
  </div>
</div>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img src={Framework} alt="A git card" className='framework'/>
    </div>
    <div class="flip-card-back">
      <h6 className='card-skill'>REACT</h6>
    </div>
  </div>
</div> 

  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img src={Github} alt="A git card" className='github'/>
    </div>
    <div class="flip-card-back">
      <h6 className='card-skill'>GIT</h6>
    </div>
  </div>
  </div>


  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img src={Firestore} alt="A git card" className='Firestore'/>
    </div>
    <div class="flip-card-back">
      <h6 className='card-skill'>FIRESTORE</h6>
    </div>
  </div>
</div>   

     <div class="flip-card">
     <div class="flip-card-inner">
      <div class="flip-card-front">
       <img src={Styled} alt="A git card" className='Redux'/>
      </div>
       <div class="flip-card-back">
        <h6 className='card-skill'>REDUX</h6>
       </div>
       </div>
       </div>

       <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img src={Markdown} alt="A git card" className='Markdown'/>
    </div>
    <div class="flip-card-back">
      <h6 className='card-skill'>MARKDOWN</h6>
    </div>
  </div>
</div>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img src={Figma} alt="A git card" className='Markdown'/>
    </div>
    <div class="flip-card-back">
      <h6 className='card-skill'>MARKDOWN</h6>
    </div>
  </div>
</div>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img src={Sass} alt="A git card" className='Markdown'/>
    </div>
    <div class="flip-card-back">
      <h6 className='card-skill'>MARKDOWN</h6>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default Skills

