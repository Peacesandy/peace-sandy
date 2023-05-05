import React from 'react'
import { useState, useEffect } from 'react'
import '../Styles/Portfolio.css'

function Portfolio() {
  
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect ( () => {
    function handleScroll() {
        const scrollY = window.scrollY
        const windowHeight = window.innerHeight
        const element = document.getElementById('scrolling-text')

        if (element) {
        const elementY = element.getBoundingClientRect().top + scrollY
        const elementHeight = element.clientHeight
        
        if (scrollY > elementY - windowHeight + elementHeight / 2) {
          setIsScrolling(true)
        } else {
          setIsScrolling(false)
        }
    }
  }
      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    } ,[])

  return (
    <div  id="scrolling-text" className={isScrolling ? 'ScrollingText ScrollingText--animate' : 'ScrollingText'}>
      <h1>Check out my projects</h1>
      <img src='Profile'/>
    </div>
  )
}

export default Portfolio