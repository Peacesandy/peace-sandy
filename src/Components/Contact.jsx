import React from 'react'
import '../Styles/Contact.css'



function Contact() {

  return (
    <div className='contact-container' id='contact'>
      <div className='contact-text'>
        <h1>Contact</h1>
        <br/>
        <p>Invite me to speak at your conference, tell me about other</p>
      </div>
      <div className='contact-form-container'> 
      <div className='contact-form'>  
      <form>
        <div className='form-control'> 
        <label htmlFor='name' className='label-contact'>Name</label>
        <input
          id='name'
          type='text'
        />
        </div>
        <div className='form-control'> 
        <label htmlFor='email' className='label-contact'>Email</label>
        <input
          id='email'
          type='text'
        />
        </div>
        <div className='form-control'> 
        <label htmlFor='message' className='label-contact'>Message</label>
        <textarea
          id='message'
          type='text'
        ></textarea>
        </div>
        <div className='btn-div'>
        <button type='submit' className='submit-btn'>send</button>
        </div>
      </form>
      </div>
      </div>
      
    </div>
  )
}

export default Contact