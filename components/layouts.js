import React from 'react'
import Navbar from './navbar/index'

const Layout = ({children}) => {
  return (
      <div className='w-full flex flex-col justify-between min-h-screen'>
            <Navbar />
    <main className='flex-grow h-full'>
        {children}
        </main>
        <footer>
            &copy;Pavadinimas {new Date().getUTCFullYear()}
        </footer>
      </div>
  )
}

export default Layout