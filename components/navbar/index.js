import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    const meniu = [
        {
            title: 'Home',
            url: '/'
        },
        {
            title: 'About',
            url: '/'
        },
        {
            title: 'Portfolio',
            url: '/portfolio'
        },
        {
            title: 'Contacts',
            url: '/'
        }
    ]
  return (
      
    <header className='z-50 bg-purple-400 shadow-xl text-white h-14 flex items-center sticky top-0'>
        <nav className='flex mx-auto justify-between container px-6'>
            <div className='flex items-center'>
                <h2 className='text-xl font-light'>
                    Logo
                    </h2>
            </div>
            <div className="hidden md:block">
                {meniu.map((item, i)=>{
                    return (
                        <Link key={i} href={item.url} title={item.title}>
                            <a className='mx-3 hover:text-yellow-500 transition-color duration-100 ease-in-out'>
                            {item.title}
                            </a>
                            </Link>   
                    )
                })}
            </div>
            <div className='md:hidden'>
                <button className=' w-12 h-12 flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar