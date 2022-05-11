import React from 'react'

const PorfolioHero = () => {
  return (

      <section className='bg-slate-900 h-[600px] -mt-24 sm:-mt-14'>
        <div className='container mx-auto  w-full h-full pt-14 flex justify-center items-center'>
            <div className=' -mt-40 sm w-full max-w-6xl text-white flex flex-col gap-10 p-4'>
              <h2 className='text-center sm:text-left text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-black font-bold font-black font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#80ff72] to-[#7ee8fa]'>PORTFOLIO</h2>
              <div className='h-1 md:h-1 w-full bg-green-400'></div>
              <h3 className='text-center md:text-left text-2xl sm:text-3xl lg:text-4xl xl:text-5xl '>Here are some examples of my work</h3>
            </div>
            <div className='absolute bottom-3 w-full text-white'>
          <div className='flex justify-center'>
            {/* <div className='flex items-center mr-1 sm:mr-3 scroll'>
            <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce w-5 h-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
</svg>
            </div>
            <p className='uppercase text-[8px] leading-3'>Scroll down<br /> to learn more</p> */}
          </div>
        </div>
        </div>

      </section>
  )
}

export default PorfolioHero