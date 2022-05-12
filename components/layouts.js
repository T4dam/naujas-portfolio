import React from 'react'
import Navbar from './navbar/index'
import { motion } from 'framer-motion'

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

const Layout = ({children}) => {

    return (
      <div className='w-full flex flex-col justify-between min-h-screen'>
          <Navbar />
          <motion.main
    initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: 'linear' }} className='flex-grow h-full'>
              {children}
          </motion.main>
          <footer className='bg-purple-900 w-full text-center text-white text-[14px] h-8 flex items-center justify-center'>
                  &copy; Ta<span className='font-black mr-1'>Del</span>  {new Date().getUTCFullYear()}
              </footer>
      </div>
  )
}

export default Layout