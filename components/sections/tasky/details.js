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
                            <div>Backend</div>
                        </div>
                        <div className='basis-full'>
                            <div className='text-2xl font-bold'>When</div>
                            <div>March 2022</div>
                        </div>
                   </div>
                            <div className='flex self-center sm:self-start h-1 w-full sm:w-32 bg-green-400 mt-3'></div>
               </div>
               <div className='flex flex-col'>
                   <div className='text-2xl font-bold mb-2'>Tasky - task management tool</div> 
                   <div className='text-lg text-justify sm:text-left'> For the final thesis of the CodeAcademy course, I chose to create
          an intuitive tool to track and easily manage tasks. This tool can be used to increase productivity. Also it helps to keep track of things helping you to prioritise tasks efficiently.
          The advantage over other task boards of this type is that
          it is free and tailored to the Lithuanian audience, so
          it can be used by users with no foreign language skills.
          <br />
          <br />
          Technologies used for this project: HTML, CSS, Javascript, React, Redux Toolkit, Express.js, Node.js, Formik, Material-UI, Axios, Immer, React Router, React Beautiful Dnd.
          </div> 
               </div>
           </div>
        </div>
    </section>
  )
}

export default Details