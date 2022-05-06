import React from 'react'

const Details = () => {
  return (
    <section className='bg-slate-900 h-full w-full text-white'>
        <div className='containter h-auto mx-auto flex justify-center'>
           <div className=' text-center mb-24 sm:text-left flex flex-col sm:flex-row gap-12  sm:max-w-2xl md:max-w-3xl lg:max-w-5xl justify-center p-4'>
               <div className='flex flex-col items-center sm:items-start'>
                    <div className='mb-4 w-40'>
                        <div className='text-2xl font-bold'>Type</div>
                        <div>Graphic design</div>
                    </div>
                    <div>
                        <div className='text-2xl font-bold'>When</div>
                        <div>June 2015</div>
                        <div className='h-1 w-32 bg-green-400 mt-3'></div>
                    </div>
               </div>
               <div className='flex flex-col'>
                   <div className='text-2xl font-bold mb-2'>Youtube art cover for a band {`"`}Dogma{`"`}</div> 
                   <div className='text-lg'> Yes, indeed, this is not a coding example but a graphic design one which 
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