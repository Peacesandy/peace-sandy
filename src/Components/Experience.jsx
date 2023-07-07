import React from 'react'
import '../Styles/Experience.css'


import HNG from '../Images/HNG.jpg'
import stutern from '../Images/stutern.jpg'
import Educative from '../Images/educative.png'
import Collab from '../Images/collablab.png'
import Tiidelab from '../Images/tiidelab56.jpg'

function Experience() {
  return (
    <div id='experience'>
      <hr />
      <div className='certification-container container'>
        <h1 class="certification-heading">Certification and Experience</h1>
      </div>

      <div class="timeline">
        <div class="card">
          <div class="card-body">
            <img src={Tiidelab} alt="A git card" className='html' />
            <h1 class="card-title">TIIDELab</h1>
            <p class="card-detail"> Software Developer Trainee. 
              </p>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <img src={HNG} alt="A git card" className='html' />
            <h1 class="card-title">HNG Internship</h1>
            <p class="card-detail">Finished as a Frontend Developer finalist in a global internship that admitted over 12,000 designers, developers, project managers and marketers in an eight weeks elimination program to churn out the best
             in each track while collaborating with cross functional product teams.</p>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <img src={Educative} alt="A git card" className='html' />
            <h1 class="card-title">Educative Answer</h1>
            <p class="card-detail">Participated in Educative Answers Technical writing Workshop to create engaging technical content for developer audiences. Capabilities included researching and drafting articles to explain technical topics, learning new 
                programming languages and technologies, and incorporating feedback on technical and editorial quality.</p>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <img src={Collab} alt="A git card" className='html' />
            <h1 class="card-title">Collab Lab</h1>
            <p class="card-detail">Work collaboratively across European and African timezone 
            with a team of 3 other developers to build a “smart shopping list app” that learns 
            the user habits and how likely they will need to buy the items again
          The web application was developed using React.Js, CSS , HTML and Firebase. The focus is on
           team collaboration and using agile methodologies such as pair programming, code reviews, 
           demos during sync meetings, and retrospectives.</p>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <img src={stutern} alt="A git card" className='html' />
            <h1 class="card-title">Stutern</h1>
            <p class="card-detail">I successfully completed a rigorous six-month intensive 
            software development training program. Throughout the program, I acquired 
            expertise in various technologies, such as HTML, CSS, Javascript, and React.js. 
            By applying my knowledge, I successfully built multiple projects. Additionally, 
            I actively collaborated with a diverse team comprising designers, software developers,
             and data scientists to create an impressive final capstone project.</p>
          </div>
        </div>





      </div>
    </div>
  )
}

export default Experience