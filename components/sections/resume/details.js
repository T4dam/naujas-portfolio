import React from 'react';
import Image from 'next/image'

const Details = () => {
  return (
    <section className='bg-slate-900 h-full w-full  text-white'>
    <div className=' w-full h-full mx-auto flex justify-center p-4 sm:p-0 md:p-4 items-center max-w-[640px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:lg:max-w-[1152px] '>
        <div className=' container w-full flex flex-col  md:flex-row justify-center items-center mb-12 gap-12'>
            <div className='md:basis-full w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[400px]lg:w-[700px] lg:h-[500px] relative'>
                <Image src='/images/files.svg' alt='Illustrtion of CV document' layout='fill' /> 
            </div>
            <div className='basis-full'>
              <div className='flex-col justify-center items-center mx-auto max-w-[370px] lg:max-w-[420px]'>
                  <div className='font-bold  text-4xl mb-3 text-end sm:text-left'>A developer who was raised from sales and a lot of coffee.</div>
                  <div className='flex-grow text-justify sm:text-left mb-4'>Front-end developer with a desire to write quality code and to create
                  an amazing user experience. I{`'`}m looking for opportunities to grow and create something meaningful.
                  <br />If you feel like you{`'`}re looking to hire someone like me, please don{`'`}t be hesitate. Grab a copy of
                  my resume and let{`'`}s talk.</div>
                        <a href ="/Tadas_Delininkaitis_CV.pdf" attributes-list download>
                  <button className=' mx-auto md:m-0 shadow-md bg-green-400 p-2 w-44 md:w-72 rounded-[4px] mt-4 hover:bg-green-300 flex justify-center items-center text-slate-900'>
                      <p>Download Resume</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
                      </button>
                        </a>
              </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Details