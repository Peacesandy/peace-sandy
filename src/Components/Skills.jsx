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
       <div className='row'>

       <div className="skills">
                <div className="bar">
                    <p> HTML</p>
                    <img src={Html} className='html' alt=''/>
                </div>
                 
                <div className="bar">
                    <p> Css</p>
                    <img src={Css} className='css' alt=''/>
                </div>

                <div className="bar">
                    <p> Figma</p>
                    <img src={Figma} className='Markdown' alt=''/>
                </div>

                <div className="bar">
                    <p> GitHub</p>
                    <img src={Github} className='github' alt=''/>
                </div>

                <div className="bar">
                    <p> Framework</p>
                    <img src={Framework} className='framework' alt=''/>
                </div>

                <div className="bar">
                    <p> Sass</p>
                    <img src={Sass} className='Markdown' alt='javascript'/>
                </div>

                <div className="bar">
                    <p> Javascript</p>
                    <img src={Javascript} className='javascript' alt=''/>
                </div>

                <div className="bar">
                    <p>Markdown </p>
                    <img src={Markdown} alt='' className='Markdown'/>
                </div>

                <div className="bar">
                    <p> Git</p>
                    <img src={Git}  alt='' className='git'/>
                </div>

                <div className="bar">
                    <p> Styled</p>
                    <img src={Styled} alt='' className='Firestore'/>
                </div>

                <div className="bar">
                    <p> Firestore</p>
                    <img src={Firestore} alt='' className='Firestore'/>
                </div>


                </div>
       </div>
    </div>
  )
}

export default Skills

