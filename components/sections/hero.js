import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='bg-blue-300 h-screen -mt-14'>
       <div className='container mx-auto pt-14 h-full'>
           <div className='bg-red-200 h-full w-full flex justify-center items-center'>
                <div className='bg-pink-500 md:flex w-full max-w-6xl gap-y-1 md:gap-20 justify-between items-center'>
                  <div className='text-white text-center md:text-left'>
                            <h2 className='text-2xl'>Hi, there! <br /> I'm Tadas and I'm a </h2>
                            <h1 className='sm:text-7xl lg:text-8xl xl:text-9xl font-bold font-black'>
                              FRONTEND <br />
                              DEVELOPER
                            </h1>
                  </div>
                  <div className='m-auto md:mr-0 mshrink-0 bg-gradient-to-br from-pink-500 via-sky-500 to-sky-700 border-8 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:h-80 xl:w-80 bg-red-600 rounded-full overflow-hidden relative'>
                        <Image className='scale-110'src={'/images/avatar.png'} alt='student programer' layout={'fill'} objectFit='cover'/>
                  </div>
                </div>
           </div>
        <div> </div>
       </div>
        </section>
  )
}

export default Hero