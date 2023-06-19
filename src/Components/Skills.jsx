import React from 'react'


import Html from '../Images/html.skills.png'
import Css from '../Images/css-skills.png'
import Javascript from '../Images/javascript.skills.png'
import Framework from '../Images/react-skills.png'
import Github from '../Images/github-skills.png'
import Firestore from '../Images/Firestore.png'
import Styled from '../Images/redux.png'
import Markdown from '../Images/markdown.png'
import Git from '../Images/git.png'
import Figma from '../Images/icons8-figma.svg'
import Sass from '../Images/icons8-sass.svg'


import '../Styles/Skills.css'

function Skills() {
  return (
    <div id='skill-section' className='container skills'>

        
<hr />

<div className='skills-intro'>
  <h1>My Skills.</h1>
</div>

     <div className="first-skill">

      
     <div className="skill-box">
        <div className="skill-title">
          <div className="skill-div">
          <img src={Html} className='skill-img' alt=''/>
          </div>
          <h3>HTML 5</h3>
        </div>
      </div>
       
     
      <div className="skill-box">
        <div className="skill-title">
          <div className="skill-div">
          <img src={Css} className='skill-img' alt=''/>
          </div>
          <h3>CSS</h3>
        </div>
      </div>
     

      <div className="skill-box">
        <div className="skill-title">
          <div className="skill-div">
          <img src={Javascript} className='skill-img' alt=''/>
          </div>
          <h3>Javascript</h3>
        </div>
      </div>
  

      <div className="skill-box">
        <div className="skill-title">
          <div className="skill-div">
          <img src={Framework} className='skill-img' alt=''/>
          </div>
          <h3>React</h3>
        </div>
      </div>
     

     
      <div className="skill-box">
        <div className="skill-title">
          <div className="skill-div">
          <img src={Github} className='skill-img' alt=''/>
          </div>
          <h3>GitHub</h3>
        </div>
      </div>
     

     
      <div className="skill-box">
        <div className="skill-title">
          <div className="skill-div">
          <img src={Firestore} className='skill-img' alt=''/>
          </div>
          <h3>Firestore</h3>
        </div>
      </div>
     

     
      <div className="skill-box">
        <div className="skill-title">
          <div className="skill-div">
          <img src={Styled} className='skill-img' alt=''/>
          </div>
          <h3>Redux</h3>
        </div>
      </div>
     

     
      <div className="skill-box">
        <div className="skill-title">
          <div className="skill-div">
          <img src={Markdown} className='skill-img' alt=''/>
          </div>
          <h3>Markdown</h3>
        </div>
      </div>
     

     
      <div className="skill-box">
        <div className="skill-title">
          <div className="skill-div">
          <img src={Git} className='skill-img' alt=''/>
          </div>
          <h3>Git</h3>
        </div>
      </div>
     

     
      <div className="skill-box">
        <div className="skill-title">
          <div className="skill-div">
          <img src={Figma} className='skill-img' alt=''/>
          </div>
          <h3>Figma</h3>
        </div>
      </div>
     

     
      <div className="skill-box">
        <div className="skill-title">
          <div className="skill-div">
          <img src={Sass} className='skill-img' alt=''  />
          </div>
          <h3>Sass</h3>
        </div>
        </div>
      
     
     
     
      </div>
    </div>
  )
}

export default Skills

