// import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ScreenDrop = ({open, setOpen}) => {
    const router = useRouter();
    const data =[
        {
            pathname: '/',
            link: 'Home',
        },
        {
            pathname: '/resume',
            link: 'Resume',
        },
        {
            pathname: '/portfolio',
            link: 'Portfolio',
        },
    ]

  return (
      <>
      { open ?

<div className='h-screen w-screen fixed z-[1] top-0 left-0 bg-slate-900/90 overflow-y-hidden transition duration-700 overscroll-none'>
          <button  onClick={()=>setOpen(prev=>!prev)} className='absolute top-10 right-10'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          </button>
          <div className=' flex flex-col items-center justify-center gap-5 relative top-[25%] w-[100%] text-center mt-[30px] text-4xl font-extrabold '>
          <ul className=' list-none  transition-all ease-in  duration-300'>
              {
                data.map((item, i)=>{
                    return (

                        <li key={i} className=''>
                  {
                      router.pathname === item.pathname ?
                      <button onClick={() => setOpen(false)} className=' p-1 w-48 mb-3 font-black dark:text-white'><a>{item.link}</a></button> :
                      <Link href={item.pathname} passHref><button className=' p-1 w-48 mb-3 font-black dark:text-white'><a>{item.link}</a></button></Link>
                    }
                    </li>
                    )
                })
              }
          
          </ul>
          </div>
          </div>
          : null
        }
        </>
          )
}

export default ScreenDrop