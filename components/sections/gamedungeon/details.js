import React from 'react'

const Details = () => {
  return (
    <section className='bg-slate-900 h-full w-full text-white'>
        <div className='containter h-auto mx-auto flex justify-center'>
           <div className=' text-center mb-24 sm:text-left flex flex-col sm:flex-row gap-12  sm:max-w-2xl md:max-w-3xl lg:max-w-5xl justify-center p-4'>
               <div className='flex flex-col'>
                   <div className='flex felx-row justify-center sm:gap-0 sm:flex-col sm:justify-start items-center sm:items-start'>
                        <div className='sm:mb-4 sm:w-40 basis-full'>
                            <div className='text-2xl font-bold'>Type</div>
                            <div>FrontEnd</div>
                        </div>
                        <div className='basis-full'>
                            <div className='text-2xl font-bold'>When</div>
                            <div>September 2021</div>
                        </div>
                   </div>
                            <div className='flex self-center sm:self-start h-1 w-full sm:w-32 bg-green-400 mt-3'></div>
               </div>
               <div className='flex flex-col'>
                   <div className='text-2xl font-bold mb-2'>Gamedungeon - cloud services for gamers</div> 
                   <div className='text-lg text-justify sm:text-left'> This is my very first website I ever made. I chose to create a website for a fictional company that offers cloud based gaming services.

                   This may seem like a small step but in terms of my of my career as a developer it meant {`"`}Hello world{`"`}.

          <br />
          <br />
          Technologies used for this project: HTML, CSS, Javascript, Bootstrap.
          </div> 
               </div>
           </div>
        </div>
    </section>
  )
}

export default Details