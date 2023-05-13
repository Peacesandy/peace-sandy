import React from 'react'
import image from '../Images/image2 (2).jpeg'
import '../Styles/Home.css'

function Home() {
  return (
    <div className='container' id='home'>

      <div className='image-container'>  
      <img src={image} alt='author' className='image'/>
      </div>

      <div className='text'>
      <h1 className='name'>Hello, I'm Peace Sandy</h1>
      <br/>
        <p className='bio'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         <br/> Incidunt perferendis, molestias optio laborum excepturi soluta 
         <br/> quas magni itaque recusandae. Perferendis aliquid sed mollitia enim possimus!</p>
        </div>
          <div>
            <button>Download My Resume</button>
          </div>
    </div>
  )
}

export default Home