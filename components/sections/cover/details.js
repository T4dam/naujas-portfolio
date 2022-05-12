import React from 'react'

const Details = () => {
  return (
    <section className='bg-slate-900 h-full w-full text-white'>
        <div className='containter h-auto mx-auto flex justify-center'>
           <div className=' text-center mb-24 sm:text-left flex flex-col sm:flex-row gap-12  sm:max-w-2xl md:max-w-3xl lg:max-w-5xl justify-center p-4'>
               <div className='flex flex-col'>
                   <div className='flex felx-row justify-center sm:gap-0 sm:flex-col sm:justify-start items-center sm:items-start'>
                        <div className='sm:mb-4 sm:w-40 basis-full '>
                            <div className='text-2xl font-bold'>Type</div>
                            <div>Graphic design</div>
                        </div>
                        <div className='basis-full'>
                            <div className='text-2xl font-bold'>When</div>
                            <div>June 2015</div>
                        </div>
                   </div>
                            <div className='flex self-center sm:self-start h-1 w-full sm:w-32 bg-green-400 mt-3'></div>
               </div>
               <div className='flex flex-col'>
                   <div className='text-2xl font-bold mb-2'>Youtube art cover for a band {`"`}Dogma{`"`}</div> 
                   <div className='text-lg text-justify sm:text-left'> Yes, indeed, this is not a coding example but a graphic design one which 
                   may come in handy in front-end environment. I am no stranger to both Adobe Photoshop or Adobe
                   Illustrator and can edit photos, mockups and etc. This project is dear
                   to me because I was asked to work with hip-hop artists mostly known from a
                   band called {`"`}G{`&`}G Sindikatas{`"`} and probably the most famous photographer
                   in Lithuania Vytautas Dranginis. 

          <br />
          <br />
          Technologies used for this project: Adobe Photoshop, Adobe Bridge.
          </div> 
               </div>
           </div>
        </div>
    </section>
  )
}

export default Details