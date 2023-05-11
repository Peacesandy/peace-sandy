import React from 'react'
import { motion } from 'framer-motion'

function Blog() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ duration: 1.2 }}
    >  
    <h1>Framer Motion Testing</h1>
      </motion.div>
      
  )
}

export default Blog