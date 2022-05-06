import React from 'react';
import Image from 'next/image'

const TaskyHero = () => {
  return (
    <section className='bg-slate-900 h-full w-full text-white'>
        <div className='container  w-full h-full mx-auto flex p-4 sm:p-0 md:p-4 items-center'>
            <div>go back</div>
            <div className='bg-green-300 h-[500px] w-full max-w-5xl mx-auto my-24 rounded-xl overflow-hidden relative'>
            <Image src='/images/taskyClose.jpg' alt='Website photo cover' layout='fill' objectFit='cover' /> 
            </div>
        </div>
    </section>
  )
}

export default TaskyHero