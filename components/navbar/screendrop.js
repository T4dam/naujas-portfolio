// import { useState } from 'react';
import Link from 'next/link';

const ScreenDrop = ({open, setOpen}) => {
  
  return (
      <>
      { open ?

<div className='h-[100%] w-[100%] fixed z-[1] top-0 left-0 bg-slate-900/90 overflow-y-hidden transition duration-700 overscroll-none'>
          <button  onClick={()=>setOpen(prev=>!prev)} className='absolute top-20 right-16'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          </button>
          <div className='flex flex-col items-center gap-12 relative top-[25%] w-[100%] text-center mt-[30px] text-4xl'>
          <Link href={'/'} passHref><button className='p-1 w-48'><a>Home</a></button></Link>
          <Link href={'/resume'} passHref><button className='p-1 w-48'><a>Resume</a></button></Link>
          <Link href={'/portfolio'} passHref><button className='p-1 w-48'><a>Portfolio</a></button></Link>
          </div>
          </div>

          : null
        }
        </>
          )
}

export default ScreenDrop