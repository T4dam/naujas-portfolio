import React from 'react';
import Image from 'next/image'

const Details = () => {
  return (
    <section className='bg-slate-900 h-full w-full text-white'>
    <div className='container w-full h-full mx-auto flex p-4 sm:p-0 md:p-4 items-center'>
        <div className='w-full flex justify-center items-center'>
            <div className='w-32 h-32 relative'>
                <Image src='/images/resume.svg' alt='Illustrtion of CV document' layout='fill' /> 
            </div>
            <div className='flex-grow'>Hello there</div>
        </div>
    </div>
    </section>
  )
}

export default Details