import React from 'react';
import Link from 'next/link';
import Screendrop from './screendrop';
import { useState } from 'react';

const Navbar = () => {
    // const [ open, setOpen ]= useState(false)

    const meniu = [
        {
            title: 'Home',
            url: '/'
        },
        {
            title: 'Resume',
            url: '/resume'
        },
        {
            title: 'Portfolio',
            url: '/portfolio'
        },
        {
            title: 'Contacts',
            url: '/contact'
        }
    ]
    
    const [open, setOpen ]=useState(false)
    const handleOpen = () => {
       setOpen(!open);
    };

  return (
      
    <header className='z-50 bg-purple-600 shadow-xl text-white h-14 flex items-center sticky top-0'>
        <nav className='flex mx-auto justify-between container px-6'>
            <div className='flex items-center'>
                {/* TODO: linko truksta ir logo */}
                <Link href={'/'}>
                    <button>
                        <h2 className='text-xl font-light'>
                            Ta<span className='font-bold'>Del</span>
                            </h2>
                    </button>
                </Link>
            </div>
            <div className="hidden md:block">
                {meniu.map((item, i)=>{
                    return (
                        <Link key={i} href={item.url} title={item.title}>
                            <a className='mx-3 hover:text-yellow-300 transition-color duration-100 ease-in-out'>
                            {item.title}
                            </a>
                            </Link>   
                    )
                })}
            </div>
            <div className='md:hn idden'>
            {
                open &&
                <Screendrop onClick={handleOpen}></Screendrop>
            }
            <button className=' w-12 h-12 flex justify-center items-center' onClick={handleOpen}>
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