import React from 'react'
import '../Styles/Experience.css'


import HNG from '../Images/HNG.jpg'
import stutern from '../Images/stutern.jpg'
import zuri from '../Images/zuri.jpg'
import Educative from '../Images/educative.png'
import Collab from '../Images/collablab.png'

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
            <img src={stutern} alt="A git card" className='html' />
            <h1 class="card-title">2000-2002</h1>
            <p class="card-detail">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sequi recusandae laborum ipsam dignissimos nostrum vitae provident officia, consectetur ab accusantium corrupti exercitationem temporibus repellat non magni cupiditate ea reprehenderit.</p>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <img src={HNG} alt="A git card" className='html' />
            <h1 class="card-title">2000-2002</h1>
            <p class="card-detail">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sequi recusandae laborum ipsam dignissimos nostrum vitae provident officia, consectetur ab accusantium corrupti exercitationem temporibus repellat non magni cupiditate ea reprehenderit.</p>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <img src={Educative} alt="A git card" className='html' />
            <h1 class="card-title">2000-2002</h1>
            <p class="card-detail">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sequi recusandae laborum ipsam dignissimos nostrum vitae provident officia, consectetur ab accusantium corrupti exercitationem temporibus repellat non magni cupiditate ea reprehenderit.</p>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <img src={Collab} alt="A git card" className='html' />
            <h1 class="card-title">2000-2002</h1>
            <p class="card-detail">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sequi recusandae laborum ipsam dignissimos nostrum vitae provident officia, consectetur ab accusantium corrupti exercitationem temporibus repellat non magni cupiditate ea reprehenderit.</p>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <img src={zuri} alt="A git card" className='html' />
            <h1 class="card-title">2000-2002</h1>
            <p class="card-detail">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sequi recusandae laborum ipsam dignissimos nostrum vitae provident officia, consectetur ab accusantium corrupti exercitationem temporibus repellat non magni cupiditate ea reprehenderit.</p>
          </div>
        </div>





      </div>
    </div>
  )
}

export default Experience