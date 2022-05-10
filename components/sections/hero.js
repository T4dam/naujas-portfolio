import React from 'react'
import Image from 'next/image'


const Hero = () => {
  return (
    <>
   
    <section className='bg-gradient-to-b from-purple-600 to-slate-900 md:from-black-500 h-screen min-h-[500px] -mt-14'>
       <div className='container mx-auto pt-14 h-full relative'>
           <div className=' h-full w-full flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center md:items-start'>
                  <div className=' flex flex-col-reverse md:flex md:flex-row w-full max-w-6xl gap-y-1 md:gap-20 justify-between items-center'>
                    <div className='flex flex-col items-center md:items-start'>
                      <div className='text-white text-center md:text-left'>
                                <h2 className='text-lg md:text-2xl'>Hi, there! <br /> I{`'`}m Tadas and I{`'`}m a </h2>
                                <h1 className='text-4xl sm:text-5xl lg:text-8xl xl:text-9xl font-bold font-black'>
                                  FRONT-END <br />
                                  DEVELOPER
                                </h1>
                      </div>
                  <div className=''>
                    <button className=' shadow-md bg-green-400 p-2 w-44 md:w-72 rounded-[4px] mt-4 hover:bg-green-300'>
                      <p>Say Hello</p>
                    </button>
                  </div>
                    </div>
                    <div className='m-auto mt-5 md:mt-0 md:mr-0 mshrink-0 bg-gradient-to-br from-pink-500 via-sky-500 to-sky-700 border-8 w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:h-80 xl:w-80 bg-red-600 rounded-full overflow-hidden relative'>
                          <Image className='scale-110'src={'/images/avatar.png'} alt='student programer' layout={'fill'} objectFit='cover'/>
                    </div>
                  </div>
                </div>
           </div>
        <div className='hidden md:block absolute bottom-3 w-full text-white'>
          <div className='flex justify-center'>
            <div className='flex items-center mr-1 sm:mr-3 scroll'>
            <svg xmlns="http://www.w3.org/2000/svg" className=" animate-bounce w-5 h-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
</svg>
            </div>
            <p className=' uppercase text-[8px] leading-3'>Scroll down<br /> to learn more</p>
          </div>
        </div>
       </div>
        </section>
    </>
  )
}

export default Hero