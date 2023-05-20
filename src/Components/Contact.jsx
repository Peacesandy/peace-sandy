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
      <form>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          type='text'
        />
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='text'
        />
        <label htmlFor='message'>Message</label>
        <textarea
          id='message'
          type='text'
        ></textarea>
        <button type='submit'>send</button>
      </form>
      <hr/>
    </div>
  )
}

export default Contact