import React from 'react'
import Navbar from './navbar/index'

const Layout = ({children}) => {
  return (
      <div className='w-full flex flex-col justify-between min-h-screen'>
            <Navbar />
    <main className='flex-grow h-full'>
        {children}
        </main>
        <footer className='bg-purple-900 w-full text-center text-white text-[14px] h-8 flex items-center justify-center'>
            &copy; Ta<span className='font-black mr-1'>Del</span>  {new Date().getUTCFullYear()}
        </footer>
      </div>
  )
}

export default Layout