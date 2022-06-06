// import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {motion} from 'framer-motion';

const backdropVariants = {
    hidden: {
        y:'-100vw',
    },
    visible: {
        y: 0,
        transition: {
            delay: 0,
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    }
}
const listVariants = {
    hidden: {
        x:-10,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
    }

}

const ScreenDrop = ({open, setOpen}) => {
    const router = useRouter();
    const data =[
        {
            pathname: '',
            link: '',
        },
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

<motion.div
className='h-screen w-screen fixed z-[1] top-0 left-0 bg-slate-900/90'
variants={backdropVariants}
initial="hidden"
animate="visible">
          <motion.button
           whileHover={{
          scale: [1, 1.4, 1.2],
          rotate: [0, 10, -10, 0],
          transition: {
            duration: .2
          }}}
          onClick={()=>setOpen(prev=>!prev)} className='absolute top-10 right-10'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          </motion.button>
          <div className=' flex flex-col items-center justify-center gap-5 relative top-[25%] w-[100%] text-center mt-[30px] text-4xl font-extrabold '>
          <ul className=' list-none  transition-all ease-in  duration-300'>
              {
                data.map((item, i)=>{
                    return (

                        <motion.li
                        key={i}
                        className=''
                        variants={listVariants}
                        // initial='hidden'
                        // animate='visible'
                        >
                        
                  {
                      router.pathname === item.pathname ?
                      <motion.button  whileHover={{scale:1.1}}
                      whileTap={{scale:0.9}} onClick={() => setOpen(false)} className=' p-1 w-48 mb-3 font-black dark:text-white'><a>{item.link}</a></motion.button> :
                      <Link href={item.pathname} passHref><motion.button
                      whileHover={{scale:1.1}}
                      whileTap={{scale:0.9}} className=' p-1 w-48 mb-3 font-black dark:text-white'><a>{item.link}</a></motion.button></Link>
                    }
                    </motion.li>
                    )
                })
              }
          
          </ul>
          </div>
          </motion.div>
          : null
        }
        </>
          )
}

export default ScreenDrop